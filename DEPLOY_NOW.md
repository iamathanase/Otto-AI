# 🚀 Deploy Otto AI to Vercel

Your code is now on GitHub! Follow these steps to deploy both frontend and backend to Vercel.

## ✅ Step 1: Deploy Backend (API)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your repository: `iamathanase/Otto-AI`
4. **Configure the backend deployment:**
   - **Project Name**: `otto-ai-backend` (or any name you prefer)
   - **Framework Preset**: Other
   - **Root Directory**: Click **"Edit"** and select `back`
   - **Build Command**: Leave empty
   - **Output Directory**: Leave empty
   - **Install Command**: `npm install`

5. **Add Environment Variable:**
   - Click **"Environment Variables"**
   - Variable name: `HUGGINGFACE_API_TOKEN`
   - Value: Your Hugging Face token (starts with `hf_...`)
   - Apply to: Production, Preview, and Development

6. Click **"Deploy"**
7. Wait for deployment to complete (2-3 minutes)
8. **IMPORTANT: Copy your backend URL** (e.g., `https://otto-ai-backend.vercel.app`)
   - You'll need this for the frontend deployment!

---

## ✅ Step 2: Deploy Frontend

1. In Vercel dashboard, click **"Add New Project"** again
2. Import the same repository: `iamathanase/Otto-AI`
3. **Configure the frontend deployment:**
   - **Project Name**: `otto-ai` (or any name you prefer)
   - **Framework Preset**: Vite
   - **Root Directory**: Click **"Edit"** and select `front`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Add Environment Variable (CRITICAL!):**
   - Click **"Environment Variables"**
   - Variable name: `VITE_API_URL`
   - Value: `https://your-backend-url.vercel.app` (use the URL from Step 1)
   - Example: `https://otto-ai-backend.vercel.app`
   - Apply to: Production, Preview, and Development
   - **DO NOT include trailing slash!**

5. Click **"Deploy"**
6. Wait for deployment to complete (3-5 minutes)
7. **Your site is live!** 🎉
8. Click on the deployment URL to test your site

---

## ✅ Step 3: Test Your Deployment

1. Open your frontend URL (e.g., `https://otto-ai.vercel.app`)
2. Click **"Create"** in the navigation
3. Enter a prompt like: "A sunset over mountains"
4. Click **"Generate Video"**
5. Wait 20-30 seconds for the first generation (model loading)
6. Your image should appear!

**Note**: The free Hugging Face API generates images, not videos. Video generation requires more complex setup.

---

## 🔧 Troubleshooting

### Backend Issues:
- Make sure `HUGGINGFACE_API_TOKEN` is set in Vercel environment variables
- Check the Vercel logs for any errors
- Test the API endpoint: `https://your-backend-url.vercel.app/api/generate-video`

### Frontend Issues:
- Make sure `VITE_API_URL` points to your backend URL
- Check browser console for CORS errors
- Redeploy if you changed environment variables

### CORS Issues:
The backend already has CORS headers configured in both API files:
```typescript
'Access-Control-Allow-Origin': '*',
'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
'Access-Control-Allow-Headers': 'Content-Type',
```

---

## 📝 Quick Reference

**GitHub Repository**: https://github.com/iamathanase/Otto-AI

**Backend Folder**: `back/`
**Frontend Folder**: `front/`

**Backend API Endpoints**:
- POST `/api/generate-video` - Generate a new video
- GET `/api/check-video?id={id}` - Check video status

**Environment Variables**:
- Backend: `HUGGINGFACE_API_TOKEN`
- Frontend: `VITE_API_URL`

---

## 🎯 Next Steps After Deployment

1. Test video generation on your live site
2. Monitor Hugging Face API usage (100 requests/day free tier)
3. Add custom domain (optional)
4. Set up analytics (optional)
5. Add database for storing video history (optional)

---

## 💡 Tips

- Vercel automatically redeploys when you push to GitHub
- You can view deployment logs in the Vercel dashboard
- Free tier includes: 100GB bandwidth, unlimited deployments
- Backend functions have 10-second timeout on free tier (upgrade if needed)

---

**Need help?** Check the Vercel documentation or the project README files in each folder.
