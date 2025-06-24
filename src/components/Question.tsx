// import React from 'react';
import { Question as QuestionType } from '../types';
import Answer from './Answer';
import Button from './Button';

interface QuestionProps {
  question: QuestionType;
  selectedAnswerId: string | null;
  answered: boolean;
  onSelectAnswer: (answerId: string) => void;
  onNextQuestion: () => void;
  questionNumber: number;
  totalQuestions: number;
}

const Question = ({
  question,
  selectedAnswerId,
  answered,
  onSelectAnswer,
  onNextQuestion,
  questionNumber,
  totalQuestions
}: QuestionProps) => {
  // Calculate progress percentage
  const progressPercentage = ((questionNumber) / totalQuestions) * 100;
  
  return (
    <div className="w-full max-w-3xl mx-auto animate-fade-in">
      {/* Progress bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full mb-6 overflow-hidden">
        <div 
          className="bg-indigo-600 h-full transition-all duration-500 ease-out" 
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      
      {/* Question number */}
      <div className="flex justify-between items-center mb-4">
        <span className="text-sm font-semibold text-slate-500">
          Question {questionNumber} of {totalQuestions}
        </span>
        <span className="text-sm font-medium bg-indigo-100 text-indigo-800 py-1 px-2 rounded-full">
          {Math.round(progressPercentage)}%
        </span>
      </div>
      
      {/* Question text */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-800 mb-1">{question.text}</h2>
      </div>
      
      {/* Answers */}
      <div className="space-y-3 mb-8">
        {question.answers.map((answer) => (
          <Answer
            key={answer.id}
            answer={answer}
            isSelected={selectedAnswerId === answer.id}
            isCorrect={answered ? (answer.id === question.correctAnswerId ? answer.id : null) : null}
            isDisabled={answered}
            onClick={onSelectAnswer}
          />
        ))}
      </div>
      
      {/* Action button */}
      <div className="flex justify-end">
        {answered ? (
          <Button onClick={onNextQuestion}>
            {questionNumber === totalQuestions ? 'Show Results' : 'Next Question'}
          </Button>
        ) : (
          <Button onClick={() => {}} disabled={true}>
            Select an answer
          </Button>
        )}
      </div>
    </div>
  );
};

export default Question;