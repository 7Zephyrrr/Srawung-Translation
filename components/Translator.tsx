
import React, { useState, useEffect, useRef } from 'react';
import { PolitenessLevel, HistoryItem } from '../types';
import { POLITENESS_CONFIG } from '../constants';
import { translateText } from '../services/geminiService';

interface TranslatorProps {
  onAddHistory: (item: HistoryItem) => void;
}

export const Translator: React.FC<TranslatorProps> = ({ onAddHistory }) => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [level, setLevel] = useState<PolitenessLevel>(PolitenessLevel.NGOKO);
  const [isTranslating, setIsTranslating] = useState(false);
  // Fix: Using any for the debounce timer reference to avoid NodeJS namespace errors in the browser
  const debounceTimer = useRef<any>(null);

  const handleTranslate = async (text: string, currentLevel: PolitenessLevel) => {
    if (!text.trim()) {
      setOutputText('');
      return;
    }

    setIsTranslating(true);
    try {
      const result = await translateText(text, currentLevel);
      setOutputText(result);
      
      // Store in history
      const newItem: HistoryItem = {
        id: Math.random().toString(36).substr(2, 9),
        originalText: text,
        translatedText: result,
        level: currentLevel,
        timestamp: Date.now()
      };
      onAddHistory(newItem);
    } catch (error) {
      setOutputText("Wonten kaluputan (Ada kesalahan). Silakan coba lagi.");
    } finally {
      setIsTranslating(false);
    }
  };

  useEffect(() => {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);
    
    if (inputText) {
      debounceTimer.current = setTimeout(() => {
        handleTranslate(inputText, level);
      }, 1000);
    } else {
      setOutputText('');
    }
    
    return () => {
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, [inputText, level]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
    alert('Salinan kasil (Berhasil disalin)!');
  };

  return (
    <div className="flex-grow flex flex-col gap-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 flex-grow min-h-[400px]">
        {/* Input Section */}
        <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-primary/10 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-500">Bahasa Indonesia</span>
            <div className="flex gap-2">
              <span className="text-[10px] text-slate-400">Character: {inputText.length}/500</span>
            </div>
          </div>
          <div className="flex-grow p-6 relative">
            <textarea 
              value={inputText}
              onChange={(e) => setInputText(e.target.value.slice(0, 500))}
              className="w-full h-full bg-transparent border-none focus:ring-0 resize-none text-xl placeholder:text-slate-300 font-light" 
              placeholder="Ketikkan kalimat yang ingin diterjemahkan..."
            />
            <button className="absolute bottom-6 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-lg shadow-primary/30 flex items-center justify-center hover:scale-105 transition-transform">
              <span className="material-icons text-2xl">mic</span>
            </button>
          </div>
        </div>

        {/* Output Section */}
        <div className="flex flex-col bg-white dark:bg-slate-900/50 rounded-xl border border-primary/10 shadow-sm overflow-hidden">
          <div className="px-4 py-3 border-b border-primary/10 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Basa Jawa</span>
            <div className="flex gap-2">
              <button className="p-1 hover:text-primary transition-colors">
                <span className="material-icons text-sm">volume_up</span>
              </button>
            </div>
          </div>
          <div className="flex-grow p-6 relative batik-pattern">
            <div className="text-xl font-medium text-slate-800 dark:text-slate-100">
              {isTranslating ? (
                <div className="flex items-center gap-2 text-slate-400 italic">
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-.3s]"></div>
                  <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-.5s]"></div>
                  <span className="ml-2">Menerjemahkan...</span>
                </div>
              ) : outputText ? (
                <span>{outputText}</span>
              ) : (
                <span className="text-slate-300 italic">Hasil terjemahan akan muncul di sini...</span>
              )}
            </div>
            {outputText && !isTranslating && (
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button 
                  onClick={copyToClipboard}
                  className="px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-semibold flex items-center gap-2 hover:bg-primary hover:text-white transition-all"
                >
                  <span className="material-icons text-base">content_copy</span>
                  Copy
                </button>
                <button className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-white transition-all">
                  <span className="material-icons text-base">share</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Level Selector */}
      <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-primary/10 p-2 shadow-sm">
        <div className="flex flex-col md:flex-row items-center gap-4">
          <div className="px-4 py-2 border-r border-primary/10 hidden md:block">
            <p className="text-[10px] uppercase font-bold text-slate-400">Politeness Level</p>
          </div>
          <div className="flex flex-wrap gap-2 p-1 flex-grow">
            {Object.entries(POLITENESS_CONFIG).map(([lvl, config]) => (
              <button 
                key={lvl}
                onClick={() => setLevel(lvl as PolitenessLevel)}
                className={`flex-1 min-w-[120px] py-3 px-4 rounded-lg flex flex-col items-center gap-1 transition-all border ${
                  level === lvl 
                    ? 'bg-primary text-white border-transparent' 
                    : 'bg-primary/5 hover:bg-primary/10 text-slate-600 dark:text-slate-300 border-transparent hover:border-primary/20'
                }`}
              >
                <span className="font-bold text-sm">{config.label}</span>
                <span className={`text-[10px] ${level === lvl ? 'opacity-80' : 'opacity-60'}`}>{config.description}</span>
              </button>
            ))}
          </div>
          <div className="p-4">
            <button className="text-slate-400 hover:text-primary transition-colors">
              <span className="material-icons">info_outline</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
