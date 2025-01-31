import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const ActivityCalendar = ({ onDateSelect }) => {
  const [selectedDates, setSelectedDates] = useState([]);
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const toggleDateSelection = (date) => {
    setSelectedDates(prev => {
      const exists = prev.some(d => d.getTime() === date.getTime());
      if (exists) {
        return prev.filter(d => d.getTime() !== date.getTime());
      } else {
        return [...prev, date];
      }
    });
    onDateSelect(date);
  };

  return (
    <div className="h-[338px] p-6 bg-white rounded-xl border border-gray-300 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Calendrier d'activité</h3>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-sm flex items-center gap-2">
          2024 <ChevronDown size={16} />
        </button>
      </div>
      <div className="h-[calc(100%-48px)]">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-gray-800 text-md">Février, 2024</p>
          <div className="flex gap-3">
            <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-gray-700 text-center font-medium">
          {days.map(day => (
            <div key={day} className="p-2 text-indigo-700 font-semibold">{day}</div>
          ))}
          {Array(35).fill(null).map((_, i) => {
            const date = new Date(2024, 1, i + 1);
            const isSelected = selectedDates.some(d => d.getTime() === date.getTime());
            
            return (
              <div 
                key={i} 
                onClick={() => toggleDateSelection(date)}
                className={`p-2 rounded-lg cursor-pointer transition-colors text-lg
                  ${isSelected ? 'bg-green-500 text-white ring-2 ring-green-700' : 'hover:bg-gray-100'}`}
              >
                {i + 1}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
