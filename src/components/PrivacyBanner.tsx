import React from 'react';
import { Shield, Info } from 'lucide-react';

export function PrivacyBanner() {
  return (
    <div className="bg-indigo-100 rounded-2xl p-6 border-2 border-indigo-200 mb-6">
      <h2 className="flex items-center text-xl font-semibold text-indigo-800 mb-3">
        <Shield className="w-6 h-6 mr-2" />
        Privacy & Safety
      </h2>
      <div className="text-indigo-700 space-y-2">
        <div className="flex items-start">
          <Info className="w-5 h-5 mr-2 mt-1 flex-shrink-0" />
          <p>
            This is a safe space! We don't collect any personal information,
            and everything you write stays private. Adult supervision is
            required for children under 13.
          </p>
        </div>
      </div>
    </div>
  );
}