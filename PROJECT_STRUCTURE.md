# 📁 Otto - Project Structure

## Overview

The project is organized into three main folders for clarity and separation of concerns:

```
otto-video-studio/
├── front/          # Frontend application
├── back/           # Backend API
├── database/       # Database schema & docs
└── docs/           # Documentation files
```

---

## 📂 Folder Details

### 1. `front/` - Frontend Application

**Purpose**: React-based user interface

**Contents**:
```
front/
├── src/
│   ├── components/     # React components
│   │   ├── ui/        # Reusable UI components
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ...
│   ├── hooks/         # Custom React hooks
│   │   └── useVideoGeneration.ts
│   ├── lib/           # Utility functions
│   ├── pages/         # Page components
│   │   ├── Index.tsx
│   │   ├── Create.tsx
│   │   ├── Gallery.tsx
│   │   └── Pricing.tsx
│   ├── types/         # TypeScript types
│   ├── App.tsx        # Main app component
│   ├── index.css      # Global styles
│   └── main.tsx       # Entry point
├── public/            # Static assets
│   ├── ottologo.png   # Your logo
│   └── robots.txt
├── index.html         # HTML template
├── vite.config.ts     # Vite configuration
├── tailwind.config.ts # Tailwind CSS config
├── package.json       # Dependencies
└── README.md          # Frontend docs
```

**Technologies**:
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion

**Commands**:
```bash
cd front
npm install
npm run dev      # http://localhost:8080
npm run build
```

---

### 2. `back/` - Backend API

**Purpose**: Serverless API functions for video generation

**Contents**:
```
back/
├── api/
│   ├── generate-video.ts  # Main generation endpoint
│   └── check-video.ts     # Status check endpoint
├── .env                   # Environment variables (not in git)
├── .env.example          # Environment template
├── vercel.json           # Vercel configuration
├── package.json          # Dependencies
└── README.md             # Backend docs
```

**Technologies**:
- Vercel Serverless Functions
- Node.js 18+
- TypeScript
- Hugging Face API (FREE)

**Environment Variables**:
```bash
HUGGINGFACE_API_TOKEN=hf_your_token_here
```

**API Endpoints**:
- `POST /api/generate-video` - Generate video/image
- `GET /api/check-video?videoId=123` - Check status

**Commands**:
```bash
cd back
npm install
vercel dev       # Local development
vercel --prod    # Deploy to production
```

---

### 3. `database/` - Database Schema

**Purpose**: Database schema and documentation

**Contents**:
```
database/
├── schema.sql     # PostgreSQL schema
├── README.md      # Database docs
└── .gitkeep       # Keep folder in git
```

**Status**: 📝 Not yet implemented (planning phase)

**Recommended**: Supabase (PostgreSQL)

**Tables**:
- `users` - User accounts
- `videos` - Generated videos
- `credits` - User credits
- `transactions` - Credit transactions

**Features**:
- Row Level Security (RLS)
- Automatic timestamps
- Credit deduction triggers
- Indexes for performance

---

## 🔄 How They Work Together

```
┌─────────────┐
│   Browser   │
└──────┬──────┘
       │
       ↓
┌─────────────┐
│   Frontend  │  (React App)
│   (front/)  │  Port: 8080
└──────┬──────┘
       │
       ↓ API Calls
┌─────────────┐
│   Backend   │  (Vercel Functions)
│   (back/)   │  /api/*
└──────┬──────┘
       │
       ↓ Queries (Future)
┌─────────────┐
│  Database   │  (Supabase)
│ (database/) │  PostgreSQL
└─────────────┘
```

### Current Flow:
1. User visits frontend (React app)
2. User creates video on `/create` page
3. Frontend calls `POST /api/generate-video`
4. Backend calls Hugging Face API
5. Image generated and returned
6. Frontend displays image
7. User can download

### Future Flow (with Database):
1. User logs in (authentication)
2. User creates video
3. Backend checks credits in database
4. If credits available, generate video
5. Deduct credits, save video to database
6. Return video to user
7. User can view history in gallery

---

## 📝 Development Workflow

### Working on Frontend Only

```bash
cd front
npm run dev
```

Frontend will proxy API calls to production backend.

### Working on Backend Only

```bash
cd back
vercel dev
```

Test API endpoints locally.

### Full Stack Development

```bash
# Terminal 1 - Backend
cd back
vercel dev

# Terminal 2 - Frontend
cd front
npm run dev
```

Update frontend to call `http://localhost:3000/api/*`

---

## 🚀 Deployment

### Deploy Backend

```bash
cd back
vercel --prod
```

Add `HUGGINGFACE_API_TOKEN` in Vercel dashboard.

### Deploy Frontend

```bash
cd front
vercel --prod
```

### Deploy Both (Monorepo)

From root:
```bash
vercel --prod
```

Vercel will detect both frontend and backend.

---

## 📦 Dependencies

### Frontend Dependencies
- react, react-dom
- @tanstack/react-query
- framer-motion
- lucide-react
- tailwindcss
- vite

### Backend Dependencies
- @vercel/node
- dotenv

### Shared Dependencies
- typescript
- eslint

---

## 🔧 Configuration Files

### Root Level
- `.gitignore` - Git ignore rules
- `README.md` - Main documentation
- `START_HERE.md` - Quick start guide
- `DEPLOY_NOW.md` - Deployment guide
- `FREE_API_GUIDE.md` - API documentation

### Frontend (`front/`)
- `vite.config.ts` - Vite configuration
- `tailwind.config.ts` - Tailwind CSS
- `tsconfig.json` - TypeScript config
- `package.json` - Dependencies

### Backend (`back/`)
- `vercel.json` - Vercel configuration
- `.env` - Environment variables
- `package.json` - Dependencies

---

## 🎯 Benefits of This Structure

### ✅ Clear Separation
- Frontend and backend are independent
- Easy to understand and navigate
- Clear responsibilities

### ✅ Scalability
- Each part can scale independently
- Easy to add new features
- Can split into separate repos later

### ✅ Development
- Work on frontend without backend
- Work on backend without frontend
- Easy to test each part

### ✅ Deployment
- Deploy frontend and backend separately
- Or deploy together as monorepo
- Flexible deployment options

### ✅ Team Collaboration
- Frontend devs work in `front/`
- Backend devs work in `back/`
- Database devs work in `database/`
- No conflicts!

---

## 📚 Documentation

Each folder has its own README:
- [front/README.md](front/README.md) - Frontend docs
- [back/README.md](back/README.md) - Backend docs
- [database/README.md](database/README.md) - Database docs

---

## 🔄 Migration Notes

### From Old Structure

**Before**:
```
otto-video-studio/
├── api/
├── src/
├── public/
└── ...
```

**After**:
```
otto-video-studio/
├── front/
│   ├── src/
│   └── public/
├── back/
│   └── api/
└── database/
```

**What Changed**:
- `src/` → `front/src/`
- `public/` → `front/public/`
- `api/` → `back/api/`
- Added `database/` folder
- Each folder is self-contained

---

## ✅ Checklist

### Frontend Setup
- [x] Moved to `front/` folder
- [x] Has own `package.json`
- [x] Has own `README.md`
- [x] Vite config updated
- [x] Logo integrated

### Backend Setup
- [x] Moved to `back/` folder
- [x] Has own `package.json`
- [x] Has own `README.md`
- [x] Vercel config present
- [x] Environment variables documented

### Database Setup
- [x] Created `database/` folder
- [x] Added `schema.sql`
- [x] Added `README.md`
- [x] Documented setup process
- [ ] Not yet implemented (future)

---

**Status**: ✅ Structure Complete
**Next**: Deploy and test!
