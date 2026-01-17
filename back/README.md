# Otto - Backend

Vercel serverless functions for video generation.

## Structure

```
back/
├── api/
│   ├── generate-video.ts  # Generate video/image
│   └── check-video.ts     # Check status
├── .env                   # Environment variables
├── .env.example          # Environment template
├── vercel.json           # Vercel configuration
└── package.json          # Dependencies
```

## Environment Variables

```bash
HUGGINGFACE_API_TOKEN=hf_your_token_here
```

Get FREE token: https://huggingface.co/settings/tokens

## API Endpoints

### POST /api/generate-video

Generate a video/image from text.

**Request:**
```json
{
  "prompt": "A sunset over the ocean",
  "style": "cinematic",
  "cameraMotion": "pan",
  "mood": "calm"
}
```

**Response:**
```json
{
  "success": true,
  "videoId": "video-123",
  "videoUrl": "data:image/png;base64,...",
  "status": "completed"
}
```

### GET /api/check-video?videoId=123

Check video generation status.

## Development

```bash
cd back
npm install
vercel dev
```

## Deployment

```bash
vercel --prod
```

Add `HUGGINGFACE_API_TOKEN` in Vercel dashboard.

## Technologies

- Vercel Serverless Functions
- Node.js 18+
- TypeScript
- Hugging Face API (FREE)
