import { GeminiRequest } from '../../shared/types/ai.types';

const BASE_URL = 'http://localhost:3001/api/ai';

export const aiApi = {
  chat: async (payload: GeminiRequest) => {
    const response = await fetch(`${BASE_URL}/chat`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: payload.prompt }),
    });
    if (!response.ok) throw new Error('AI Chat failed');
    return response.json();
  },
};
