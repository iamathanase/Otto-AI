# Otto - Frontend

React + TypeScript + Vite frontend application.

## Structure

```
front/
├── src/
│   ├── components/     # React components
│   ├── hooks/         # Custom React hooks
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   ├── types/         # TypeScript types
│   ├── App.tsx        # Main app component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── public/            # Static assets
│   ├── ottologo.png   # Logo
│   └── robots.txt
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind CSS config
└── package.json       # Dependencies

```

## Development

```bash
cd front
npm install
npm run dev
```

Visit: http://localhost:8080

## Build

```bash
npm run build
```

Output: `dist/` folder

## Technologies

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI
