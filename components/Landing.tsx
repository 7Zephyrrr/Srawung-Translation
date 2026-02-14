
import React from 'react';
import { PolitenessLevel } from '../types';
import { POLITENESS_CONFIG } from '../constants';

interface LandingProps {
  onStart: () => void;
}

export const Landing: React.FC<LandingProps> = ({ onStart }) => {
  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-24">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <span className="material-icons text-sm">location_on</span>
              <span className="text-sm font-bold tracking-wide uppercase">Yogyakarta, Indonesia</span>
            </div>
            <h1 className="text-6xl md:text-7xl font-extrabold mb-6 leading-tight">
              Sugeng Rawuh <br/>
              <span className="text-primary italic font-medium">ing Ngayogyakarta</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 leading-relaxed max-w-lg">
              Master the art of <span className="text-primary font-bold italic">Unggah-Ungguh</span>. Srawung helps newcomers communicate with respect, warmth, and proper etiquette in the heart of Javanese culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={onStart}
                className="bg-primary text-white px-10 py-5 rounded-xl font-extrabold text-lg shadow-2xl shadow-primary/30 hover:scale-[1.02] transition-transform"
              >
                Start Translating
              </button>
              <button className="border-2 border-primary/20 hover:border-primary/50 px-10 py-5 rounded-xl font-extrabold text-lg transition-all flex items-center justify-center gap-2">
                <span className="material-icons">play_circle</span>
                Watch Guide
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-12 -right-12 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-slate-800 rotate-2">
              <img 
                alt="Yogyakarta Palace" 
                className="w-full h-[500px] object-cover" 
                src="https://picsum.photos/seed/kraton/800/600" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* Context Cards Section */}
      <section className="py-24 bg-white/50 dark:bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Choose Your Context</h2>
            <div className="w-24 h-1.5 bg-primary mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
              Javanese language isn't just about words; it's about who you are speaking to. 
              Choose the right politeness level for every interaction.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {Object.entries(POLITENESS_CONFIG).map(([level, config]) => (
              <div key={level} className="bg-background-light dark:bg-background-dark p-8 rounded-2xl border border-primary/10 hover:border-primary/40 transition-all group shadow-sm">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <span className="material-icons text-3xl">
                    {level === PolitenessLevel.NGOKO ? 'people' : level === PolitenessLevel.KRAMA_MADYA ? 'work' : 'account_balance'}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-3">{config.label}</h3>
                <p className="text-primary font-semibold mb-4 text-sm uppercase tracking-widest italic">{config.context}</p>
                <p className="text-slate-600 dark:text-slate-400 mb-6">{config.detailedDesc}</p>
                <div className="flex items-center gap-2 text-sm text-slate-500 font-medium border-t border-primary/10 pt-6">
                  <span className="material-icons text-xs">info</span>
                  Used for: <span className="font-bold text-slate-700 dark:text-slate-200">{config.useFor}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative bg-primary overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center text-white">
          <h2 className="text-4xl font-black mb-6">Ready to blend in?</h2>
          <p className="text-xl opacity-90 mb-10 max-w-xl mx-auto">
            "Wong Jawa kuwi njawani." Being Javanese is about knowing how to carry yourself. 
            Start your journey now.
          </p>
          <div className="flex justify-center">
            <button 
              onClick={onStart}
              className="bg-white text-primary px-12 py-5 rounded-full font-black text-xl hover:bg-slate-50 transition-colors shadow-2xl"
            >
              Open Translator Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
