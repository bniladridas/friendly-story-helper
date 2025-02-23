import React, { useState, useEffect, useRef } from 'react';
import { Brain, Loader2, AlertTriangle, Info, Shield, Users, Save, History, Mic, Download } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { analyzeTruthfulness } from './lib/gemini';
import { PrivacyBanner } from './components/PrivacyBanner';
import { EducationalResources } from './components/EducationalResources';
import { TechnologyStack } from './components/TechnologyStack';
import { PrayerSection } from './components/PrayerSection';
import { FocusMode } from './components/FocusMode';
import { Footer } from './components/Footer';
import { ChatBubble } from './components/ChatBubble';
import { ModeToggle } from './components/ModeToggle';
import { DeploymentGuide } from './components/DeploymentGuide';

interface Story {
  id: number;
  story: string;
  analysis: string;
  date: string;
}

declare global {
  interface Window {
    SpeechRecognition: any;
    webkitSpeechRecognition: any;
  }
}

function App() {
  const [statement, setStatement] = useState('');
  const [analysis, setAnalysis] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [charCount, setCharCount] = useState(0);
  const [savedStories, setSavedStories] = useState<Story[]>([]);
  const [showHistory, setShowHistory] = useState(false);
  const [voiceInput, setVoiceInput] = useState(false);
  const [focusMode, setFocusMode] = useState(false);
  const [isProMode, setIsProMode] = useState(false);
  const scrollPosition = useRef(0);

  const toggleMode = () => {
    setIsProMode(!isProMode);
  };

  useEffect(() => {
    if (voiceInput) {
      startVoiceInput();
    }
  }, [voiceInput]);

  const startVoiceInput = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-US';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event: any) => {
      const transcript = event.results[0][0].transcript;
      setStatement(transcript);
      setVoiceInput(false);
    };

    recognition.start();
  };

  const handleAnalyze = async () => {
    if (!statement.trim()) {
      setError('**Oops!** Please write something in the box above ');
      return;
    }

    if (statement.length > 1000) {
      setError('**Too Long!** Please keep your story under 1000 characters');
      return;
    }

    try {
      setIsLoading(true);
      setError('');
      const result = await analyzeTruthfulness(statement);
      setAnalysis(result);
      saveStory(statement, result);
    } catch (err) {
      setError('**Oops!** Something went wrong. Let\'s try again! ');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const saveStory = (story: string, analysis: string) => {
    const newStory: Story = {
      id: Date.now(),
      story,
      analysis,
      date: new Date().toLocaleString()
    };
    setSavedStories([newStory, ...savedStories]);
  };

  const exportStory = (format: string) => {
    const content = `Story:\n${statement}\n\nAnalysis:\n${analysis}`;
    if (format === 'pdf') {
      // PDF export logic
    } else {
      const blob = new Blob([content], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'story-analysis.txt';
      link.click();
    }
  };

  if (focusMode) {
    return (
      <FocusMode
        statement={statement}
        setStatement={setStatement}
        charCount={charCount}
        onClose={() => {
          setFocusMode(false);
          window.scrollTo(0, scrollPosition.current);
        }}
        scrollPosition={scrollPosition.current}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-purple-900 p-6">
      <div className="max-w-3xl mx-auto">
        <div className="macos-blur bg-white/90 rounded-3xl p-8 shadow-xl border-4 border-white/50">
          <div className="flex items-center justify-center mb-8">
            <Brain className="w-12 h-12 text-purple-600 mr-4" />
            <h1 className="text-4xl font-bold text-purple-600 tracking-tight">Friendly Story Helper</h1>
          </div>

          <PrivacyBanner />
          <TechnologyStack />
          <PrayerSection />

          <div className="mb-8 space-y-4">
            <div className="bg-yellow-100 rounded-2xl p-6 border-2 border-yellow-200">
              <h2 className="flex items-center text-xl font-semibold text-yellow-800 mb-3">
                <Shield className="w-6 h-6 mr-2" />
                For Parents and Guardians
              </h2>
              <div className="text-yellow-700 space-y-2">
                <p>This tool is designed for:</p>
                <ul className="list-disc ml-6">
                  <li>Children aged 5+ with adult supervision</li>
                  <li>Teachers in classroom settings</li>
                  <li>Parents helping with homework</li>
                  <li>Educational professionals</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-100 rounded-2xl p-6 border-2 border-blue-200">
              <h2 className="flex items-center text-xl font-semibold text-blue-800 mb-3">
                <Users className="w-6 h-6 mr-2" />
                How to Use
              </h2>
              <div className="text-blue-700">
                <p>Write any story or statement, and our friendly helper will check if it makes sense! Perfect for:</p>
                <ul className="list-disc ml-6 mt-2">
                  <li>Checking homework answers</li>
                  <li>Learning about facts vs imagination</li>
                  <li>Understanding story structure</li>
                  <li>Developing critical thinking skills</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <label htmlFor="statement" className="block text-purple-700 text-lg font-medium mb-2">
                Write Your Story Here! 
              </label>
              <textarea
                id="statement"
                value={statement}
                onChange={(e) => {
                  setStatement(e.target.value);
                  setCharCount(e.target.value.length);
                }}
                onFocus={() => {
                  scrollPosition.current = window.scrollY;
                  setFocusMode(true);
                }}
                placeholder="Once upon a time..."
                className="input-macos w-full h-32 px-4 py-3 rounded-xl bg-white border-2 border-purple-200 text-purple-700 placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-300 transition font-serif text-lg"
                aria-label="Story input"
                maxLength={1000}
              />
              <div className="text-sm text-purple-500 mt-1">
                {charCount}/1000 characters
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleAnalyze}
                disabled={isLoading}
                className="btn-macos flex-1 py-4 px-6 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold text-lg transition flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Analyze story"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                    Looking at your story...
                  </>
                ) : (
                  'Check My Story! '
                )}
              </button>

              {isProMode && (
                <button
                  onClick={() => setVoiceInput(true)}
                  className="btn-macos p-4 rounded-xl bg-purple-100 hover:bg-purple-200 text-purple-600 transition"
                  aria-label="Voice input"
                >
                  <Mic className="w-6 h-6" />
                </button>
              )}
            </div>

            {error && (
              <div className="bg-red-100 rounded-xl p-4 border-2 border-red-200">
                <ReactMarkdown>{error}</ReactMarkdown>
              </div>
            )}

            {analysis && (
              <div className="space-y-4">
                <ChatBubble message={analysis} />
                {isProMode && (
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => exportStory('text')}
                      className="btn-macos px-4 py-2 rounded-lg bg-green-200 hover:bg-green-300 text-green-800 transition flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Export as Text
                    </button>
                    <button
                      onClick={() => exportStory('pdf')}
                      className="btn-macos px-4 py-2 rounded-lg bg-green-200 hover:bg-green-300 text-green-800 transition flex items-center gap-2"
                    >
                      <Download className="w-5 h-5" />
                      Export as PDF
                    </button>
                  </div>
                )}
              </div>
            )}

            <div className="bg-indigo-100 rounded-xl p-6 border-2 border-indigo-200">
              <button
                onClick={() => setShowHistory(!showHistory)}
                className="btn-macos w-full text-left flex items-center justify-between"
              >
                <h2 className="text-xl font-bold text-indigo-800">
                  Story History
                </h2>
                <History className="w-6 h-6 text-indigo-600" />
              </button>

              {showHistory && (
                <div className="mt-4 space-y-4">
                  {savedStories.length > 0 ? (
                    savedStories.map((story) => (
                      <div key={story.id} className="bg-white rounded-lg p-4">
                        <div className="text-sm text-gray-500 mb-2">{story.date}</div>
                        <div className="font-medium">{story.story}</div>
                      </div>
                    ))
                  ) : (
                    <div className="text-gray-500">No saved stories yet</div>
                  )}
                </div>
              )}
            </div>

            {isProMode && (
              <>
                <EducationalResources />
                <DeploymentGuide />
              </>
            )}
          </div>

          <Footer />
        </div>
      </div>

      <ModeToggle isProMode={isProMode} toggleMode={toggleMode} />
    </div>
  );
}

export default App;
