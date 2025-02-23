import React from 'react';
import { Cpu, BrainCircuit, Cloud, Smartphone } from 'lucide-react';

export function TechnologyStack() {
  return (
    <div className="bg-gray-100 rounded-xl p-6 border-2 border-gray-200">
      <h2 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
        <Cpu className="w-6 h-6" />
        Educational Technology
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <BrainCircuit className="w-5 h-5 text-blue-500" />
            <h3 className="font-semibold">AI for Learning</h3>
          </div>
          <p className="text-sm text-gray-600">
            Using advanced AI to enhance children's learning experience and critical thinking skills.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Smartphone className="w-5 h-5 text-green-500" />
            <h3 className="font-semibold">Accessible Education</h3>
          </div>
          <p className="text-sm text-gray-600">
            Optimized for Apple devices to make learning accessible to everyone.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Cloud className="w-5 h-5 text-purple-500" />
            <h3 className="font-semibold">Open Learning</h3>
          </div>
          <p className="text-sm text-gray-600">
            Free educational resources available to all users.
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center gap-2 mb-2">
            <Cpu className="w-5 h-5 text-orange-500" />
            <h3 className="font-semibold">Non-Profit Mission</h3>
          </div>
          <p className="text-sm text-gray-600">
            Dedicated to providing free educational tools for children's development.
          </p>
        </div>
      </div>
    </div>
  );
}
