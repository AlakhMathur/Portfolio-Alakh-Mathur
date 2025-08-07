# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-friendly interface
- 📄 Resume download functionality
- ⚡ Fast loading with Vite
- 🎯 Smooth scrolling navigation

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/          # React components
│   ├── Hero.tsx        # Hero section
│   ├── Navigation.tsx  # Navigation bar
│   └── ...            # Other components
├── hooks/
│   └── useActiveSection.ts
└── App.tsx            # Main app component
```

## Troubleshooting

### Resume Link Not Working

1. Ensure the Google Drive link is set to "Anyone with the link can view"
2. Update the link in the component where it's used

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Framer Motion
- Lucide React Icons

## License

MIT License
