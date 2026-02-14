
import { PolitenessLevel } from './types';

export const POLITENESS_CONFIG = {
  [PolitenessLevel.NGOKO]: {
    label: 'Ngoko',
    description: 'Daily / Peers',
    context: 'Informal / Casual',
    useFor: 'Friends, Peers',
    detailedDesc: 'Best used for friends of the same age, siblings, or peers you are close with. Relaxed and conversational.'
  },
  [PolitenessLevel.KRAMA_MADYA]: {
    label: 'Krama Madya',
    description: 'Polite / Strangers',
    context: 'Formal / Neutral',
    useFor: 'Colleagues, Strangers',
    detailedDesc: 'Essential for daily professional interactions, talking to strangers, or people you don’t know well.'
  },
  [PolitenessLevel.KRAMA_INGGIL]: {
    label: 'Krama Inggil',
    description: 'Formal / Elders',
    context: 'Highly Formal / Respectful',
    useFor: 'Elders, Respected Figures',
    detailedDesc: 'Reserved for showing the highest level of respect to elders, mentors, or highly respected social figures.'
  }
};

export const INITIAL_HISTORY: any[] = [
  {
    id: '1',
    originalText: 'Bagaimana kabarmu?',
    translatedText: 'Piye kabare? Isih penak jaman...',
    level: PolitenessLevel.NGOKO,
    timestamp: Date.now() - 120000
  },
  {
    id: '2',
    originalText: 'Saya ingin pergi ke Malioboro',
    translatedText: 'Dalem badhe tindak dhateng Malioboro',
    level: PolitenessLevel.KRAMA_INGGIL,
    timestamp: Date.now() - 3600000
  }
];
