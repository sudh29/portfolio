# Portfolio Website

A modern, responsive portfolio website built with React 19, TypeScript, and Vite. This project showcases professional skills, projects, and contact information with a clean, modern design.

## 🚀 Features

- **Modern Tech Stack**: React 19 with TypeScript for enhanced type safety
- **Fast Development**: Vite for lightning-fast Hot Module Replacement (HMR)
- **Responsive Design**: Mobile-first approach with modern CSS
- **Component-Based Architecture**: Modular components for easy maintenance
- **Performance Optimized**: Production-ready builds with code splitting
- **SEO Friendly**: Optimized for search engines
- **Accessibility**: WCAG compliant design

## 🛠️ Tech Stack

- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite 7.0.6
- **Styling**: CSS3 with modern features
- **Linting**: ESLint 9.30.1 with TypeScript support
- **Development**: Hot Module Replacement (HMR)
- **Deployment**: GitHub Pages with gh-pages

## 📋 Prerequisites

Before running this project, ensure you have the following installed:

- **Node.js**: Version 18 or higher (recommended: 20.x)
- **npm**: Version 9 or higher
- **Git**: For version control

### Check Your Versions

```bash
node --version
npm --version
git --version
```

## 🚀 Quick Start

### 1. Clone the Repository

```bash
# Clone the repository
git clone https://github.com/sudh29/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
# Install all dependencies
npm install
```

### 3. Start Development Server

```bash
# Start the development server
npm run dev
```

The application will automatically open in your browser at `http://localhost:3000`

## 📜 Available Scripts

### Development Commands

```bash
# Start development server with hot reload
npm run dev

# Start development server with WSL (if on Windows)
wsl
npm run dev
```

### Build Commands

```bash
# Build for production
npm run build

# Build with WSL (if on Windows)
wsl
npm run build

# Preview production build locally
npm run preview
```

### Code Quality Commands

```bash
# Run ESLint to check code quality
npm run lint

# Fix ESLint issues automatically
npm run lint:fix

# TypeScript type checking
npx tsc --noEmit
```

### Deployment Commands

```bash
# Build and deploy to GitHub Pages
npm run deploy

# Deploy with WSL (if on Windows)
wsl
npm run deploy
```

## 🏗️ Project Structure

```
portfolio/
├── public/                 # Static assets
│   └── vite.svg
├── src/
│   ├── components/         # React components
│   │   ├── Header.tsx     # Navigation header
│   │   ├── Hero.tsx       # Hero section
│   │   ├── About.tsx      # About section
│   │   ├── Skills.tsx     # Skills showcase
│   │   ├── Projects.tsx   # Projects gallery
│   │   ├── Contact.tsx    # Contact form
│   │   └── Footer.tsx     # Footer component
│   ├── assets/            # Static assets
│   │   └── react.svg
│   ├── App.tsx           # Main application component
│   ├── App.css           # Main styles
│   ├── main.tsx          # Application entry point
│   ├── index.css         # Global styles
│   └── vite-env.d.ts     # Vite environment types
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tsconfig.json          # TypeScript configuration
├── eslint.config.js       # ESLint configuration
└── README.md             # This file
```

## 🔧 Development Workflow

### 1. Development Mode

```bash
# Start development server
npm run dev
```

**What happens:**
- Vite starts a development server on `http://localhost:3000`
- Hot Module Replacement (HMR) enables instant updates
- TypeScript compilation happens on-the-fly
- ESLint runs in watch mode

### 2. Making Changes

1. **Edit Components**: Modify files in `src/components/`
2. **Add Styles**: Update CSS files in `src/`
3. **Test Changes**: Browser automatically refreshes
4. **Check Console**: Monitor for any errors

### 3. Building for Production

```bash
# Create optimized production build
npm run build
```

**What happens:**
- TypeScript compilation with strict checking
- Vite creates optimized bundle in `dist/` folder
- Code splitting and tree shaking applied
- Assets optimized and minified

### 4. Preview Production Build

```bash
# Serve production build locally
npm run preview
```

This serves the built application at `http://localhost:4173`

## 🐛 Debugging Guide

### Common Issues and Solutions

#### 1. TypeScript Errors

**Problem**: TypeScript compilation errors
```bash
# Check TypeScript errors
npx tsc --noEmit
```

**Solutions**:
- Remove unused imports
- Fix type annotations
- Update component props interfaces

#### 2. ESLint Errors

**Problem**: Code quality issues
```bash
# Check ESLint errors
npm run lint

# Fix automatically
npm run lint:fix
```

**Common Fixes**:
- Remove unused variables
- Fix import/export statements
- Add missing dependencies to useEffect

#### 3. Build Failures

**Problem**: Production build fails
```bash
# Clear cache and rebuild
rm -rf node_modules package-lock.json
npm install
npm run build
```

#### 4. Development Server Issues

**Problem**: Server won't start
```bash
# Check if port is in use
lsof -i :3000

# Kill process using port
kill -9 <PID>

# Or use different port
npm run dev -- --port 3001
```

#### 5. WSL-Specific Issues (Windows)

**Problem**: Commands not working in WSL
```bash
# Ensure you're in WSL
wsl

# Navigate to project
cd /home/liber/Dev/portfolio

# Run commands
npm run dev
```

### Debug Tools

#### 1. Browser Developer Tools

- **F12**: Open developer tools
- **Console**: Check for JavaScript errors
- **Network**: Monitor API calls and assets
- **Elements**: Inspect DOM structure
- **Sources**: Debug JavaScript code

#### 2. React Developer Tools

Install the React Developer Tools browser extension for:
- Component tree inspection
- Props and state debugging
- Performance profiling

#### 3. Vite Debug Mode

```bash
# Start with debug logging
DEBUG=vite:* npm run dev
```

## 🚀 Deployment

### GitHub Pages Deployment

The project is configured for automatic deployment to GitHub Pages.

#### Automatic Deployment

1. **Push to Main Branch**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. **GitHub Actions** (if configured):
   - Automatic build and deployment on push
   - Check Actions tab in GitHub repository

#### Manual Deployment

```bash
# Build and deploy
npm run deploy

# Or step by step
npm run build
npx gh-pages -d dist
```

#### Deployment Configuration

The project is configured with:
- **Base URL**: `/portfolio/` (for GitHub Pages)
- **Build Output**: `dist/` folder
- **Deployment Branch**: `gh-pages`

### Other Deployment Options

#### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`

#### Vercel
1. Import your GitHub repository
2. Framework preset: Vite
3. Build command: `npm run build`
4. Output directory: `dist`

#### AWS S3 + CloudFront
1. Upload `dist/` contents to S3 bucket
2. Configure CloudFront distribution
3. Set up custom domain (optional)

## 📝 Environment Configuration

### Development Environment

Create `.env.local` for local development:
```env
VITE_API_URL=http://localhost:3000
VITE_DEBUG=true
```

### Production Environment

Create `.env.production` for production:
```env
VITE_API_URL=https://your-api.com
VITE_DEBUG=false
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Test the build**:
   ```bash
   npm run build
   npm run lint
   ```
5. **Commit your changes**:
   ```bash
   git commit -m 'Add feature: description'
   ```
6. **Push to the branch**:
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Submit a pull request**

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

If you encounter any issues:

1. **Check the troubleshooting section** above
2. **Search existing issues** in the repository
3. **Create a new issue** with detailed information:
   - Operating system and Node.js version
   - Steps to reproduce the issue
   - Error messages and stack traces
   - Browser and version (if applicable)

## 🔗 Links

- **Live Demo**: [Portfolio Website](https://sudh29.github.io/portfolio/)
- **Repository**: [GitHub Repository](https://github.com/sudh29/portfolio)
- **Issues**: [Report Issues](https://github.com/sudh29/portfolio/issues)

---

**Built with ❤️ using React, TypeScript, and Vite**