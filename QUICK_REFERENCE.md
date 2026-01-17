# Otto - Quick Reference

## 🚀 Quick Start

```bash
# 1. Install
npm install

# 2. Configure
cp .env.example .env
# Add REPLICATE_API_TOKEN to .env

# 3. Run
npm run dev
```

## 🔑 Environment Variables

```bash
HUGGINGFACE_API_TOKEN=hf_your_free_token_here
```

Get FREE token: https://huggingface.co/settings/tokens

## 📦 Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm test             # Run tests
npm run lint         # Lint code
```

## 🌐 API Endpoints

### Generate Video
```bash
POST /api/generate-video
Content-Type: application/json

{
  "prompt": "A sunset over the ocean",
  "style": "cinematic",
  "cameraMotion": "pan",
  "mood": "calm",
  "aspectRatio": "16:9",
  "duration": 5
}
```

### Check Status
```bash
GET /api/check-video?predictionId=abc123
```

## 📁 Key Files

| File | Purpose |
|------|---------|
| `api/generate-video.ts` | Video generation API |
| `api/check-video.ts` | Status checking API |
| `src/hooks/useVideoGeneration.ts` | Video generation logic |
| `src/pages/Create.tsx` | Video creation page |
| `vercel.json` | Vercel configuration |
| `.env` | Environment variables |

## 🎨 Customization

### Colors
Edit `src/index.css`:
```css
--primary: 25 75% 47%;  /* Warm orange */
--background: 0 0% 100%; /* White */
```

### Models
Edit `api/generate-video.ts`:
```typescript
version: 'your-model-version-here'
```

## 🐛 Common Issues

### "Video generation service not configured"
→ Add `HUGGINGFACE_API_TOKEN` to environment variables (FREE from huggingface.co)

### "Model is loading"
→ Wait 30 seconds on first use, then try again

### Build fails
→ Remove `lovable-tagger` from `vite.config.ts`

### CORS errors
→ Check `vercel.json` CORS headers

### Slow generation
→ Reduce duration or use faster model

## 💰 Costs

| Usage | Monthly Cost |
|-------|--------------|
| Personal use | **$0 (FREE!)** |
| Small projects | **$0 (FREE!)** |
| High volume | $9+ (Hugging Face Pro) |

## 📚 Documentation

- `README.md` - Overview
- `GETTING_STARTED.md` - Setup guide
- `DEPLOYMENT.md` - Deploy guide
- `PRODUCTION_CHECKLIST.md` - Launch checklist
- `PROJECT_SUMMARY.md` - Full summary

## 🔗 Links

- Hugging Face (FREE): https://huggingface.co
- Get FREE Token: https://huggingface.co/settings/tokens
- Vercel: https://vercel.com
- Docs: See files above

## 📞 Support

1. Check documentation
2. Review troubleshooting
3. Check service status
4. Open GitHub issue
