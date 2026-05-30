import App from './App';

export const routes = [
  {
    path: '/',
    Component: App,
    children: [
      { path: '', lazy: () => import('./pages/HomePage').then(m => ({ Component: m.default })) },
      { path: 'about', lazy: () => import('./pages/AboutPage').then(m => ({ Component: m.default })) },
      { path: 'services', lazy: () => import('./pages/ServicesPage').then(m => ({ Component: m.default })) },
      { path: 'project', lazy: () => import('./pages/ProjectsPage').then(m => ({ Component: m.default })) },
      { path: 'project/:slug', lazy: () => import('./pages/ProjectDetailPage').then(m => ({ Component: m.default })) },
      { path: 'contact', lazy: () => import('./pages/ContactPage').then(m => ({ Component: m.default })) },
      { path: 'aria', lazy: () => import('./pages/AriaPage').then(m => ({ Component: m.default })) },
      { path: 'blog', lazy: () => import('./pages/BlogPage').then(m => ({ Component: m.default })) },
      { path: 'blog/:slug', lazy: () => import('./pages/BlogPostPage').then(m => ({ Component: m.default })) }
    ]
  }
];
