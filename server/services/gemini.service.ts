import { GoogleGenAI } from '@google/genai';
import { env } from '../config/env.js';

export class GeminiService {
  private ai: GoogleGenAI;

  constructor() {
    this.ai = new GoogleGenAI({ apiKey: env.geminiApiKey });
  }

  async generateContent(prompt: string) {
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-2.0-flash',
        contents: prompt
      });
      return response.text;
    } catch (error) {
      console.error('Gemini Service Error:', error);
      throw new Error('Failed to generate content');
    }
  }

  async streamContent(prompt: string, onChunk: (text: string) => void) {
    try {
      const stream = await this.ai.models.generateContentStream({
        model: 'gemini-2.0-flash',
        contents: prompt
      });
      for await (const chunk of stream) {
        if (chunk.text) {
          onChunk(chunk.text);
        }
      }
    } catch (error) {
      console.error('Gemini Stream Error:', error);
      throw new Error('Failed to stream content');
    }
  }
}

export const geminiService = new GeminiService();
