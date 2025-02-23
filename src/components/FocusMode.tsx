import React, { useEffect } from 'react';

interface FocusModeProps {
  statement: string;
  setStatement: (value: string) => void;
  charCount: number;
  onClose: () => void;
  scrollPosition: number;
}

export function FocusMode({ statement, setStatement, charCount, onClose, scrollPosition }: FocusModeProps) {
  useEffect(() => {
    return () => {
      window.scrollTo(0, scrollPosition);
    };
  }, [scrollPosition]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 z-50 p-8">
      <div className="max-w-3xl mx-auto h-full flex flex-col">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-white">Focus Mode</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-gray-100/10 transition text-white"
            aria-label="Close focus mode"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <textarea
          value={statement}
          onChange={(e) => setStatement(e.target.value)}
          placeholder="Write your story here..."
          className="flex-1 w-full p-4 text-lg bg-white/10 backdrop-blur-lg rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-300 text-white"
          autoFocus
        />
        <div className="mt-4 text-sm text-gray-300">
          {charCount}/1000 characters
        </div>
      </div>
    </div>
  );
}
