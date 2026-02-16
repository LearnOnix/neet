import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import { 
  ChevronLeft, ChevronRight, Timer, Flag, 
  RotateCcw, Home, LogOut, AlertTriangle, CheckCircle2 
} from 'lucide-react';

export default function Quiz() {
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userSelections, setUserSelections] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(600); 
  const [showResults, setShowResults] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const currentQuestion = data.questions[currentIdx];

  // Timer logic that stops on result screen
  useEffect(() => {
    if (showResults || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showResults]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSelect = (optionId) => {
    setUserSelections({ ...userSelections, [currentQuestion.uid]: optionId });
  };

  const toggleReview = () => {
    const newReview = new Set(markedForReview);
    if (newReview.has(currentIdx)) newReview.delete(currentIdx);
    else newReview.add(currentIdx);
    setMarkedForReview(newReview);
  };

  const calculateScore = () => {
    return data.questions.reduce((score, q) => {
      return userSelections[q.uid] === q.correctId ? score + 1 : score;
    }, 0);
  };

  if (showResults) {
    const totalScore = calculateScore();
    return (
      <div className="max-w-4xl mx-auto mt-10 p-10 bg-white rounded-3xl shadow-2xl text-center border border-slate-100">
        <h2 className="text-4xl font-black text-slate-900 mb-2">Quiz Finished!</h2>
        <p className="text-slate-500 mb-8">Performance Summary</p>
        <div className="grid grid-cols-2 gap-6 mb-10">
          <div className="p-8 bg-blue-50 rounded-2xl">
            <p className="text-sm text-blue-600 font-bold uppercase tracking-widest">Score</p>
            <p className="text-5xl font-black text-blue-900">{totalScore} <span className="text-2xl text-blue-400">/ {data.questions.length}</span></p>
          </div>
          <div className="p-8 bg-slate-50 rounded-2xl">
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Time Used</p>
            <p className="text-5xl font-black text-slate-800">{formatTime(600 - timeLeft)}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <button onClick={() => window.location.reload()} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-black transition-all">
            <RotateCcw size={20} /> Try Again
          </button>
          <button onClick={() => navigate('/')} className="flex-1 bg-white border-2 border-slate-200 text-slate-700 py-4 rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-slate-50 transition-all">
            <Home size={20} /> Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen p-4 md:p-8 flex flex-col lg:flex-row gap-8 bg-slate-50 font-sans">
      
      {/* EXIT CONFIRMATION MODAL */}
      {showExitModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-md p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full shadow-2xl text-center border border-slate-100">
            <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
              <AlertTriangle size={32} />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Wait!</h3>
            <p className="text-slate-500 mt-2 mb-8 text-balance">Are you sure you want to quit? Your progress in this session will not be saved.</p>
            <div className="flex gap-3">
              <button onClick={() => setShowExitModal(false)} className="flex-1 py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-600">No, Stay</button>
              <button onClick={() => navigate('/')} className="flex-1 py-4 bg-red-500 text-white rounded-2xl font-bold">Yes, Exit</button>
            </div>
          </div>
        </div>
      )}

      {/* LEFT COLUMN: The Exam Paper */}
      <div className="flex-1">
        <div className="bg-white rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden flex flex-col h-full">
          
          {/* Pro Top Header */}
          <div className="p-6 border-b border-slate-50 flex justify-between items-center bg-white/80 backdrop-blur-md sticky top-0 z-20">
            <button onClick={() => setShowExitModal(true)} className="flex items-center gap-2 text-slate-400 hover:text-red-500 font-bold transition-all group">
              <div className="p-2 rounded-lg group-hover:bg-red-50"><LogOut size={18} /></div>
              <span className="hidden sm:inline">Exit Exam</span>
            </button>

            <div className="flex flex-col items-center">
               <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-xs font-black uppercase tracking-widest mb-1">
                {currentQuestion.subject}
               </span>
               <h4 className="text-slate-400 text-[10px] font-bold uppercase">{currentQuestion.chapter}</h4>
            </div>

            <div className={`flex items-center gap-3 px-5 py-2.5 rounded-2xl font-mono font-black shadow-inner ${timeLeft < 60 ? 'bg-red-50 text-red-500 animate-pulse' : 'bg-slate-900 text-white'}`}>
              <Timer size={18} /> {formatTime(timeLeft)}
            </div>
          </div>

          {/* Question Section */}
          <div className="p-8 md:p-12 flex-1">
            <div className="flex items-start gap-4 mb-10">
              <span className="flex-shrink-0 w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                {currentIdx + 1}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-800 leading-snug">
                {currentQuestion.question}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {currentQuestion.options.map((opt) => (
                <button
                  key={opt.id}
                  onClick={() => handleSelect(opt.id)}
                  className={`group p-6 rounded-[1.5rem] border-2 text-left transition-all flex items-center justify-between
                    ${userSelections[currentQuestion.uid] === opt.id 
                      ? 'border-indigo-600 bg-indigo-50/30 ring-4 ring-indigo-50' 
                      : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50/50'}`}
                >
                  <span className="flex items-center gap-5">
                    <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-black border-2 transition-all
                      ${userSelections[currentQuestion.uid] === opt.id ? 'bg-indigo-600 border-indigo-600 text-white' : 'bg-white text-slate-300 border-slate-100'}`}>
                      {String.fromCharCode(65 + opt.id)}
                    </span>
                    <span className={`text-lg font-medium ${userSelections[currentQuestion.uid] === opt.id ? 'text-indigo-900' : 'text-slate-600'}`}>
                      {opt.text}
                    </span>
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Nav Controls */}
          <div className="p-8 bg-slate-50/50 border-t border-slate-100 flex justify-between items-center mt-auto">
            <button 
              onClick={() => setCurrentIdx(prev => Math.max(0, prev - 1))}
              disabled={currentIdx === 0}
              className="flex items-center gap-2 text-slate-400 font-bold hover:text-slate-800 transition-all disabled:opacity-20"
            >
              <ChevronLeft size={24} /> <span className="hidden sm:inline">Previous Question</span>
            </button>
            
            <div className="flex gap-4">
              <button 
                onClick={toggleReview}
                className={`flex items-center gap-2 px-6 py-4 rounded-2xl border-2 font-bold transition-all ${markedForReview.has(currentIdx) ? 'bg-amber-400 border-amber-400 text-white shadow-lg shadow-amber-200' : 'bg-white border-slate-200 text-slate-400 hover:border-amber-200 hover:text-amber-500'}`}
              >
                <Flag size={20} fill={markedForReview.has(currentIdx) ? "white" : "none"} />
                <span className="hidden sm:inline">Mark for Review</span>
              </button>
              
              <button 
                onClick={() => currentIdx + 1 === data.questions.length ? setShowResults(true) : setCurrentIdx(currentIdx + 1)}
                className="bg-indigo-600 text-white px-10 py-4 rounded-2xl font-black shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center gap-2"
              >
                {currentIdx + 1 === data.questions.length ? "Finish Test" : "Save & Next"} <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT COLUMN: Question Grid Palette */}
      <div className="w-full lg:w-80">
        <div className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 sticky top-8">
          <div className="flex items-center gap-3 mb-8">
            <CheckCircle2 className="text-indigo-600" size={22} />
            <h5 className="font-black text-slate-800 tracking-tight">EXAM PROGRESS</h5>
          </div>
          
          <div className="grid grid-cols-4 gap-3">
            {data.questions.map((q, i) => {
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
                  onClick={() => setCurrentIdx(i)}
                  className={`w-full aspect-square rounded-xl text-sm font-bold transition-all border-2 ${btnClass}`}
                >
                  {i + 1}
                </button>
              );
            })}
          </div>

          <div className="mt-10 space-y-4 pt-8 border-t border-slate-50">
            <div className="flex items-center gap-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
              <div className="w-4 h-4 bg-green-500 rounded-md shadow-sm" /> Answered
            </div>
            <div className="flex items-center gap-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
              <div className="w-4 h-4 bg-amber-400 rounded-md shadow-sm" /> Reviewing
            </div>
            <div className="flex items-center gap-4 text-[11px] font-black text-slate-400 uppercase tracking-widest">
              <div className="w-4 h-4 bg-slate-100 rounded-md shadow-sm" /> Unvisited
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}