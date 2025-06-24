// import React from 'react';
import { useQuiz } from '../hooks/useQuiz';
import Question from './Question';
import Result from './Result';
import Button from './Button';

const Quiz = () => {
  const { 
    quizState, 
    startQuiz, 
    selectAnswer, 
    nextQuestion, 
    restartQuiz,
    calculateResults 
  } = useQuiz();
  
  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];
  
  // Render start screen
  if (quizState.status === 'idle') {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center p-6 animate-fade-in">
        <h1 className="text-4xl font-bold text-slate-800 mb-4">
          Welcome to the CodeHarborHub Quiz
        </h1>
        <p className="text-lg text-slate-600 mb-8 max-w-xl">
          Test your knowledge on web development concepts. Answer all questions to see how well you know these topics!
        </p>
        <div className="mb-8">
          <div className="flex items-center text-left mb-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center mr-3">
              <span className="text-indigo-600 font-bold">7</span>
            </div>
            <span className="text-slate-700">Carefully crafted questions</span>
          </div>
          <div className="flex items-center text-left mb-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <span className="text-slate-700">Instant feedback on your answers</span>
          </div>
          <div className="flex items-center text-left">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <span className="text-slate-700">Detailed results with performance metrics</span>
          </div>
        </div>
        <Button onClick={startQuiz}>Start Quiz</Button>
      </div>
    );
  }
  
  // Render result screen
  if (quizState.status === 'completed') {
    const results = calculateResults();
    return <Result results={results} onRestart={restartQuiz} />;
  }
  
  // Render question screen
  return (
    <div className="p-6">
      <Question
        question={currentQuestion}
        selectedAnswerId={quizState.selectedAnswerId}
        answered={quizState.answered}
        onSelectAnswer={selectAnswer}
        onNextQuestion={nextQuestion}
        questionNumber={quizState.currentQuestionIndex + 1}
        totalQuestions={quizState.questions.length}
      />
    </div>
  );
};

export default Quiz;