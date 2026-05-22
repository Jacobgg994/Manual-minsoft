import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import { promisify } from 'util'

const execAsync = promisify(exec);

// Custom plugin to handle saving manual data
const manualDataSaver = () => ({
  name: 'manual-data-saver',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url === '/api/save-manual' && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', () => {
          try {
            const data = JSON.parse(body);
            const filePath = path.resolve(__dirname, 'src/data/manualData.ts');
            
            // Format the file content
            const fileContent = `
export interface ManualSection {
  title: string;
  content: string;
  type: "markdown";
  images: string[];
  layout?: string;
  youtubeId?: string;
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

export const manualData: ProgramData[] = ${JSON.stringify(data, null, 2)};
`;
            fs.writeFileSync(filePath, fileContent);
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Saved successfully' }));
          } catch (err) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      } else if (req.url?.startsWith('/api/upload-image') && req.method === 'POST') {
        const url = new URL(req.url, `http://${req.headers.host}`);
        const filename = url.searchParams.get('filename');
        
        if (!filename) {
          res.statusCode = 400;
          res.end(JSON.stringify({ error: 'Filename is required' }));
          return;
        }

        const chunks: any[] = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('end', () => {
          const buffer = Buffer.concat(chunks);
          const savePath = path.resolve(__dirname, 'public/images', filename);
          fs.writeFileSync(savePath, buffer);
          res.statusCode = 200;
          res.end(JSON.stringify({ message: 'File uploaded successfully', filename }));
        });
      } else if (req.url === '/api/deploy' && req.method === 'POST') {
        const runDeploy = async () => {
          try {
            await execAsync('git add .');
            try {
              await execAsync('git commit -m "update: auto-publish content updates from admin UI"');
            } catch (commitErr) {
              // Ignore commit error, it means nothing to commit. We still want to push.
            }
            await execAsync('git push origin main');
            res.statusCode = 200;
            res.end(JSON.stringify({ message: 'Deployed successfully to GitHub and Vercel' }));
          } catch (error: any) {
            res.statusCode = 500;
            res.end(JSON.stringify({ error: error.message }));
          }
        };
        runDeploy();
      } else {
        next();
      }
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), manualDataSaver()],
})
