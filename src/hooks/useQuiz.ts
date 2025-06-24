import { useState, useCallback } from 'react';
import { questions } from '../data/questions';
import { QuizState, QuizResults } from '../types';

export const useQuiz = () => {
  const [quizState, setQuizState] = useState<QuizState>({
    status: 'idle',
    currentQuestionIndex: 0,
    questions: questions,
    selectedAnswerId: null,
    userAnswers: {},
    answered: false,
  });

  const startQuiz = useCallback(() => {
    setQuizState({
      status: 'active',
      currentQuestionIndex: 0,
      questions: questions,
      selectedAnswerId: null,
      userAnswers: {},
      answered: false,
    });
  }, []);

  const selectAnswer = useCallback((answerId: string) => {
    setQuizState((prevState) => {
      if (prevState.answered) return prevState;
      
      const currentQuestion = prevState.questions[prevState.currentQuestionIndex];
      
      return {
        ...prevState,
        selectedAnswerId: answerId,
        userAnswers: {
          ...prevState.userAnswers,
          [currentQuestion.id]: answerId,
        },
        answered: true,
      };
    });
  }, []);

  const nextQuestion = useCallback(() => {
    setQuizState((prevState) => {
      const nextIndex = prevState.currentQuestionIndex + 1;
      
      if (nextIndex >= prevState.questions.length) {
        return {
          ...prevState,
          status: 'completed',
        };
      }
      
      return {
        ...prevState,
        currentQuestionIndex: nextIndex,
        selectedAnswerId: null,
        answered: false,
      };
    });
  }, []);

  const restartQuiz = useCallback(() => {
    setQuizState({
      status: 'active',
      currentQuestionIndex: 0,
      questions: questions,
      selectedAnswerId: null,
      userAnswers: {},
      answered: false,
    });
  }, []);

  const calculateResults = useCallback((): QuizResults => {
    const totalQuestions = quizState.questions.length;
    let correctAnswers = 0;
    
    Object.entries(quizState.userAnswers).forEach(([questionId, answerId]) => {
      const question = quizState.questions.find(q => q.id === questionId);
      if (question && question.correctAnswerId === answerId) {
        correctAnswers += 1;
      }
    });
    
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);
    
    return {
      totalQuestions,
      correctAnswers,
      wrongAnswers,
      percentage,
    };
  }, [quizState.questions, quizState.userAnswers]);

  return {
    quizState,
    startQuiz,
    selectAnswer,
    nextQuestion,
    restartQuiz,
    calculateResults,
  };
};