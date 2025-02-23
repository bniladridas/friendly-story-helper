import React from 'react';

interface ModeToggleProps {
  isProMode: boolean;
  toggleMode: () => void;
}

export function ModeToggle({ isProMode, toggleMode }: ModeToggleProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-white/90 backdrop-blur-lg rounded-full p-2 shadow-lg border border-gray-200">
      <button
        onClick={toggleMode}
        className="flex items-center gap-2 px-4 py-2 rounded-full"
      >
        <span className="text-sm font-medium text-gray-700">
          {isProMode ? 'Pro Mode' : 'Base Mode'}
        </span>
        <div className={`w-12 h-6 rounded-full p-1 transition-colors ${isProMode ? 'bg-purple-500' : 'bg-gray-200'}`}>
          <div className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform ${isProMode ? 'translate-x-6' : 'translate-x-0'}`}></div>
        </div>
      </button>
    </div>
  );
}
