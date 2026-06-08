import path from "path"
import fs from "fs"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import viteCompression from "vite-plugin-compression"

// Vite server middleware to support HTTP Content Negotiation for Markdown (serving LLM-ready context to crawlers and agents)
function markdownNegotiationPlugin() {
  return {
    name: 'markdown-negotiation',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const acceptHeader = req.headers['accept'] || '';
        const userAgent = req.headers['user-agent'] || '';
        
        // Match header preference or known AI bots
        const wantsMarkdown = acceptHeader.includes('text/markdown') || acceptHeader.includes('text/x-markdown');
        const isAICrawler = /GPTBot|ClaudeBot|Google-Extended|Anthropic-AI|CommonCrawl|cohere-ai|facebookexternalhit|OAI-SearchBot/i.test(userAgent);
        
        // Intercept root page and serve clean markdown
        const parsedUrl = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
        if (wantsMarkdown || (isAICrawler && (parsedUrl.pathname === '/' || parsedUrl.pathname === '/index.html'))) {
          try {
            const filePath = path.resolve(__dirname, './public/llms.txt');
            const markdownContent = fs.readFileSync(filePath, 'utf-8');
            const tokenCount = Math.ceil(markdownContent.length / 4);
            
            res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
            res.setHeader('X-Markdown-Tokens', String(tokenCount));
            res.setHeader('Access-Control-Allow-Origin', '*'); // Enable cross-origin fetching for agents
            res.end(markdownContent);
            return;
          } catch (err) {
            res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
            res.end('# RUA Thai Spa\nAuthentic traditional Thai massage and wellness sanctuary.');
            return;
          }
        }
        next();
      });
    }
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    markdownNegotiationPlugin(),
    viteCompression({
      algorithm: "brotliCompress",
      ext: ".br",
      threshold: 1024
    }),
    viteCompression({
      algorithm: "gzip",
      ext: ".gz",
      threshold: 1024
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    target: "esnext",
    minify: "esbuild",
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("lucide-react")) {
              return "vendor-icons";
            }
            if (id.includes("react") || id.includes("react-dom") || id.includes("scheduler")) {
              return "vendor-react";
            }
            return "vendor-others";
          }
        }
      }
    }
  }
})