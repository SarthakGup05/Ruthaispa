import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

try {
  console.log('--- Starting SSG Pre-rendering ---');
  
  // 1. Compile the React app into a Node-friendly server module
  console.log('Building SSR entry module...');
  execSync('npx vite build --ssr src/entry-server.jsx --outDir dist-ssr', { stdio: 'inherit' });

  // 2. Load the render function from the compiled server entry
  console.log('Loading SSR render function...');
  const ssrPath = path.resolve(__dirname, './dist-ssr/entry-server.js');
  // Use file:// protocol for Windows file system dynamic import compatibility
  const ssrUrl = `file://${ssrPath.replace(/\\/g, '/')}`;
  const { render } = await import(ssrUrl);

  // 3. Render the initial homepage shell into static markup
  console.log('Rendering static homepage HTML...');
  const renderedHtml = render();

  // 4. Inject the rendered static HTML into the build client index.html
  console.log('Injecting pre-rendered shell into dist/index.html...');
  const indexPath = path.resolve(__dirname, './dist/index.html');
  
  if (!fs.existsSync(indexPath)) {
    throw new Error('dist/index.html not found! Ensure the client build runs before pre-rendering.');
  }
  
  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  indexHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${renderedHtml}</div>`
  );

  fs.writeFileSync(indexPath, indexHtml, 'utf-8');
  console.log('dist/index.html successfully updated with static shell!');

  // 5. Clean up temporary SSR bundle files
  console.log('Cleaning up temporary SSR build files...');
  fs.rmSync(path.resolve(__dirname, './dist-ssr'), { recursive: true, force: true });
  
  console.log('--- SSG Pre-rendering completed successfully! ---');
} catch (error) {
  console.error('Error during pre-rendering:', error);
  process.exit(1);
}
