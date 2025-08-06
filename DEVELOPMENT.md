# Development Guide

Quick reference guide for developing this portfolio project.

## 🚀 Quick Start Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npm run type-check

# Deploy to GitHub Pages
npm run deploy
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx     # Navigation
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills showcase
│   ├── Projects.tsx   # Projects gallery
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer
├── assets/            # Static assets
├── App.tsx           # Main app component
├── App.css           # Main styles
├── main.tsx          # Entry point
└── index.css         # Global styles
```

## 🛠️ Development Workflow

### 1. Making Changes

1. **Edit Components**: Modify files in `src/components/`
2. **Update Styles**: Edit CSS files in `src/`
3. **Test Changes**: Browser auto-refreshes with HMR
4. **Check Console**: Monitor for errors

### 2. Code Quality

```bash
# Before committing, run:
npm run lint
npm run type-check
npm run build
```

### 3. Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit with descriptive message
git commit -m "feat: add new project section"

# Push to remote
git push origin main
```

## 🎨 Styling Guidelines

### CSS Structure
- **Global Styles**: `src/index.css`
- **Component Styles**: `src/App.css`
- **Component-Specific**: Co-located with components

### Best Practices
- Use CSS custom properties for theming
- Mobile-first responsive design
- Semantic HTML structure
- Accessibility considerations

## 🔧 Configuration Files

### Vite Configuration (`vite.config.ts`)
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  server: {
    port: 3000,
    open: true,
  },
})
```

### TypeScript Configuration (`tsconfig.app.json`)
- Strict type checking enabled
- Modern ES2022 target
- React JSX support

### ESLint Configuration (`eslint.config.js`)
- TypeScript-aware linting
- React hooks rules
- Modern JavaScript features

## 📦 Dependencies

### Production Dependencies
- `react`: ^19.1.0
- `react-dom`: ^19.1.0
- `crypto-browserify`: ^3.12.1

### Development Dependencies
- `@vitejs/plugin-react-swc`: ^3.10.2
- `typescript`: ~5.8.3
- `eslint`: ^9.30.1
- `gh-pages`: ^6.3.0

## 🚀 Deployment

### Automatic Deployment
- Push to `main` branch triggers GitHub Actions
- Automatic build and deploy to GitHub Pages

### Manual Deployment
```bash
npm run deploy
```

### Deployment Configuration
- **Base URL**: `/portfolio/`
- **Build Output**: `dist/` folder
- **Deployment Branch**: `gh-pages`

## 🐛 Debugging

### Common Issues
1. **Port conflicts**: Use `npm run dev -- --port 3001`
2. **TypeScript errors**: Run `npm run type-check`
3. **ESLint errors**: Run `npm run lint:fix`
4. **Build failures**: Clear cache and reinstall

### Debug Commands
```bash
# Debug Vite
DEBUG=vite:* npm run dev

# Check TypeScript
npx tsc --noEmit

# Check ESLint
npm run lint

# Check build
npm run build
```

## 📝 Best Practices

### Code Organization
- Keep components small and focused
- Use TypeScript for type safety
- Follow ESLint rules
- Write meaningful commit messages

### Performance
- Use React.memo for expensive components
- Optimize images and assets
- Minimize bundle size
- Use code splitting when needed

### Accessibility
- Use semantic HTML
- Provide alt text for images
- Ensure keyboard navigation
- Test with screen readers

## 🔗 Useful Commands

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Clear npm cache
npm cache clean --force

# Update dependencies
npm update

# Check for security vulnerabilities
npm audit

# Fix security issues
npm audit fix
```

## 📚 Resources

- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Vite Guide](https://vitejs.dev/guide/)
- [ESLint Rules](https://eslint.org/docs/rules/)
- [GitHub Pages](https://pages.github.com/)
