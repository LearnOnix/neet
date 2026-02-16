import React from 'react';
import { ChevronLeft, ChevronRight, Flag } from 'lucide-react';

export default function QuizControls({ isFirst, isLast, isMarked, onPrev, onNext, onReview, onFinish }) {
  return (
    <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center">
      <button 
        onClick={onPrev}
        disabled={isFirst}
        className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-800 transition-all disabled:opacity-20"
      >
        <ChevronLeft size={24} /> <span className="hidden sm:inline">Previous</span>
      </button>
      
      <div className="flex gap-4">
        <button 
          onClick={onReview}
          className={`flex items-center gap-2 px-6 py-4 rounded-2xl border-2 font-bold transition-all ${isMarked ? 'bg-amber-400 border-amber-400 text-white shadow-lg' : 'bg-white border-slate-200 text-slate-400 hover:border-amber-200'}`}
        >
          <Flag size={20} fill={isMarked ? "white" : "none"} />
          <span className="hidden sm:inline">Review</span>
        </button>
        
        <button 
          onClick={isLast ? onFinish : onNext}
          className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl hover:bg-indigo-700 transition-all flex items-center gap-2"
        >
          {isLast ? "Finish Test" : "Save & Next"} <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}