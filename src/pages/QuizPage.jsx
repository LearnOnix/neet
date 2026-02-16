import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { quizData } from '../data/questions';

// Component Imports
import QuizHeader from '../components/Quiz/QuizHeader';
import QuestionCard from '../components/Quiz/QuestionCard';
import QuizControls from '../components/Quiz/QuizControls';
import QuizSidebar from '../components/Quiz/QuizSidebar';
import ExitModal from '../components/Quiz/ExitModal';
import ResultSummary from '../components/Results/ResultSummary';

export default function QuizPage() {
  const navigate = useNavigate();
  const [currentIdx, setCurrentIdx] = useState(0);
  const [userSelections, setUserSelections] = useState({});
  const [markedForReview, setMarkedForReview] = useState(new Set());
  const [timeLeft, setTimeLeft] = useState(600);
  const [showResults, setShowResults] = useState(false);
  const [showExitModal, setShowExitModal] = useState(false);

  const questions = quizData.questions;
  const currentQuestion = questions[currentIdx];

  // Timer logic
  useEffect(() => {
    if (showResults || timeLeft <= 0) return;
    const timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    return () => clearInterval(timer);
  }, [timeLeft, showResults]);

  const handleSelect = (optionId) => {
    setUserSelections({ ...userSelections, [currentQuestion.uid]: optionId });
  };

  const toggleReview = () => {
    const newReview = new Set(markedForReview);
    newReview.has(currentIdx) ? newReview.delete(currentIdx) : newReview.add(currentIdx);
    setMarkedForReview(newReview);
  };

  if (showResults) {
    return <ResultSummary 
              selections={userSelections} 
              questions={questions} 
              timeUsed={600 - timeLeft} 
            />;
  }

  return (
    <div className="max-w-[1440px] mx-auto min-h-screen p-4 md:p-8 flex flex-col lg:flex-row gap-8 bg-slate-50">
      {showExitModal && <ExitModal onCancel={() => setShowExitModal(false)} onConfirm={() => navigate('/')} />}

      <div className="flex-1 flex flex-col gap-6">
        <QuizHeader 
          subject={currentQuestion.subject} 
          chapter={currentQuestion.chapter} 
          timeLeft={timeLeft} 
          onExit={() => setShowExitModal(true)} 
        />

        <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 flex-1 flex flex-col overflow-hidden">
          <QuestionCard 
            index={currentIdx}
            question={currentQuestion}
            selectedOption={userSelections[currentQuestion.uid]}
            onSelect={handleSelect}
          />

          <QuizControls 
            isFirst={currentIdx === 0}
            isLast={currentIdx === questions.length - 1}
            isMarked={markedForReview.has(currentIdx)}
            onPrev={() => setCurrentIdx(prev => prev - 1)}
            onNext={() => setCurrentIdx(prev => prev + 1)}
            onReview={toggleReview}
            onFinish={() => setShowResults(true)}
          />
        </div>
      </div>

      <QuizSidebar 
        questions={questions}
        currentIdx={currentIdx}
        userSelections={userSelections}
        markedForReview={markedForReview}
        onNavigate={(i) => setCurrentIdx(i)}
      />
    </div>
  );
}