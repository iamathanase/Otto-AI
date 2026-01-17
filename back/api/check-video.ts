import type { VercelRequest, VercelResponse } from '@vercel/node';

// This endpoint is kept for compatibility but may not be needed
// with Hugging Face's synchronous API
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

  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { videoId } = req.query;

    if (!videoId || typeof videoId !== 'string') {
      return res.status(400).json({ error: 'videoId is required' });
    }

    // With Hugging Face, videos are returned immediately
    // This endpoint is mainly for compatibility
    return res.status(200).json({
      status: 'completed',
      message: 'Video already generated',
      note: 'Hugging Face API returns videos immediately, no polling needed'
    });

  } catch (error) {
    console.error('Error checking video status:', error);
    return res.status(500).json({ 
      error: error instanceof Error ? error.message : 'Unknown error occurred' 
    });
  }
}
