import React from 'react';

export default function QuestionCard({ index, question, selectedOption, onSelect }) {
  return (
    <div className="p-8 md:p-12 flex-1 overflow-y-auto">
      <div className="flex items-start gap-4 mb-10">
        <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl">
          {index + 1}
        </span>
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
          {question.question}
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onSelect(opt.id)}
            className={`group p-6 rounded-[1.5rem] border-2 text-left transition-all flex items-center justify-between
              ${selectedOption === opt.id 
                ? 'border-indigo-600 bg-indigo-50/30 ring-4 ring-indigo-50' 
                : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50/50'}`}
          >
            <span className="flex items-center gap-5">
              <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border-2 transition-all
                ${selectedOption === opt.id ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white text-slate-300 border-slate-100'}`}>
                {String.fromCharCode(65 + opt.id)}
              </span>
              <span className={`text-lg font-medium ${selectedOption === opt.id ? 'text-indigo-900' : 'text-slate-600'}`}>
                {opt.text}
              </span>
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}