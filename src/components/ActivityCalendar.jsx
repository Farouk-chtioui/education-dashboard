import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const ActivityCalendar = ({ onDateSelect, selectedDate }) => {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Calendrier d'activité</h3>
        <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-all rounded-lg text-sm flex items-center gap-2">
          2024 <ChevronDown size={16} />
        </button>
      </div>
      <div className="bg-white p-4"> {/* Removed any fixed heights or overflow-hidden classes */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-gray-800 text-md">Février, 2024</p>
          <div className="flex gap-3">
            <button className="p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200">
              <ChevronLeft size={20} className="text-indigo-600" />
            </button>
            <button className="p-2 rounded-lg bg-indigo-100 hover:bg-indigo-200">
              <ChevronRight size={20} className="text-indigo-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-gray-700 text-center font-medium">
          {days.map(day => (
            <div key={day} className="p-2">{day}</div>
          ))}
          {Array(35).fill(null).map((_, i) => {
            const date = new Date(2024, 1, i + 1);
            const isSelected = selectedDate && 
              date.getDate() === selectedDate.getDate() &&
              date.getMonth() === selectedDate.getMonth();
            
            return (
              <div 
                key={i} 
                onClick={() => onDateSelect(date)}
                className={`p-2 rounded-lg cursor-pointer transition-colors
                  ${isSelected 
                    ? 'bg-indigo-600 text-white' 
                    : 'hover:bg-indigo-50'
                  }`}
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