import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

interface Resource {
  title: string;
  content: string;
}

interface Resources {
  [key: string]: Resource;
}

const resources: Resources = {
  storytelling: {
    title: 'Storytelling Basics',
    content: `
      ## The Art of Storytelling 📖

      ### Key Elements:
      1. **Characters**: Create relatable characters
      2. **Setting**: Build an immersive world
      3. **Plot**: Develop a clear beginning, middle, and end
      4. **Conflict**: Add challenges for characters to overcome
      5. **Resolution**: Provide a satisfying conclusion

      ### Tips:
      - Use descriptive language
      - Show, don't tell
      - Practice regularly
    `
  },
  criticalThinking: {
    title: 'Critical Thinking for Kids',
    content: `
      ## Developing Critical Thinking 🧠

      ### Key Skills:
      1. **Questioning**: Ask why and how
      2. **Analysis**: Break down information
      3. **Evaluation**: Assess ideas and arguments
      4. **Problem Solving**: Find creative solutions
      5. **Decision Making**: Weigh pros and cons

      ### Activities:
      - Solve puzzles and brain teasers
      - Discuss different perspectives
      - Play strategy games
    `
  },
  creativeWriting: {
    title: 'Creative Writing Tips',
    content: `
      ## Unleash Your Creativity ✍️

      ### Techniques:
      1. **Brainstorming**: Generate ideas freely
      2. **Free Writing**: Write without stopping
      3. **Character Development**: Create detailed profiles
      4. **World Building**: Design unique settings
      5. **Editing**: Refine and improve your work

      ### Exercises:
      - Write daily journal entries
      - Create short stories
      - Experiment with different genres
    `
  }
};

export function EducationalResources() {
  const [selectedResource, setSelectedResource] = useState<string | null>(null);

  return (
    <div className="bg-pink-100 rounded-xl p-6 border-2 border-pink-200">
      <h2 className="text-xl font-bold text-pink-800 mb-4 flex items-center gap-2">
        <BookOpen className="w-6 h-6" />
        Educational Resources
      </h2>
      <div className="text-pink-700 space-y-2">
        <p>Learn more about storytelling and critical thinking:</p>
        <ul className="list-disc ml-6">
          {Object.entries(resources).map(([key, resource]) => (
            <li key={key}>
              <button
                onClick={() => setSelectedResource(key)}
                className="hover:underline text-left"
              >
                {resource.title}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {selectedResource && (
        <div className="mt-4 p-4 bg-white rounded-lg">
          <h3 className="text-lg font-bold mb-2">
            {resources[selectedResource].title}
          </h3>
          <div className="prose">
            <ReactMarkdown>
              {resources[selectedResource].content}
            </ReactMarkdown>
          </div>
          <button
            onClick={() => setSelectedResource(null)}
            className="mt-4 px-4 py-2 bg-pink-100 hover:bg-pink-200 text-pink-800 rounded-lg"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
}
