
import { GoogleGenAI } from "@google/genai";
import { PolitenessLevel } from "../types";

// Always use the process.env.API_KEY directly as per guidelines
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const translateText = async (
  text: string, 
  level: PolitenessLevel
): Promise<string> => {
  if (!text.trim()) return '';

  const systemInstruction = `You are a world-class linguistic expert in Indonesian and Javanese dialects, specifically the Yogyakarta 'Mataraman' dialect. 
  Your task is to translate Indonesian text into Javanese at a specific politeness level: ${level}.
  
  Politeness Levels Explanation:
  - Ngoko: Casual, informal, used with friends or peers.
  - Krama Madya: Polite, neutral, used with strangers or in formal daily settings.
  - Krama Inggil: Highly formal, extremely respectful, used with elders, nobles, or highly respected figures.
  
  Guidelines:
  1. Return ONLY the translated Javanese text.
  2. Do not include explanations, notes, or punctuation if it wasn't in the original.
  3. Ensure the vocabulary is authentic to the Yogyakarta region.
  4. If the input is already in Javanese, improve it based on the requested level.`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `Translate this Indonesian text to Javanese (${level}): "${text}"`,
      config: {
        systemInstruction,
        temperature: 0.3,
      },
    });

    // Use response.text property directly as per guidelines
    return response.text?.trim() || "Translation unavailable";
  } catch (error) {
    console.error("Translation Error:", error);
    throw new Error("Gagal menerjemahkan. Silakan coba lagi.");
  }
};
