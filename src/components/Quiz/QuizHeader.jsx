import React from 'react';
import { LogOut, Timer } from 'lucide-react';

export default function QuizHeader({ subject, chapter, timeLeft, onExit }) {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-100 flex justify-between items-center shadow-sm">
      <button onClick={onExit} className="flex items-center gap-2 text-slate-400 hover:text-red-500 font-bold transition-all group">
        <div className="p-2 rounded-lg group-hover:bg-red-50"><LogOut size={18} /></div>
        <span className="hidden sm:inline">Exit Exam</span>
      </button>

      <div className="flex flex-col items-center">
        <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-1">
          {subject}
        </span>
        <h4 className="text-slate-400 text-[10px] font-bold uppercase">{chapter}</h4>
      </div>

      <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl font-mono font-black shadow-inner transition-colors ${timeLeft < 60 ? 'bg-red-50 text-red-500 animate-pulse' : 'bg-slate-900 text-white'}`}>
        <Timer size={18} /> {formatTime(timeLeft)}
      </div>
    </div>
  );
}