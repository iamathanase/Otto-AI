# 👋 Welcome to Otto AI!

Your project is ready to deploy! Here's what to do next.

---

## ✅ What's Done

✅ Code pushed to GitHub: https://github.com/iamathanase/Otto-AI  
✅ Project organized into 3 folders (front, back, database)  
✅ FREE Hugging Face API configured  
✅ Design updated to be human and trustworthy  
✅ Logo integrated  
✅ All documentation created  

---

## 🚀 Deploy Now (5 minutes)

### Step 1: Deploy Backend
1. Go to **vercel.com** and sign in
2. Click **"Add New Project"**
3. Import: `iamathanase/Otto-AI`
4. Set **Root Directory** to: `back`
5. Add environment variable:
   - Name: `HUGGINGFACE_API_TOKEN`
   - Value: (check your `back/.env` file)
6. Click **Deploy**
7. **Copy the backend URL** (you'll need it next!)

### Step 2: Deploy Frontend
1. Click **"Add New Project"** again
2. Import: `iamathanase/Otto-AI`
3. Set **Root Directory** to: `front`
4. Add environment variable:
   - Name: `VITE_API_URL`
   - Value: (paste the backend URL from Step 1)
5. Click **Deploy**
6. **Done!** Your site is live 🎉

---

## 📖 Need More Details?

- **Full deployment guide**: `DEPLOY_NOW.md`
- **Quick reference**: `QUICK_REFERENCE.md`
- **Project structure**: `PROJECT_STRUCTURE.md`

---

## 🆘 Troubleshooting

**Can't find your Hugging Face token?**
- Check the file: `back/.env`
- Or create a new one at: https://huggingface.co/settings/tokens

**Frontend can't connect to backend?**
- Make sure `VITE_API_URL` in Vercel matches your backend URL
- No trailing slash!
- Example: `https://otto-ai-backend.vercel.app`

**First video generation is slow?**
- Normal! The AI model takes 20-30 seconds to load on first use
- After that, it's much faster

---

## 🎯 What You'll Get

- **Frontend**: Beautiful landing page + video creation tool
- **Backend**: Serverless API with FREE Hugging Face integration
- **Output**: AI-generated images (video generation requires more setup)

---

**Ready?** Open `DEPLOY_NOW.md` and follow the steps!
