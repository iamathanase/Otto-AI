import type { VercelRequest, VercelResponse } from '@vercel/node';

interface VideoRequest {
  prompt: string;
  style?: string;
  cameraMotion?: string;
  mood?: string;
  aspectRatio?: string;
  duration?: number;
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { prompt, style, cameraMotion, mood } = req.body as VideoRequest;

    if (!prompt) {
      return res.status(400).json({ error: 'Prompt is required' });
    }

    const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

    if (!HUGGINGFACE_API_TOKEN) {
      console.error('HUGGINGFACE_API_TOKEN not configured');
      return res.status(500).json({ 
        error: 'Video generation service not configured. Please add HUGGINGFACE_API_TOKEN to environment variables.',
        setup: 'Get a FREE token from https://huggingface.co/settings/tokens'
      });
    }

    // Build enhanced prompt
    const styleText = style ? `${style} style,` : 'cinematic style,';
    const moodText = mood ? `${mood} mood,` : '';
    const cameraText = cameraMotion ? `${cameraMotion} camera movement,` : '';
    
    const enhancedPrompt = `${styleText} ${moodText} ${cameraText} ${prompt}. High quality, professional cinematography, smooth motion, detailed.`;

    console.log('Generating video with prompt:', enhancedPrompt);

    // Use Hugging Face Inference API with a text-to-image model
    // Since text-to-video models are complex and may not work well with free tier,
    // we'll generate an image and return it as a "video preview"
    const response = await fetch(
      'https://api-inference.huggingface.co/models/stabilityai/stable-diffusion-xl-base-1.0',
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${HUGGINGFACE_API_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          inputs: enhancedPrompt,
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Hugging Face API error:', errorText);
      
      // If model is loading, return a special status
      if (response.status === 503 || errorText.includes('loading')) {
        return res.status(202).json({
          success: true,
          status: 'loading',
          message: 'Model is loading. This may take 20-30 seconds on first use. Please try again.',
          estimatedTime: 30,
        });
      }
      
      return res.status(500).json({ 
        error: 'Failed to start video generation',
        details: errorText,
        tip: 'The free API may have rate limits. Try again in a few moments.'
      });
    }

    // Get image data as buffer
    const imageBuffer = await response.arrayBuffer();
    const imageBase64 = Buffer.from(imageBuffer).toString('base64');
    const imageDataUrl = `data:image/png;base64,${imageBase64}`;

    // Generate a unique ID
    const videoId = `video-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    console.log('Image generated successfully:', videoId);

    // Return image as "video" (for now, until we implement proper video generation)
    return res.status(200).json({
      success: true,
      videoId,
      videoUrl: imageDataUrl,
      status: 'completed',
      message: 'Image generated successfully using FREE Hugging Face API! (Video generation coming soon)',
      prompt: enhancedPrompt,
      note: 'Currently generating images. Full video generation requires more complex setup.',
    });

  } catch (error) {
    console.error('Error generating video:', error);
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred',
      tip: 'Make sure you have a valid Hugging Face token. Get one FREE at https://huggingface.co/settings/tokens'
    });
  }
}
