# 🎉 Using FREE APIs for Video Generation

Otto now uses **100% FREE APIs** from Hugging Face! No credit card required, no hidden costs.

## Why Hugging Face?

- ✅ **Completely FREE** - No credit card needed
- ✅ **No usage limits** for personal projects
- ✅ **Easy to set up** - Just sign up and get a token
- ✅ **Multiple models** - Access to various AI models
- ✅ **Open source** - Transparent and community-driven

## Getting Your FREE Token (2 minutes)

### Step 1: Sign Up

1. Go to [huggingface.co](https://huggingface.co)
2. Click "Sign Up" (top right)
3. Create a free account with email or GitHub

### Step 2: Get Your Token

1. Go to [Settings → Access Tokens](https://huggingface.co/settings/tokens)
2. Click "New token"
3. Give it a name (e.g., "Otto Video")
4. Select role: **Read** (default is fine)
5. Click "Generate token"
6. **Copy the token** (starts with `hf_...`)

### Step 3: Add to Your Project

Add the token to your `.env` file:

```bash
HUGGINGFACE_API_TOKEN=hf_your_token_here
```

That's it! You're ready to generate videos for FREE!

## How It Works

### Hugging Face Inference API

Hugging Face provides free access to AI models through their Inference API:

- **Text-to-Video Models**: Generate videos from text descriptions
- **Synchronous**: Videos are generated and returned immediately
- **No polling needed**: Unlike paid APIs, you get results right away
- **Rate limits**: Fair usage limits for free tier

### Models Used

Otto uses these FREE models:

1. **damo-vilab/text-to-video-ms-1.7b**
   - Text-to-video generation
   - Good quality for short clips
   - Fast generation (30-60 seconds)

2. **Alternative models** (can be configured):
   - AnimateDiff
   - ModelScope
   - Zeroscope

## Rate Limits & Fair Usage

### Free Tier Limits

- **Requests**: Reasonable rate limits per hour
- **Model loading**: First request may take 20-30 seconds (model warm-up)
- **Subsequent requests**: Much faster (5-15 seconds)

### Best Practices

1. **Wait for model loading**: First use takes longer
2. **Don't spam**: Respect rate limits
3. **Cache results**: Save generated videos
4. **Use wisely**: Free tier is for personal/testing use

### If You Hit Rate Limits

If you see "Rate limit exceeded":

1. **Wait a few minutes** - Limits reset quickly
2. **Use Hugging Face Pro** - $9/month for higher limits
3. **Self-host models** - Run models on your own hardware

## Upgrading (Optional)

### Hugging Face Pro ($9/month)

Benefits:
- Higher rate limits
- Faster inference
- Priority access
- More compute resources

[Upgrade here](https://huggingface.co/pricing)

### Self-Hosting (FREE but requires hardware)

Run models on your own machine:

1. Download models from Hugging Face
2. Use `transformers` library
3. Run locally with GPU
4. No API limits!

## Comparison: Free vs Paid APIs

| Feature | Hugging Face (FREE) | Replicate (Paid) |
|---------|---------------------|------------------|
| Cost | $0 | $0.01-0.02/video |
| Setup | Sign up only | Credit card required |
| Rate limits | Yes (generous) | Pay per use |
| Quality | Good | Excellent |
| Speed | 30-60s | 30-60s |
| Models | Multiple | Multiple |

## Troubleshooting

### "Model is loading"

**Problem**: First request takes 20-30 seconds

**Solution**: 
- Wait for model to load
- Try again after 30 seconds
- Subsequent requests will be faster

### "Rate limit exceeded"

**Problem**: Too many requests

**Solution**:
- Wait a few minutes
- Upgrade to Hugging Face Pro
- Implement request caching

### "Invalid token"

**Problem**: Token not recognized

**Solution**:
- Check token is correct (starts with `hf_`)
- Regenerate token if needed
- Ensure token has Read permissions

### "Model not found"

**Problem**: Model unavailable

**Solution**:
- Check model ID in `api/generate-video.ts`
- Try alternative model
- Check Hugging Face status

## Alternative FREE APIs

If Hugging Face doesn't work for you, try these:

### 1. Stability AI (Free tier)
- Limited free credits
- High quality
- [stability.ai](https://stability.ai)

### 2. RunPod (Pay-as-you-go)
- Very cheap ($0.001/second)
- GPU rental
- [runpod.io](https://runpod.io)

### 3. Self-Hosted
- Completely free
- Requires GPU
- Full control

## Tips for Best Results

### 1. Optimize Prompts

Good prompt:
```
"Cinematic style, calm mood, pan camera movement, 
a beautiful sunset over calm ocean waves, 
golden hour lighting, high quality"
```

Bad prompt:
```
"sunset"
```

### 2. Use Appropriate Duration

- Short videos (3-5s): Faster, better quality
- Long videos (10s+): Slower, may hit limits

### 3. Cache Generated Videos

Save videos to avoid regenerating:
- Store in database
- Use CDN
- Local storage for testing

### 4. Implement Retry Logic

Handle model loading gracefully:
```typescript
if (response.status === 503) {
  // Wait and retry
  await sleep(30000);
  retry();
}
```

## Support

### Hugging Face Support

- [Documentation](https://huggingface.co/docs)
- [Community Forum](https://discuss.huggingface.co)
- [Discord](https://discord.gg/hugging-face)

### Otto Support

- Check documentation files
- Open GitHub issue
- Review troubleshooting section

## Summary

✅ **FREE forever** for personal use
✅ **Easy setup** - Just sign up and get token
✅ **Good quality** - Suitable for most use cases
✅ **No credit card** - Truly free to start

Get started now: [huggingface.co/join](https://huggingface.co/join)

---

**Questions?** Check the troubleshooting section or open an issue!
