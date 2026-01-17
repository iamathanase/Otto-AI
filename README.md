# Otto - Video Creation Platform

Turn words into videos. Simple, fast, and free.

## 📁 Project Structure

```
otto-video-studio/
├── front/          # Frontend (React + TypeScript)
├── back/           # Backend (Vercel Functions)
├── database/       # Database schema & docs
└── docs/           # Documentation
```

### Frontend (`front/`)
React application with Vite, TypeScript, and Tailwind CSS.
- **Tech**: React 18, TypeScript, Vite, Tailwind CSS
- **Port**: http://localhost:8080
- **[Read more →](front/README.md)**

### Backend (`back/`)
Serverless API functions for video generation.
- **Tech**: Vercel Functions, Node.js, Hugging Face API
- **API**: `/api/generate-video`, `/api/check-video`
- **[Read more →](back/README.md)**

### Database (`database/`)
Database schema and configuration (not yet implemented).
- **Recommended**: Supabase (PostgreSQL)
- **Schema**: Users, Videos, Credits, Transactions
- **[Read more →](database/README.md)**

## 🚀 Quick Start

### 1. Setup Backend

```bash
cd back
npm install

# Add your FREE Hugging Face token to .env
echo "HUGGINGFACE_API_TOKEN=hf_your_token_here" > .env

# Test token
npm run test:token
```

### 2. Setup Frontend

```bash
cd front
npm install
npm run dev
```

Visit: http://localhost:8080

### 3. Generate Your First Video

1. Go to http://localhost:8080/create
2. Enter: "A sunset over the ocean"
3. Click "Generate"
4. Wait 10-20 seconds
5. Your image appears!

## 🔑 Get FREE API Token

1. Sign up at [huggingface.co](https://huggingface.co/join)
2. Go to [Settings → Tokens](https://huggingface.co/settings/tokens)
3. Create new token with "Read" + "Inference" permissions
4. Copy token (starts with `hf_`)
5. Add to `back/.env`

## 📦 Features

- ✅ Text-to-image generation (FREE!)
- ✅ Multiple styles and moods
- ✅ Camera controls
- ✅ Video gallery
- ✅ Download as images
- ✅ Responsive design
- ✅ Clean, professional UI

## 🛠️ Technologies

**Frontend:**
- React 18
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Radix UI

**Backend:**
- Vercel Serverless Functions
- Node.js 18+
- Hugging Face API (FREE)
- TypeScript

**Database (Planned):**
- Supabase (PostgreSQL)
- Row Level Security
- Real-time subscriptions

## 📚 Documentation

- [START_HERE.md](START_HERE.md) - Quick start guide
- [DEPLOY_NOW.md](DEPLOY_NOW.md) - Deployment guide
- [FREE_API_GUIDE.md](FREE_API_GUIDE.md) - API documentation
- [QUICK_REFERENCE.md](QUICK_REFERENCE.md) - Quick commands

## 🚢 Deployment

### Deploy Backend (Vercel)

```bash
cd back
vercel --prod
```

Add `HUGGINGFACE_API_TOKEN` in Vercel dashboard.

### Deploy Frontend (Vercel)

```bash
cd front
vercel --prod
```

Or deploy both together from root:

```bash
vercel --prod
```

## 💰 Cost

- **Hugging Face API**: $0 (FREE tier)
- **Vercel Hosting**: $0 (FREE tier)
- **Total**: **$0/month** for personal use

## 🔧 Development

### Frontend Development

```bash
cd front
npm run dev          # Start dev server
npm run build        # Build for production
npm run preview      # Preview production build
```

### Backend Development

```bash
cd back
vercel dev           # Start local API server
npm run test:token   # Test Hugging Face token
```

### Full Stack Development

Run both frontend and backend:

```bash
# Terminal 1 - Backend
cd back && vercel dev

# Terminal 2 - Frontend  
cd front && npm run dev
```

## 📝 Environment Variables

### Backend (`back/.env`)

```bash
HUGGINGFACE_API_TOKEN=hf_your_token_here
```

## 🎯 Next Steps

### Immediate
- [x] Frontend setup
- [x] Backend setup
- [x] FREE API integration
- [x] Logo integration
- [x] Clean project structure

### Short-term
- [ ] Add user authentication
- [ ] Implement database
- [ ] Add video storage
- [ ] Credit system

### Long-term
- [ ] Payment integration
- [ ] Real video generation
- [ ] Batch processing
- [ ] Video editing features

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

MIT License - Free for personal and commercial use

## 🆘 Support

- Check documentation in each folder
- Review [FREE_API_GUIDE.md](FREE_API_GUIDE.md)
- Open an issue on GitHub

---

**Built with ❤️ using 100% FREE APIs**

**Total cost: $0/month**
