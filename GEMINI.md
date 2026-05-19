# Web Manual for Minsoft Thailand

This is a web-based manual designed for Minsoft Thailand, featuring a tabbed interface and a search function.

## Tech Stack
- React (TypeScript)
- Vite
- Lucide React (Icons)
- Vanilla CSS

## Features
- **Program Selection:** Sidebar navigation for different programs (Maxcare, MaxCloudPhone, MaxData).
- **Functional Tabs:** Categorized content within each program.
- **Search:** Real-time search across all categories within a program.
- **Responsive Design:** Professional theme with Purple (#6a1b9a) and Red (#d32f2f).

## How to Run
1. Navigate to the `web-manual` directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Build for production:
   ```bash
   npm run build
   ```

## Maintenance
To update the manual content, modify the data structure in `src/data/manualData.ts`.
To change the theme colors, update the CSS variables in `src/index.css`.
