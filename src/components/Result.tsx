// import React from 'react';
import { QuizResults } from '../types';
import Button from './Button';

interface ResultProps {
  results: QuizResults;
  onRestart: () => void;
}

const Result = ({ results, onRestart }: ResultProps) => {
  const { totalQuestions, correctAnswers, wrongAnswers, percentage } = results;
  
  // Determine feedback based on score percentage
  const getFeedback = () => {
    if (percentage >= 80) {
      return {
        emoji: '🏆',
        title: 'Excellent!',
        message: 'You have an impressive understanding of these topics!'
      };
    } else if (percentage >= 60) {
      return {
        emoji: '👍',
        title: 'Good job!',
        message: 'You have a solid grasp of most of these concepts.'
      };
    } else if (percentage >= 40) {
      return {
        emoji: '🙂',
        title: 'Not bad!',
        message: 'You\'re on the right track, but there\'s room for improvement.'
      };
    } else {
      return {
        emoji: '📚',
        title: 'Keep learning!',
        message: 'Don\'t worry, practice makes perfect! Review the topics and try again.'
      };
    }
  };
  
  const feedback = getFeedback();
  
  return (
    <div className="w-full max-w-xl mx-auto rounded-xl bg-white p-8 shadow-lg animate-fade-in">
      <div className="text-center mb-6">
        <div className="text-5xl mb-4">{feedback.emoji}</div>
        <h2 className="text-3xl font-bold text-slate-800 mb-2">{feedback.title}</h2>
        <p className="text-slate-600">{feedback.message}</p>
      </div>
      
      <div className="mb-8">
        <div className="flex justify-between items-center mb-2">
          <span className="text-slate-700 font-medium">Score</span>
          <span className="text-2xl font-bold text-indigo-600">{percentage}%</span>
        </div>
        
        <div className="w-full bg-slate-200 h-3 rounded-full overflow-hidden">
          <div 
            className={`h-full transition-all duration-1000 ease-out ${
              percentage >= 70 ? 'bg-emerald-500' : 
              percentage >= 40 ? 'bg-amber-500' : 'bg-red-500'
            }`}
            style={{ width: `${percentage}%` }}
          ></div>
        </div>
      </div>
      
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="bg-slate-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-slate-800">{totalQuestions}</div>
          <div className="text-sm text-slate-500">Total Questions</div>
        </div>
        <div className="bg-emerald-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-emerald-600">{correctAnswers}</div>
          <div className="text-sm text-emerald-800">Correct</div>
        </div>
        <div className="bg-red-50 p-4 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-600">{wrongAnswers}</div>
          <div className="text-sm text-red-800">Incorrect</div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <Button onClick={onRestart} variant="secondary">
          Take Quiz Again
        </Button>
      </div>
    </div>
  );
};

export default Result;