
import fs from 'fs';

const xmlData = fs.readFileSync('document_utf8.xml', 'utf-8');

// Regex to find paragraphs
const pRegex = /<w:p\b[^>]*>([\s\S]*?)<\/w:p>/g;
const styleRegex = /<w:pStyle\b[^>]*w:val="([^"]*)"/;
const tRegex = /<w:t\b[^>]*>([\s\S]*?)<\/w:t>/g;
const docPrRegex = /<wp:docPr\b[^>]*name="([^"]*)"/g;
const bRegex = /<w:b\b/;

const programs = [];
let currentProgram = null;
let currentCategory = null;
let currentSubCategory = null;
let currentSection = null;

function slugify(text) {
    return text.toString().toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w\-]+/g, '')
        .replace(/\-\-+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '') || Math.random().toString(36).substring(2, 9);
}

let match;
while ((match = pRegex.exec(xmlData)) !== null) {
    const pContent = match[1];
    
    // Extract style
    const styleMatch = styleRegex.exec(pContent);
    const style = styleMatch ? styleMatch[1] : null;

    // Extract text
    let text = '';
    let tMatch;
    while ((tMatch = tRegex.exec(pContent)) !== null) {
        text += tMatch[1];
    }
    text = text.trim();

    // Extract images
    const images = [];
    let docPrMatch;
    while ((docPrMatch = docPrRegex.exec(pContent)) !== null) {
        images.push(docPrMatch[1]);
    }

    // Check if bold
    const isBold = bRegex.test(pContent);

    if (style === 'Heading1') {
        currentProgram = {
            id: slugify(text),
            name: text,
            categories: []
        };
        programs.push(currentProgram);
        currentCategory = null;
        currentSubCategory = null;
        currentSection = null;
    } else if (style === 'Heading2') {
        if (!currentProgram) {
            currentProgram = { id: 'default', name: 'General', categories: [] };
            programs.push(currentProgram);
        }
        currentCategory = {
            id: slugify(text),
            name: text,
            sections: []
        };
        currentProgram.categories.push(currentCategory);
        currentSubCategory = null;
        currentSection = null;
    } else if (style === 'Heading3') {
        if (!currentCategory) {
            if (!currentProgram) {
                currentProgram = { id: 'default', name: 'General', categories: [] };
                programs.push(currentProgram);
            }
            currentCategory = { id: 'general-cat', name: 'General Category', sections: [] };
            currentProgram.categories.push(currentCategory);
        }
        
        currentSubCategory = {
            id: slugify(text),
            name: text,
            sections: []
        };
        if (!currentCategory.subCategories) currentCategory.subCategories = [];
        currentCategory.subCategories.push(currentSubCategory);
        currentSection = null;
    } else {
        // Normal text or bold title
        if (text || images.length > 0) {
            let parent = currentSubCategory || currentCategory || (currentProgram ? currentProgram.categories[0] : null);
            if (!parent && currentProgram) {
                 currentCategory = { id: 'intro', name: 'Introduction', sections: [] };
                 currentProgram.categories.push(currentCategory);
                 parent = currentCategory;
            }
            if (!parent) continue;

            if (isBold && text && text.length < 100 && !currentSection) {
                currentSection = {
                    title: text,
                    content: '',
                    type: 'markdown',
                    images: images
                };
                parent.sections.push(currentSection);
            } else if (currentSection) {
                if (text) {
                    currentSection.content += (currentSection.content ? '\n\n' : '') + text;
                }
                if (images.length > 0) {
                    currentSection.images.push(...images);
                }
            } else {
                // Create a section if none exists
                currentSection = {
                    title: text.substring(0, 50) || 'Section',
                    content: text,
                    type: 'markdown',
                    images: images
                };
                parent.sections.push(currentSection);
            }
        }
    }
}

const result = JSON.stringify(programs, null, 2);
const output = `
export interface ManualSection {
  title: string;
  content: string;
  type: 'markdown';
  images: string[];
}

export interface ProgramCategory {
  id: string;
  name: string;
  sections: ManualSection[];
  subCategories?: ProgramCategory[];
}

export interface ProgramData {
  id: string;
  name: string;
  categories: ProgramCategory[];
}

export const manualData: ProgramData[] = ${result};
`;

fs.writeFileSync('src/data/manualData.ts.new', output);
console.log('Done');
