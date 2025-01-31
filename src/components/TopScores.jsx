import { ChevronDown } from 'lucide-react';

const TopScores = () => (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-800">Top Scores</h3>
        <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-colors duration-200 rounded-xl text-sm flex items-center gap-2 text-gray-700">
          2018 - 2019 <ChevronDown size={16} />
        </button>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {[
          { name: 'Jane Cooper', school: 'St. James School', score: '99.99%', color: 'bg-emerald-400' },
          { name: 'Eleanor Pena', school: 'Polar School', score: '99.76%', color: 'bg-indigo-500' },
          { name: 'Devon Lane', school: 'Polar School', score: '99.50%', color: 'bg-orange-400' },
        ].map((student, index) => (
          <div 
            key={index} 
            className={`${student.color} p-6 rounded-xl text-white transform hover:scale-105 transition-all duration-200`}
          >
            <div className="mb-3">
              <img src="/api/placeholder/48/48" alt={student.name} className="w-12 h-12 rounded-xl" />
            </div>
            <h4 className="text-lg font-semibold">{student.name}</h4>
            <p className="text-sm opacity-90">{student.school}</p>
            <p className="text-2xl font-bold mt-3">{student.score}</p>
          </div>
        ))}
      </div>
    </div>
  );

export default TopScores;
