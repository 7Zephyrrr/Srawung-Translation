
import React from 'react';

interface HeaderProps {
  onNav: (view: 'landing' | 'translator') => void;
  activeView: 'landing' | 'translator';
}

export const Header: React.FC<HeaderProps> = ({ onNav, activeView }) => {
  return (
    <header className="border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <div 
          className="flex items-center gap-3 cursor-pointer" 
          onClick={() => onNav('landing')}
        >
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white">
            <span className="material-icons">translate</span>
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight text-primary">SRAWUNG</h1>
            <p className="text-[10px] uppercase tracking-[0.2em] font-medium opacity-60">Yogyakarta Edition</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button 
            onClick={() => onNav('translator')}
            className={`${activeView === 'translator' ? 'text-primary border-b-2 border-primary' : 'hover:text-primary transition-colors'} pb-1`}
          >
            Translator
          </button>
          <button className="hover:text-primary transition-colors">Etiquette Guide</button>
          <button className="hover:text-primary transition-colors">Yogyakarta Basics</button>
        </nav>

        <div className="flex items-center gap-4">
          <button className="p-2 rounded-full hover:bg-primary/10 transition-colors">
            <span className="material-icons text-slate-600 dark:text-slate-300">notifications</span>
          </button>
          <div className="w-8 h-8 rounded-full overflow-hidden bg-primary/20 flex items-center justify-center">
            <img 
              alt="Profile" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/user123/100/100" 
            />
          </div>
        </div>
      </div>
    </header>
  );
};
