import { useState, useCallback, useRef } from 'react';
import { GeminiRequest } from '../../shared/types/ai.types';

export function useGeminiStream() {
  const [text, setText] = useState<string>('');
  const [status, setStatus] = useState<'idle' | 'streaming' | 'done' | 'error'>('idle');
  const abortControllerRef = useRef<AbortController | null>(null);

  const start = useCallback(async (payload: GeminiRequest) => {
    // Abort previous request if any
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }

    const controller = new AbortController();
    abortControllerRef.current = controller;

    setText('');
    setStatus('streaming');

    try {
      const response = await fetch('http://localhost:3001/api/ai/stream', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: payload.prompt }),
        signal: controller.signal,
      });

      if (!response.ok) throw new Error('Stream request failed');

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();

      if (!reader) throw new Error('No reader available');

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const data = JSON.parse(line.slice(6));
              if (data.text) {
                setText((prev) => prev + data.text);
              }
            } catch (e) {
              // Ignore partial JSON or markers
            }
          }
          if (line.startsWith('event: done')) {
            setStatus('done');
          }
        }
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('Stream aborted');
      } else {
        console.error('Stream error:', error);
        setStatus('error');
      }
    } finally {
      abortControllerRef.current = null;
      if (status !== 'error') setStatus('done');
    }
  }, [status]);

  const stop = useCallback(() => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
      abortControllerRef.current = null;
      setStatus('idle');
    }
  }, []);

  return { text, status, start, stop };
}
