import React from 'react';

const prayers = [
  {
    title: "Prayer for Wisdom",
    content: "May we be granted the wisdom to understand, the patience to learn, and the courage to grow in knowledge."
  },
  {
    title: "Prayer for Focus",
    content: "Help us focus our minds and hearts on the tasks before us, that we may learn with clarity and purpose."
  },
  {
    title: "Prayer for Growth",
    content: "Guide us in our educational journey, helping us grow not just in knowledge but in character and understanding."
  },
  {
    title: "Prayer for Inspiration",
    content: "Inspire us to seek knowledge, to question thoughtfully, and to apply what we learn for the greater good."
  }
];

export function PrayerSection() {
  return (
    <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-100">
      <h2 className="text-xl font-bold text-blue-800 mb-4">
        Motivational Prayers for Learning
      </h2>
      <div className="space-y-4">
        {prayers.map((prayer, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
            <h3 className="font-semibold text-blue-700 mb-2">
              {prayer.title}
            </h3>
            <p className="text-blue-600">
              {prayer.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
