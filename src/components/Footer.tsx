import React from 'react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <div className="mt-8 pt-8 border-t border-gray-200">
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <a
          href="https://github.com/bniladridas/friendly-story-helper"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-gray-900 transition-colors"
        >
          <Github className="w-5 h-5" />
          <span>View on GitHub</span>
        </a>
      </div>
    </div>
  );
}
