# 🚀 Otto AI - Quick Reference

## 📦 What You Have

✅ **GitHub Repository**: https://github.com/iamathanase/Otto-AI  
✅ **Code pushed and ready to deploy**  
✅ **FREE Hugging Face API configured**  
✅ **Clean project structure** (front, back, database)

---

## 🎯 Next Step: Deploy to Vercel

**Read the full guide**: `DEPLOY_NOW.md`

### Quick Deploy Steps:

1. **Deploy Backend First**
   - Go to vercel.com
   - Import: `iamathanase/Otto-AI`
   - Root Directory: `back`
   - Add env: `HUGGINGFACE_API_TOKEN` = (your token)
   - Copy the backend URL

2. **Deploy Frontend Second**
   - Import same repo again
   - Root Directory: `front`
   - Add env: `VITE_API_URL` = (backend URL from step 1)
   - Done!

---

## 🔑 Your Credentials

**Hugging Face Token**: Check `back/.env` file (not committed to GitHub)  
**GitHub Repo**: https://github.com/iamathanase/Otto-AI

---

## 📁 Project Structure

```
Otto-AI/
├── front/              # React frontend (Vite + TypeScript)
│   ├── src/           # Components, pages, hooks
│   ├── public/        # Logo and static files
│   └── vercel.json    # Frontend deployment config
│
├── back/               # Serverless API (Vercel Functions)
│   ├── api/           # API endpoints
│   │   ├── generate-video.ts
│   │   └── check-video.ts
│   ├── .env           # Your Hugging Face token (local only)
│   └── vercel.json    # Backend deployment config
│
└── database/           # Database schema (not implemented yet)
    └── schema.sql
```

---

## 🛠️ Local Development

### Frontend:
```bash
cd front
npm install
npm run dev
```
Opens at: http://localhost:5173

### Backend:
```bash
cd back
npm install
npm run dev
```
Runs at: http://localhost:8080

---

## 🌐 API Endpoints

**Generate Video/Image**:
```
POST /api/generate-video
Body: { prompt, style, cameraMotion, mood, aspectRatio, duration }
```

**Check Status**:
```
GET /api/check-video?id={videoId}
```

---

## 💡 Important Notes

- **FREE API**: Uses Hugging Face (100 requests/day)
- **Current Output**: Generates images (video generation is complex for free tier)
- **First Request**: Takes 20-30 seconds (model loading)
- **Subsequent Requests**: Much faster

---

## 📚 Documentation Files

- `DEPLOY_NOW.md` - Complete deployment guide
- `PROJECT_STRUCTURE.md` - Detailed project structure
- `FREE_API_GUIDE.md` - API information and alternatives
- `front/README.md` - Frontend documentation
- `back/README.md` - Backend documentation

---

## 🎨 Design Changes Made

✅ Removed AI hype language  
✅ Changed to warm, human color scheme (orange/beige)  
✅ Switched to Inter font  
✅ Conversational, friendly copy  
✅ Clean, trustworthy design  

---

## ⚡ Quick Commands

```bash
# Push changes to GitHub
git add -A
git commit -m "Your message"
git push

# Check git status
git status

# View remote URL
git remote -v
```

---

**Need help?** Check `DEPLOY_NOW.md` for detailed deployment instructions!
