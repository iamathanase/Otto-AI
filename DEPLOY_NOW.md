# 🚀 Deploy Otto to Vercel - Step by Step

Follow these exact steps to deploy your video generation platform.

## Prerequisites Checklist

- [ ] GitHub account
- [ ] Vercel account (sign up at vercel.com)
- [ ] Replicate account (sign up at replicate.com)
- [ ] Code pushed to GitHub repository

## Step 1: Get FREE Hugging Face Token (2 minutes)

1. Go to https://huggingface.co
2. Sign up for a FREE account (no credit card needed!)
3. Go to https://huggingface.co/settings/tokens
4. Click "New token"
5. Give it a name (e.g., "Otto Video")
6. Click "Generate token"
7. Copy the token (starts with `hf_`)
8. **Save it somewhere safe** - you'll need it in Step 3

## Step 2: Push Code to GitHub (3 minutes)

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Otto video platform"

# Add your GitHub repository
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push
git push -u origin main
```

## Step 3: Deploy to Vercel (5 minutes)

### Option A: Via Vercel Dashboard (Recommended)

1. **Go to Vercel**
   - Visit https://vercel.com/new
   - Log in with GitHub

2. **Import Repository**
   - Click "Import Project"
   - Select your Otto repository
   - Click "Import"

3. **Configure Project**
   - Framework Preset: **Vite** (should auto-detect)
   - Root Directory: `./` (leave as is)
   - Build Command: `npm run build` (should auto-fill)
   - Output Directory: `dist` (should auto-fill)

4. **Add Environment Variable**
   - Click "Environment Variables"
   - Name: `HUGGINGFACE_API_TOKEN`
   - Value: Paste your FREE token from Step 1
   - Click "Add"

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes
   - Done! 🎉

### Option B: Via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login
vercel login

# Deploy
vercel

# Add environment variable
vercel env add HUGGINGFACE_API_TOKEN
# Paste your FREE token when prompted
# Select: Production

# Deploy to production
vercel --prod
```

## Step 4: Test Your Deployment (2 minutes)

1. **Visit Your Site**
   - Vercel will show you the URL (e.g., `otto-video.vercel.app`)
   - Click the URL or copy it to your browser

2. **Test Video Generation**
   - Click "Try it free" or go to `/create`
   - Enter a prompt: "A sunset over the ocean"
   - Click "Generate"
   - Wait 30-60 seconds
   - Your video should appear!

3. **Check All Pages**
   - Home page: Should load with hero section
   - Create page: Should show prompt editor
   - Gallery: Should show empty state (no videos yet)
   - Pricing: Should show pricing plans

## Step 5: Configure Custom Domain (Optional, 5 minutes)

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add"

2. **Add Your Domain**
   - Enter your domain (e.g., `otto.com`)
   - Follow DNS configuration instructions
   - Wait for DNS propagation (5-30 minutes)

3. **Enable SSL**
   - Vercel automatically provisions SSL
   - Your site will be available at `https://yourdomain.com`

## Troubleshooting

### ❌ "Video generation service not configured"

**Problem**: Environment variable not set

**Solution**:
1. Go to Vercel dashboard
2. Project → Settings → Environment Variables
3. Add `HUGGINGFACE_API_TOKEN` with your FREE token
4. Redeploy: Deployments → Latest → "Redeploy"

### ❌ "Model is loading"

**Problem**: First request takes 20-30 seconds

**Solution**:
1. This is normal for first use
2. Wait 30 seconds and try again
3. Subsequent requests will be much faster

### ❌ Build fails

**Problem**: Build error during deployment

**Solution**:
1. Check build logs in Vercel
2. Ensure `package.json` has all dependencies
3. Try building locally: `npm run build`
4. If successful locally, clear Vercel cache and redeploy

### ❌ Video generation fails

**Problem**: Videos don't generate

**Solution**:
1. Check Replicate account has credits
2. Verify API token is correct
3. Check Vercel function logs
4. Test API endpoint directly:
   ```bash
   curl -X POST https://your-site.vercel.app/api/generate-video \
     -H "Content-Type: application/json" \
     -d '{"prompt": "test"}'
   ```

### ❌ 404 errors on routes

**Problem**: Direct URLs don't work

**Solution**:
1. Check `vercel.json` exists
2. Verify rewrites configuration
3. Redeploy

## Post-Deployment Checklist

- [ ] Video generation works
- [ ] All pages load correctly
- [ ] Mobile responsive
- [ ] No console errors
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)

## Monitoring Your Deployment

### Vercel Dashboard
- **Analytics**: View traffic and performance
- **Logs**: Check function logs for errors
- **Deployments**: View deployment history

### Replicate Dashboard
- **Usage**: Monitor API usage
- **Costs**: Track spending
- **Predictions**: View generation history

## Cost Management

### 🎉 100% FREE!

**Hugging Face Free Tier:**
- ✅ No credit card required
- ✅ Generous rate limits
- ✅ Perfect for personal projects
- ✅ Fair usage policy

**Vercel Free Tier:**
- ✅ 100GB bandwidth
- ✅ 100 hours compute
- ✅ Unlimited projects

### Expected Costs

| Usage | Cost |
|-------|------|
| Personal use | $0 |
| Small projects | $0 |
| Testing/Development | $0 |

**Note**: For high-volume production use, consider:
- Hugging Face Pro: $9/month for higher limits
- Vercel Pro: $20/month for more resources

## Next Steps

### Immediate (Day 1)
- [ ] Test thoroughly
- [ ] Share with friends
- [ ] Collect feedback

### Short-term (Week 1)
- [ ] Add analytics (Plausible, Fathom)
- [ ] Set up error monitoring (Sentry)
- [ ] Create social media accounts

### Medium-term (Month 1)
- [ ] Add user authentication
- [ ] Implement database
- [ ] Add payment system
- [ ] Launch marketing campaign

## Support

Need help?

1. **Check Documentation**
   - README.md
   - GETTING_STARTED.md
   - TROUBLESHOOTING section above

2. **Check Service Status**
   - Vercel: https://vercel-status.com
   - Replicate: https://status.replicate.com

3. **Get Help**
   - Vercel Support: https://vercel.com/support
   - Replicate Support: https://replicate.com/docs
   - GitHub Issues: Open an issue

## Success! 🎉

Your video generation platform is now live!

**Share your deployment:**
- Tweet about it
- Post on Product Hunt
- Share with friends
- Get feedback

**Keep improving:**
- Monitor usage
- Fix bugs
- Add features
- Scale as needed

---

**Deployed?** ✅ Congratulations!

**Having issues?** Check troubleshooting above or open an issue.

**Ready for more?** See PRODUCTION_CHECKLIST.md for next steps.
