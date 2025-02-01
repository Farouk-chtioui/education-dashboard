import { useState } from 'react';

const categories = [
  { id: 18, name: 'Computer Science' },
  { id: 9, name: 'General Knowledge' },
  { id: 15, name: 'Video Games' },
  { id: 23, name: 'History' },
  { id: 21, name: 'Sports' },
];

export default function QuizSetup({ onStart }) {
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Quiz Setup</h2>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Category
          </label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category)}
                className={`p-4 rounded-lg border-2 transition-all ${
                  selectedCategory.id === category.id
                    ? 'border-indigo-500 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-300'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={() => onStart(selectedCategory)}
          className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}
