
import React, { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Landing } from './components/Landing';
import { Translator } from './components/Translator';
import { Sidebar } from './components/Sidebar';
import { HistoryItem } from './types';
import { INITIAL_HISTORY } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<'landing' | 'translator'>('landing');
  const [history, setHistory] = useState<HistoryItem[]>(INITIAL_HISTORY);

  const addHistory = (item: HistoryItem) => {
    setHistory(prev => [item, ...prev].slice(0, 20));
  };

  const clearHistory = () => {
    setHistory([]);
  };

  return (
    <div className="min-h-screen flex flex-col font-display">
      <Header onNav={setView} activeView={view} />
      
      {view === 'landing' ? (
        <main className="flex-grow">
          <Landing onStart={() => setView('translator')} />
        </main>
      ) : (
        <main className="flex-grow flex flex-col md:flex-row max-w-7xl mx-auto w-full p-4 gap-6">
          <Translator onAddHistory={addHistory} />
          <Sidebar history={history} onClear={clearHistory} />
        </main>
      )}

      <Footer />

      {/* Floating Location Context - Only shown on Translator and desktop */}
      {view === 'translator' && (
        <div className="fixed bottom-6 left-6 hidden xl:block">
          <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-primary/10 shadow-xl flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden">
              <img 
                alt="Yogyakarta" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/tugu/100/100" 
              />
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="material-icons text-[12px] text-primary">location_on</span>
                <span className="text-[10px] font-bold text-slate-500 uppercase">Current Context</span>
              </div>
              <p className="text-xs font-bold">Yogyakarta, Indonesia</p>
              <div className="flex items-center gap-2 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                <span className="text-[10px] text-slate-400">Optimal Dialect: Mataraman</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
