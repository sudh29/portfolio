# Troubleshooting Guide

This guide helps you resolve common issues when working with this portfolio project.

## 🚨 Common Issues

### 1. Node.js Version Issues

**Problem**: "Node version not supported" or build failures
```bash
# Check your Node.js version
node --version

# Should be 18.x or higher (recommended: 20.x)
```

**Solution**:
- Update Node.js to version 20.x (LTS)
- Use Node Version Manager (nvm):
  ```bash
  nvm install 20
  nvm use 20
  ```

### 2. Port Already in Use

**Problem**: "Port 3000 is already in use"
```bash
# Check what's using port 3000
lsof -i :3000

# Kill the process
kill -9 <PID>

# Or use a different port
npm run dev -- --port 3001
```

### 3. Dependencies Issues

**Problem**: "Module not found" or "Cannot resolve module"
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install

# Or use npm cache clean
npm cache clean --force
npm install
```

### 4. TypeScript Errors

**Problem**: TypeScript compilation errors
```bash
# Check TypeScript errors
npm run type-check

# Common fixes:
# 1. Remove unused imports
# 2. Fix type annotations
# 3. Update component props interfaces
```

### 5. ESLint Errors

**Problem**: Code quality issues
```bash
# Check ESLint errors
npm run lint

# Fix automatically
npm run lint:fix

# Common fixes:
# - Remove unused variables
# - Fix import/export statements
# - Add missing dependencies to useEffect
```

### 6. Build Failures

**Problem**: Production build fails
```bash
# Clear everything and rebuild
rm -rf node_modules package-lock.json dist
npm install
npm run build
```

### 7. WSL-Specific Issues (Windows)

**Problem**: Commands not working in WSL
```bash
# Ensure you're in WSL
wsl

# Navigate to project
cd /home/liber/Dev/portfolio

# Check if you're in the right directory
pwd
ls -la

# Run commands
npm run dev
```

### 8. GitHub Pages Deployment Issues

**Problem**: Site not updating or 404 errors
```bash
# Check if gh-pages branch exists
git branch -a

# Manual deployment
npm run deploy

# Check GitHub Pages settings:
# 1. Go to repository Settings > Pages
# 2. Source should be "Deploy from a branch"
# 3. Branch should be "gh-pages" or "main"
# 4. Folder should be "/ (root)"
```

### 9. Vite Configuration Issues

**Problem**: Assets not loading or routing issues
```typescript
// Check vite.config.ts
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', // Should match your repository name
  server: {
    port: 3000,
    open: true,
  },
})
```

### 10. React Version Issues

**Problem**: "React is not defined" or JSX errors
```typescript
// Modern React doesn't require explicit React import
// Remove this if not using React directly:
// import React from 'react'

// Use this instead:
import { useState, useEffect } from 'react'
```

## 🔧 Debug Commands

### Development Debugging
```bash
# Start with debug logging
DEBUG=vite:* npm run dev

# Check for TypeScript errors
npx tsc --noEmit

# Check for ESLint errors
npm run lint

# Check build output
npm run build
ls -la dist/
```

### Browser Debugging
1. **Open Developer Tools**: F12
2. **Console Tab**: Check for JavaScript errors
3. **Network Tab**: Monitor API calls and assets
4. **Elements Tab**: Inspect DOM structure
5. **Sources Tab**: Debug JavaScript code

### React Developer Tools
Install the React Developer Tools browser extension for:
- Component tree inspection
- Props and state debugging
- Performance profiling

## 📋 Environment Setup Checklist

Before starting development, ensure:

- [ ] Node.js 18+ installed
- [ ] npm 9+ installed
- [ ] Git installed
- [ ] Repository cloned
- [ ] Dependencies installed (`npm install`)
- [ ] Development server starts (`npm run dev`)
- [ ] Build works (`npm run build`)
- [ ] Linting passes (`npm run lint`)

## 🆘 Getting Help

If you're still experiencing issues:

1. **Check this troubleshooting guide** first
2. **Search existing issues** in the repository
3. **Create a new issue** with:
   - Operating system and version
   - Node.js and npm versions
   - Steps to reproduce the issue
   - Error messages and stack traces
   - Browser and version (if applicable)

## 🔗 Useful Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [ESLint Documentation](https://eslint.org/)
- [GitHub Pages Documentation](https://pages.github.com/)
