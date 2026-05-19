const fs = require('fs');
const path = require('path');
const { XMLParser } = require('fast-xml-parser');

const XML_PATH = 'C:/Users/Admin/Downloads/minsoft_temp/word/document.xml';
const RELS_PATH = 'C:/Users/Admin/Downloads/minsoft_temp/word/_rels/document.xml.rels';
const OUTPUT_PATH = 'src/data/manualData.ts';

function parseManual() {
  const relsXml = fs.readFileSync(RELS_PATH, 'utf8');
  const parser = new XMLParser({ ignoreAttributes: false });
  const relsObj = parser.parse(relsXml);
  const relsMap = {};
  
  let relationships = relsObj.Relationships.Relationship;
  if (!Array.isArray(relationships)) relationships = [relationships];
  
  relationships.forEach(r => {
    if (r['@_Type']?.includes('image')) {
      relsMap[r['@_Id']] = r['@_Target'].split('/').pop();
    }
  });

  const docXml = fs.readFileSync(XML_PATH, 'utf8');
  const docObj = parser.parse(docXml);
  const body = docObj['w:document']['w:body'];
  const paragraphs = body['w:p'];

  let manualData = [];
  let currentProgram = null;
  let currentCategory = null;
  let currentSection = null;

  function createId(name) {
    return name.toLowerCase().replace(/[^a-z0-9]/g, '_').substring(0, 20) + '_' + Math.random().toString(36).substr(2, 5);
  }

  function walkNode(node, callback) {
    if (!node) return;
    if (Array.isArray(node)) {
      node.forEach(n => walkNode(child, callback));
    } else if (typeof node === 'object') {
      callback(node);
      Object.values(node).forEach(v => walkNode(v, callback));
    }
  }

  paragraphs.forEach(p => {
    const pPr = p['w:pPr'];
    const style = pPr?.['w:pStyle']?.['@_w:val'];
    const fontSize = pPr?.['w:rPr']?.['w:sz']?.['@_w:val'];
    
    // Extract text and images in order for this paragraph
    let pContent = '';
    let pImages = [];
    
    // Paragraph runs
    let runs = p['w:r'];
    if (runs && !Array.isArray(runs)) runs = [runs];
    
    (runs || []).forEach(r => {
      // Text
      if (r['w:t']) {
        const t = r['w:t'];
        pContent += (typeof t === 'string' ? t : (t['#text'] || ''));
      }
      
      // Inline Images
      if (r['w:drawing']) {
        const blips = [];
        const findBlips = (obj) => {
            if (!obj || typeof obj !== 'object') return;
            if (obj['a:blip']) blips.push(obj['a:blip']);
            Object.values(obj).forEach(findBlips);
        };
        findBlips(r['w:drawing']);
        blips.forEach(blip => {
            const rId = blip['@_r:embed'];
            if (rId && relsMap[rId]) {
                const imgFile = relsMap[rId];
                pImages.push(imgFile);
                pContent += `\n\n![image](/images/${imgFile})\n\n`;
            }
        });
      }
    });

    const text = pContent.trim();

    if (style === 'Heading1' || fontSize === '90') {
      if (!text) return;
      currentProgram = {
        id: createId(text),
        name: text.replace(/!\[image\].*?\)/g, '').trim(),
        categories: []
      };
      manualData.push(currentProgram);
      currentCategory = null;
      currentSection = null;
    } else if (style === 'Heading2' || fontSize === '54' || (style === 'Heading1' && currentProgram)) {
      if (!text) return;
      if (!currentProgram) {
          currentProgram = { id: 'default', name: 'General', categories: [] };
          manualData.push(currentProgram);
      }
      currentCategory = {
        id: createId(text),
        name: text.replace(/!\[image\].*?\)/g, '').trim(),
        sections: []
      };
      currentProgram.categories.push(currentCategory);
      currentSection = null;
    } else {
      if (!currentCategory) {
          if (!currentProgram) {
              currentProgram = { id: 'default', name: 'General', categories: [] };
              manualData.push(currentProgram);
          }
          currentCategory = { id: 'intro', name: 'Introduction', sections: [] };
          currentProgram.categories.push(currentCategory);
      }

      if (text || pImages.length > 0) {
          const isBold = pPr?.['w:rPr']?.['w:b'];
          const cleanText = text.replace(/!\[image\].*?\)/g, '').trim();
          
          if (!currentSection || (cleanText.length > 0 && cleanText.length < 100 && (cleanText.endsWith(':') || isBold))) {
              currentSection = {
                  title: cleanText || 'Details',
                  content: text + '\n\n',
                  type: 'markdown',
                  images: pImages // Backup gallery
              };
              currentCategory.sections.push(currentSection);
          } else {
              currentSection.content += text + '\n\n';
              currentSection.images.push(...pImages);
          }
      }
    }
  });

  // Filter out empty programs
  manualData = manualData.filter(p => p.categories.length > 0);

  const tsContent = 'export interface ManualSection {\n' +
    '  title: string;\n' +
    '  content: string;\n' +
    '  type: "text" | "list" | "steps" | "alert" | "image-placeholder" | "markdown";\n' +
    '  images?: string[];\n' +
    '  youtubeId?: string;\n' +
    '  layout?: "full" | "split";\n' +
    '}\n\n' +
    'export interface ProgramCategory {\n' +
    '  id: string;\n' +
    '  name: string;\n' +
    '  sections: ManualSection[];\n' +
    '  subCategories?: ProgramCategory[];\n' +
    '}\n\n' +
    'export interface ProgramData {\n' +
    '  id: string;\n' +
    '  name: string;\n' +
    '  categories: ProgramCategory[];\n' +
    '}\n\n' +
    'export const manualData: ProgramData[] = ' + JSON.stringify(manualData, null, 2) + ';\n';

  fs.writeFileSync(OUTPUT_PATH, tsContent);
  console.log('Recovery complete with precise image placement!');
}

parseManual();
