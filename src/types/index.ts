export interface Answer {
  id: string;
  text: string;
}

export interface Question {
  id: string;
  text: string;
  answers: Answer[];
  correctAnswerId: string;
}

export interface QuizState {
  status: 'idle' | 'active' | 'completed';
  currentQuestionIndex: number;
  questions: Question[];
  selectedAnswerId: string | null;
  userAnswers: Record<string, string>;
  answered: boolean;
}

export interface QuizResults {
  totalQuestions: number;
  correctAnswers: number;
  wrongAnswers: number;
  percentage: number;
}