import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../data/questions';
import { BookOpen, ChevronRight, GraduationCap, Atom, Beaker, Calculator } from 'lucide-react';

const icons = { Atom, Beaker, Calculator };

export default function SelectionPage() {
  const navigate = useNavigate();
  const [selectedSubject, setSelectedSubject] = useState(null);

  const subjects = Object.keys(quizData);

  return (
    <div className="min-h-screen bg-slate-50 p-6 md:p-12 font-sans">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="p-3 bg-indigo-600 text-white rounded-2xl shadow-lg shadow-indigo-100">
              <GraduationCap size={32} />
            </div>
            <h1 className="text-3xl font-black text-slate-900 tracking-tight">Exam Portal 2026</h1>
          </div>
          <p className="text-slate-500 font-medium">Select a subject and chapter to begin your assessment.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Subject List */}
          <div className="lg:col-span-1 space-y-4">
            <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest ml-2">Available Subjects</h3>
            {subjects.map((sub) => {
              const Icon = icons[quizData[sub].icon] || BookOpen;
              const isActive = selectedSubject === sub;
              return (
                <button
                  key={sub}
                  onClick={() => setSelectedSubject(sub)}
                  className={`w-full p-5 rounded-[2rem] border-2 transition-all flex items-center gap-4 group
                    ${isActive ? 'bg-white border-indigo-600 shadow-xl shadow-indigo-50' : 'bg-white/50 border-transparent hover:bg-white hover:border-slate-200'}`}
                >
                  <div className={`p-4 rounded-2xl transition-colors ${isActive ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-500 group-hover:bg-indigo-50 group-hover:text-indigo-600'}`}>
                    <Icon size={24} />
                  </div>
                  <div className="text-left">
                    <p className={`font-black ${isActive ? 'text-slate-900' : 'text-slate-600'}`}>{sub}</p>
                    <p className="text-xs text-slate-400 font-bold uppercase">{quizData[sub].chapters.length} Chapters</p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right: Chapter Selection */}
          <div className="lg:col-span-2">
            {selectedSubject ? (
              <div className="bg-white rounded-[2.5rem] p-8 border border-slate-100 shadow-xl shadow-slate-200/40 animate-in fade-in slide-in-from-right-4">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight">
                    {selectedSubject} Chapters
                  </h2>
                  <span className="px-4 py-1.5 bg-indigo-50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                    Select One
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {quizData[selectedSubject].chapters.map((chapter) => (
                    <button
                      key={chapter.id}
                      onClick={() => navigate(`/quiz/${selectedSubject}/${chapter.id}`)}
                      className="group p-6 rounded-3xl border-2 border-slate-50 hover:border-indigo-100 hover:bg-indigo-50/30 transition-all text-left flex justify-between items-center"
                    >
                      <div>
                        <h4 className="font-bold text-slate-700 group-hover:text-indigo-900 transition-colors">{chapter.title}</h4>
                        <p className="text-xs text-slate-400 mt-1">{chapter.questions.length} Questions • 10 Mins</p>
                      </div>
                      <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                        <ChevronRight size={20} />
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="h-full min-h-[400px] border-4 border-dashed border-slate-200 rounded-[3rem] flex flex-col items-center justify-center text-center p-12">
                <div className="w-20 h-20 bg-slate-100 text-slate-300 rounded-full flex items-center justify-center mb-4">
                  <BookOpen size={40} />
                </div>
                <h3 className="text-xl font-bold text-slate-400">Choose a subject</h3>
                <p className="text-slate-400 max-w-[250px] mt-2">Pick a subject from the left to see available chapters and start practicing.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}