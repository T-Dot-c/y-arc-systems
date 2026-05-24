export interface GeminiRequest {
  prompt: string;
  history?: { role: string; content: string }[];
}

export interface StreamChunk {
  text: string;
  isDone: boolean;
}

export interface ParsedDocument {
  title: string;
  content: string;
  metadata?: Record<string, any>;
}
