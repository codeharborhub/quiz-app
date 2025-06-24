// import React from 'react';
import { Answer as AnswerType } from '../types';

interface AnswerProps {
  answer: AnswerType;
  isSelected: boolean;
  isCorrect: string | null;
  isDisabled: boolean;
  onClick: (id: string) => void;
}

const Answer = ({ 
  answer, 
  isSelected, 
  isCorrect, 
  isDisabled,
  onClick 
}: AnswerProps) => {
  // Determine the style based on the state
  const getStyles = () => {
    // Initial state
    let styles = "p-4 border rounded-lg transition-all duration-300 cursor-pointer hover:bg-slate-50";
    
    // If question hasn't been answered yet
    if (isCorrect === null) {
      styles += isSelected ? " border-indigo-600 bg-indigo-50" : " border-slate-200";
    } else {
      // If answer is correct
      if (answer.id === isCorrect) {
        styles += " border-emerald-500 bg-emerald-50 text-emerald-800";
      } 
      // If answer was selected but incorrect
      else if (isSelected) {
        styles += " border-red-500 bg-red-50 text-red-800";
      } 
      // Other unselected answers
      else {
        styles += " border-slate-200 opacity-70";
      }
      
      // If disabled (after answering)
      if (isDisabled) {
        styles += " cursor-default";
      }
    }
    
    return styles;
  };

  return (
    <div 
      className={getStyles()}
      onClick={() => !isDisabled && onClick(answer.id)}
    >
      <div className="flex items-start">
        <div className="flex-shrink-0 flex items-center justify-center w-6 h-6 border rounded-full mr-3 mt-0.5">
          {isSelected && isCorrect === null && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
          {isCorrect === answer.id && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-emerald-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
          {isSelected && isCorrect !== null && isCorrect !== answer.id && (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-red-600" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className="font-medium">{answer.text}</span>
      </div>
    </div>
  );
};

export default Answer;