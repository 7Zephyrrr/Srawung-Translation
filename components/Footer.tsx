
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-6 px-4 border-t border-primary/10 bg-white/30 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-6">
          <span className="text-[11px] font-bold text-slate-400 uppercase tracking-widest">© 2024 SRAWUNG DIGITAL</span>
          <div className="flex gap-4">
            <a className="text-[11px] font-bold text-slate-500 hover:text-primary uppercase tracking-wider" href="#">Privacy Policy</a>
            <a className="text-[11px] font-bold text-slate-500 hover:text-primary uppercase tracking-wider" href="#">Terms of Service</a>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden">
              <img src="https://picsum.photos/seed/a/40/40" className="w-full h-full object-cover" alt="User" />
            </div>
            <div className="w-6 h-6 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden text-[8px] font-bold">
              +82
            </div>
          </div>
          <span className="text-[10px] text-slate-500 font-medium">Newcomers learning Javanese right now</span>
        </div>
      </div>
    </footer>
  );
};
