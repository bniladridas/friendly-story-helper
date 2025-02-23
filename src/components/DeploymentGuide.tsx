import React from 'react';

export function DeploymentGuide() {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Vercel Deployment</h2>
        </div>
        <div className="prose">
          <div className="flex space-x-4 mb-4">
            <div className="flex-1 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700">Step 1: Connect</h3>
              <p className="text-sm text-blue-600">Link your GitHub repository</p>
            </div>
            <div className="flex-1 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700">Step 2: Configure</h3>
              <p className="text-sm text-blue-600">Set up build settings</p>
            </div>
            <div className="flex-1 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold text-blue-700">Step 3: Deploy</h3>
              <p className="text-sm text-blue-600">Launch with one click</p>
            </div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="h-2 bg-blue-200 rounded-full overflow-hidden">
              <div className="h-full bg-blue-500 animate-progress" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">GitHub Pages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700">Repository Setup</h3>
            <p className="text-sm text-green-600">Enable Pages in settings</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700">Branch Selection</h3>
            <p className="text-sm text-green-600">Choose main branch</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700">Custom Domain</h3>
            <p className="text-sm text-green-600">Add your domain</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <h3 className="font-semibold text-green-700">SSL Security</h3>
            <p className="text-sm text-green-600">Automatic HTTPS</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Pipeline Visualization</h2>
        </div>
        <div className="space-y-4">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">
              1
            </div>
            <div className="flex-1 bg-blue-50 p-4 rounded-lg">
              <h3 className="font-medium text-blue-700">Code Commit</h3>
              <p className="text-sm text-blue-600">Push changes to GitHub</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white">
              2
            </div>
            <div className="flex-1 bg-green-50 p-4 rounded-lg">
              <h3 className="font-medium text-green-700">Build Process</h3>
              <p className="text-sm text-green-600">Run tests and build artifacts</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
              3
            </div>
            <div className="flex-1 bg-purple-50 p-4 rounded-lg">
              <h3 className="font-medium text-purple-700">Deployment</h3>
              <p className="text-sm text-purple-600">Deploy to production</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800">System Programming</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-700">Cross-Platform</h3>
            <p className="text-sm text-indigo-600">Compile for multiple OS</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-700">Static Analysis</h3>
            <p className="text-sm text-indigo-600">Code quality checks</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-700">Performance</h3>
            <p className="text-sm text-indigo-600">Benchmarking tools</p>
          </div>
          <div className="bg-indigo-50 p-4 rounded-lg">
            <h3 className="font-semibold text-indigo-700">Memory</h3>
            <p className="text-sm text-indigo-600">Leak detection</p>
          </div>
        </div>
      </div>
    </div>
  );
}
