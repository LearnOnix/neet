import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function QuizSidebar({ questions, currentIdx, userSelections, markedForReview, onNavigate }) {
  return (
    <div className="w-full lg:w-80">
      <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl sticky top-8">
        <div className="flex items-center gap-3 mb-8">
          <CheckCircle2 className="text-indigo-600" size={22} />
          <h5 className="font-black text-slate-800 tracking-tight">EXAM PROGRESS</h5>
        </div>
        
        <div className="grid grid-cols-4 gap-3">
          {questions.map((q, i) => {
            const isAnswered = userSelections[q.uid] !== undefined;
            const isMarked = markedForReview.has(i);
            const isCurrent = currentIdx === i;

            let btnClass = "bg-slate-50 text-slate-300 border-transparent";
            if (isAnswered) btnClass = "bg-green-500 text-white shadow-lg shadow-green-100";
            if (isMarked) btnClass = "bg-amber-400 text-white shadow-lg shadow-amber-100";
            if (isCurrent) btnClass = "ring-4 ring-indigo-100 border-indigo-600 text-indigo-600 bg-white font-black scale-110 z-10";

            return (
              <button
                key={q.uid}
                onClick={() => onNavigate(i)}
                className={`w-full aspect-square rounded-xl text-sm font-bold transition-all border-2 ${btnClass}`}
              >
                {i + 1}
              </button>
            );
          })}
        </div>

        <div className="mt-10 space-y-4 pt-8 border-t border-slate-50">
          <Legend color="bg-green-500" label="Answered" />
          <Legend color="bg-amber-400" label="Reviewing" />
          <Legend color="bg-slate-100" label="Unvisited" />
        </div>
      </div>
    </div>
  );
}

function Legend({ color, label }) {
  return (
    <div className="flex items-center gap-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
      <div className={`w-4 h-4 ${color} rounded-md shadow-sm`} /> {label}
    </div>
  );
}