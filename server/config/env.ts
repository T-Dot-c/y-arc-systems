import dotenv from 'dotenv';

dotenv.config();

if (!process.env.GEMINI_API_KEY) {
  throw new Error('FATAL: GEMINI_API_KEY is not defined in environment variables.');
}

export const env = {
  geminiApiKey: process.env.GEMINI_API_KEY,
  port: process.env.PORT || 3001,
  nodeEnv: process.env.NODE_ENV || 'development',
};
