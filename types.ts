
export enum PolitenessLevel {
  NGOKO = 'Ngoko',
  KRAMA_MADYA = 'Krama Madya',
  KRAMA_INGGIL = 'Krama Inggil'
}

export interface HistoryItem {
  id: string;
  originalText: string;
  translatedText: string;
  level: PolitenessLevel;
  timestamp: number;
}

export interface TranslationResult {
  text: string;
  level: PolitenessLevel;
}
