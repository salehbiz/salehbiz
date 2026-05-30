import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      ignored: ['**/Aria/**'],
    },
  },
  optimizeDeps: {
    entries: ['index.html'],
    exclude: ['Aria'],
  },
  // @ts-ignore
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes(paths, routes) {
      // Filter out parameterized dynamic route patterns
      const staticPaths = paths.filter(p => !p.includes(':'));

      const blogSlugs = [
        'does-your-website-cost-you-clients',
        'what-to-put-on-a-consulting-website',
        'how-to-write-about-yourself-without-sounding-like-a-cv',
        'why-consultants-dont-need-a-big-website',
        'what-clients-actually-do-before-they-book-a-call',
        'linkedin-vs-personal-brand-website'
      ];

      const projectSlugs = [
        'marabi',
        'world-business-hub',
        'usman-zafar',
        'raco'
      ];

      return [
        ...staticPaths,
        ...blogSlugs.map(slug => `/blog/${slug}`),
        ...projectSlugs.map(slug => `/project/${slug}`)
      ];
    }
  }
})