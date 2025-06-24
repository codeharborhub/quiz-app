import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'What does HTML stand for?',
    answers: [
      { id: 'a1', text: 'Hyper Text Markup Language' },
      { id: 'a2', text: 'Hyper Transfer Markup Language' },
      { id: 'a3', text: 'Hyper Text Modern Language' },
      { id: 'a4', text: 'High Tech Markup Language' }
    ],
    correctAnswerId: 'a1'
  },
  {
    id: 'q2',
    text: 'Which of the following is NOT a JavaScript framework?',
    answers: [
      { id: 'a1', text: 'React' },
      { id: 'a2', text: 'Angular' },
      { id: 'a3', text: 'Django' },
      { id: 'a4', text: 'Vue' }
    ],
    correctAnswerId: 'a3'
  },
  {
    id: 'q3',
    text: 'What does CSS stand for?',
    answers: [
      { id: 'a1', text: 'Creative Style Sheets' },
      { id: 'a2', text: 'Cascading Style Sheets' },
      { id: 'a3', text: 'Computer Style Sheets' },
      { id: 'a4', text: 'Colorful Style Sheets' }
    ],
    correctAnswerId: 'a2'
  },
  {
    id: 'q4',
    text: 'Which protocol is used to load webpages?',
    answers: [
      { id: 'a1', text: 'FTP' },
      { id: 'a2', text: 'SMTP' },
      { id: 'a3', text: 'HTTP' },
      { id: 'a4', text: 'SSH' }
    ],
    correctAnswerId: 'a3'
  },
  {
    id: 'q5',
    text: 'Which of these is a CSS preprocessor?',
    answers: [
      { id: 'a1', text: 'jQuery' },
      { id: 'a2', text: 'SASS' },
      { id: 'a3', text: 'TypeScript' },
      { id: 'a4', text: 'Express' }
    ],
    correctAnswerId: 'a2'
  },
  {
    id: 'q6',
    text: 'What does API stand for?',
    answers: [
      { id: 'a1', text: 'Application Programming Interface' },
      { id: 'a2', text: 'Application Process Integration' },
      { id: 'a3', text: 'Automated Programming Interface' },
      { id: 'a4', text: 'Application Protocol Interface' }
    ],
    correctAnswerId: 'a1'
  },
  {
    id: 'q7',
    text: 'Which of these is a version control system?',
    answers: [
      { id: 'a1', text: 'Docker' },
      { id: 'a2', text: 'Jenkins' },
      { id: 'a3', text: 'Git' },
      { id: 'a4', text: 'Kubernetes' }
    ],
    correctAnswerId: 'a3'
  }
];