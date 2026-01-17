#!/usr/bin/env node

/**
 * Quick test script to verify your Hugging Face token works
 * Run: npm run test:token
 */

import { config } from 'dotenv';
config();

const HUGGINGFACE_API_TOKEN = process.env.HUGGINGFACE_API_TOKEN;

console.log('\n🔍 Testing Hugging Face Token...\n');

if (!HUGGINGFACE_API_TOKEN) {
  console.error('❌ ERROR: HUGGINGFACE_API_TOKEN not found in .env file');
  console.log('\n📝 To fix:');
  console.log('1. Copy .env.example to .env');
  console.log('2. Add your token: HUGGINGFACE_API_TOKEN=hf_your_token_here');
  console.log('3. Get token from: https://huggingface.co/settings/tokens\n');
  process.exit(1);
}

if (!HUGGINGFACE_API_TOKEN.startsWith('hf_')) {
  console.error('❌ ERROR: Token should start with "hf_"');
  console.log('Current token:', HUGGINGFACE_API_TOKEN.substring(0, 10) + '...');
  console.log('\n📝 Get a valid token from: https://huggingface.co/settings/tokens\n');
  process.exit(1);
}

console.log('✅ Token found:', HUGGINGFACE_API_TOKEN.substring(0, 10) + '...');
console.log('✅ Token format looks correct');

// Test API call
console.log('\n🧪 Testing API connection...\n');

const testModel = 'damo-vilab/text-to-video-ms-1.7b';

fetch(`https://api-inference.huggingface.co/models/${testModel}`, {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${HUGGINGFACE_API_TOKEN}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    inputs: 'test prompt',
  }),
})
  .then(async (response) => {
    if (response.status === 503) {
      console.log('⏳ Model is loading (this is normal on first use)');
      console.log('✅ Token is VALID!');
      console.log('✅ API connection successful!');
      console.log('\n💡 The model will be ready in 20-30 seconds.');
      console.log('💡 Try generating a video in the app now!\n');
      return;
    }

    if (response.status === 401) {
      console.error('❌ Token is INVALID or expired');
      console.log('\n📝 To fix:');
      console.log('1. Go to: https://huggingface.co/settings/tokens');
      console.log('2. Create a new token');
      console.log('3. Update .env file with new token\n');
      process.exit(1);
    }

    if (response.ok) {
      console.log('✅ Token is VALID!');
      console.log('✅ API connection successful!');
      console.log('✅ Model is ready!');
      console.log('\n🎉 Everything is working! You can now generate videos.\n');
      return;
    }

    const errorText = await response.text();
    console.log('⚠️  Unexpected response:', response.status);
    console.log('Response:', errorText.substring(0, 200));
    console.log('\n💡 This might be okay. Try generating a video in the app.\n');
  })
  .catch((error) => {
    console.error('❌ Connection error:', error.message);
    console.log('\n📝 Possible issues:');
    console.log('- No internet connection');
    console.log('- Firewall blocking request');
    console.log('- Hugging Face API is down');
    console.log('\n💡 Check: https://status.huggingface.co\n');
    process.exit(1);
  });
