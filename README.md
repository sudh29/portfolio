# My Portfolio Website

A modern portfolio website built with React, TypeScript, and Vite. This project showcases my skills, projects, and contact information in a responsive and beautiful design.

## Features

- **Modern Tech Stack**: React 18 with TypeScript for type safety
- **Fast Development**: Vite for lightning-fast HMR and builds
- **Responsive Design**: Mobile-first approach with modern CSS
- **Component-Based**: Modular components for easy maintenance
- **Performance Optimized**: Production-ready builds with code splitting

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS3 with modern features
- **Linting**: ESLint with TypeScript support
- **Development**: Hot Module Replacement (HMR)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository** (if applicable):
   ```bash
   git clone <repository-url>
   cd my_portfolio_website
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:5173`

## Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev

# Start development server with WSL (if on Windows)
wsl
npm run dev
```

### Building

```bash
# Build for production
npm run build

# Build with WSL (if on Windows)
wsl
npm run build
```

### Preview Production Build

```bash
# Serve the production build locally
npx serve dist

# This will serve your built application at http://localhost:3000
```

### Code Quality

```bash
# Run TypeScript type checking
npm run type-check

# Run ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx     # Navigation header
│   ├── Hero.tsx       # Hero section
│   ├── About.tsx      # About section
│   ├── Skills.tsx     # Skills showcase
│   ├── Projects.tsx   # Projects gallery
│   ├── Contact.tsx    # Contact form
│   └── Footer.tsx     # Footer component
├── assets/            # Static assets
├── App.tsx           # Main application component
├── App.css           # Main styles
├── main.tsx          # Application entry point
└── index.css         # Global styles
```

## Development Workflow

1. **Start Development**: Run `npm run dev` to start the development server
2. **Make Changes**: Edit components in `src/components/`
3. **Build for Production**: Run `npm run build` to create optimized build
4. **Preview Build**: Run `npx serve dist` to preview the production build
5. **Deploy**: Upload the `dist` folder to your hosting provider

## Troubleshooting

### TypeScript Errors

If you encounter TypeScript errors like "React is declared but never read":

1. Remove unused imports:
   ```typescript
   // Remove this if not using React directly
   import React from 'react'
   ```

2. Modern React with TypeScript doesn't require explicit React imports for JSX

### Build Issues

- Ensure all dependencies are installed: `npm install`
- Clear node_modules and reinstall if needed: `rm -rf node_modules && npm install`
- Check TypeScript configuration in `tsconfig.json`

## Deployment

The `dist` folder contains the production-ready files that can be deployed to any static hosting service:

- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your repository and it will auto-deploy
- **GitHub Pages**: Upload the `dist` contents to the `gh-pages` branch
- **AWS S3**: Upload the `dist` contents to an S3 bucket

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes
4. Test the build: `npm run build`
5. Commit your changes: `git commit -m 'Add feature'`
6. Push to the branch: `git push origin feature-name`
7. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).