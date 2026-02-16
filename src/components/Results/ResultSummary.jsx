import React from 'react';
import { RotateCcw, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ResultSummary({ selections, questions, timeUsed }) {
  const navigate = useNavigate();
  const score = questions.reduce((acc, q) => 
    selections[q.uid] === q.correctId ? acc + 1 : acc, 0
  );

  return (
    <div className="max-w-4xl mx-auto mt-10 p-10 bg-white rounded-3xl shadow-2xl text-center border border-slate-100">
      <h2 className="text-4xl font-black text-slate-900 mb-2">Quiz Finished!</h2>
      <p className="text-slate-500 mb-8">Performance Summary</p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="p-8 bg-blue-50 rounded-2xl">
          <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">Score</p>
          <p className="text-5xl font-black text-blue-900">{score} <span className="text-2xl text-blue-400">/ {questions.length}</span></p>
        </div>
        <div className="p-8 bg-slate-50 rounded-2xl">
          <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Time Used</p>
          <p className="text-5xl font-black text-slate-800">{Math.floor(timeUsed/60)}m {timeUsed%60}s</p>
        </div>
      </div>

      <div className="flex gap-4">
        <button onClick={() => window.location.reload()} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black">
          <RotateCcw size={20} /> Try Again
        </button>
        <button onClick={() => navigate('/')} className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50">
          <Home size={20} /> Home
        </button>
      </div>
    </div>
  );
}