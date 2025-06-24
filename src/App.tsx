// import React from 'react';
import Quiz from './components/Quiz';

function App() {
  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-8">
          <div className="inline-block mb-2 bg-white p-2 rounded-lg shadow-sm">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 text-indigo-600 mr-2"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 16v-4"></path>
                <path d="M12 8h.01"></path>
              </svg>
              <h1 className="text-2xl font-bold text-slate-800">
                CodeHarborHub <span className="text-indigo-600">Quiz</span>
              </h1>
            </div>
          </div>
        </header>
        
        <main className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <Quiz />
        </main>
        
        <footer className="mt-8 text-center text-slate-500 text-sm">
          <p>
            © 2025 CodeHarborHub Quiz — Interactive Web Application
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;