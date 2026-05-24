import { Router } from 'express';
import { geminiService } from '../services/gemini.service';

const router = Router();

router.post('/chat', async (req, res) => {
  try {
    const { message } = req.body;
    const text = await geminiService.generateContent(message);
    res.json({ text });
  } catch (error) {
    res.status(500).json({ error: 'Failed to generate AI response' });
  }
});

router.post('/stream', async (req, res) => {
  const { message } = req.body;

  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  try {
    await geminiService.streamContent(message, (chunk) => {
      res.write(`data: ${JSON.stringify({ text: chunk })}\n\n`);
    });
    res.write('event: done\ndata: {}\n\n');
    res.end();
  } catch (error) {
    console.error('Streaming error:', error);
    res.write(`data: ${JSON.stringify({ error: 'Streaming failed' })}\n\n`);
    res.end();
  }
});

export default router;
