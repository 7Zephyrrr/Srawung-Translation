
import React from 'react';
import { HistoryItem } from '../types';

interface SidebarProps {
  history: HistoryItem[];
  onClear: () => void;
}

const formatTime = (ts: number) => {
  const diff = Date.now() - ts;
  if (diff < 60000) return 'Just now';
  if (diff < 3600000) return `${Math.floor(diff / 60000)} mins ago`;
  if (diff < 86400000) return `${Math.floor(diff / 3600000)} hours ago`;
  return 'Yesterday';
};

export const Sidebar: React.FC<SidebarProps> = ({ history, onClear }) => {
  return (
    <aside className="w-full md:w-80 flex flex-col gap-4">
      <div className="bg-white dark:bg-slate-900/50 rounded-xl border border-primary/10 flex flex-col h-full min-h-[500px] shadow-sm overflow-hidden">
        <div className="p-4 border-b border-primary/10 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
          <h3 className="font-bold text-sm flex items-center gap-2">
            <span className="material-icons text-sm text-primary">history</span>
            Recent Activity
          </h3>
          <button 
            onClick={onClear}
            className="text-[10px] font-bold text-primary uppercase hover:underline"
          >
            Clear All
          </button>
        </div>
        <div className="flex-grow overflow-y-auto custom-scrollbar p-3 space-y-3 max-h-[600px]">
          {history.length === 0 ? (
            <div className="text-center py-12 text-slate-400 text-sm italic">
              No recent translations
            </div>
          ) : (
            history.map((item) => (
              <div 
                key={item.id} 
                className="p-3 rounded-lg bg-background-light dark:bg-slate-800 border border-primary/5 group cursor-pointer hover:border-primary/30 transition-all"
              >
                <div className="flex justify-between items-start mb-1">
                  <span className="text-[10px] font-bold text-primary uppercase">{item.level}</span>
                  <span className="text-[10px] text-slate-400">{formatTime(item.timestamp)}</span>
                </div>
                <p className="text-xs font-semibold truncate mb-1 text-slate-800 dark:text-slate-200">{item.originalText}</p>
                <p className="text-xs text-slate-500 line-clamp-2">{item.translatedText}</p>
              </div>
            ))
          )}
        </div>
        <div className="p-4 mt-auto border-t border-primary/10">
          <div className="bg-primary/5 p-4 rounded-lg">
            <h4 className="text-xs font-bold mb-1">Pro Tip</h4>
            <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
              Gunakan <span className="text-primary font-bold">Krama Inggil</span> saat berbicara dengan orang tua atau penjual di pasar Beringharjo untuk kesopanan maksimal.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
};
