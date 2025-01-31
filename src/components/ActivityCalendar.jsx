import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';

const ActivityCalendar = ({ onDateSelect, selectedDates = [] }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentMonth, setCurrentMonth] = useState(currentDate.getMonth());
  const [currentYear, setCurrentYear] = useState(currentDate.getFullYear());

  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const today = new Date();

  const getDaysInMonth = (month, year) => {
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysArray = [];
    
    // Add padding for first week
    for (let i = 0; i < firstDay.getDay(); i++) {
      daysArray.push(null);
    }
    
    // Add actual days
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysArray.push(new Date(year, month, i));
    }
    
    return daysArray;
  };

  const monthDays = getDaysInMonth(currentMonth, currentYear);

  const changeMonth = (increment) => {
    setCurrentMonth(prev => {
      const newMonth = prev + increment;
      if (newMonth > 11) {
        setCurrentYear(y => y + 1);
        return 0;
      }
      if (newMonth < 0) {
        setCurrentYear(y => y - 1);
        return 11;
      }
      return newMonth;
    });
  };

  const isToday = (date) => {
    return date && 
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear();
  };

  const toggleDateSelection = (date) => {
    const newDates = selectedDates.some(d => d.getTime() === date.getTime())
      ? selectedDates.filter(d => d.getTime() !== date.getTime())
      : [...selectedDates, date].sort((a, b) => a - b);
    
    onDateSelect(newDates); // Pass the entire array back to parent
  };

  // Mock user activity data - replace with real data
  const userActivities = {
    // timestamp: activity count
    '2024-02-15': 5,
    '2024-02-14': 3,
    '2024-02-10': 8,
    // Add more dates...
  };

  const getActivityLevel = (date) => {
    const dateStr = date.toISOString().split('T')[0];
    const activity = userActivities[dateStr] || 0;
    if (activity > 5) return 'high';
    if (activity > 0) return 'medium';
    return 'none';
  };

  return (
    <div className="h-[338px] p-6 bg-white rounded-xl border border-gray-300 shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-800">Calendrier d'activité</h3>
        <button className="px-4 py-2 bg-gray-100 hover:bg-gray-200 transition-all rounded-lg text-sm flex items-center gap-2">
          {currentYear} <ChevronDown size={16} />
        </button>
      </div>
      <div className="h-[calc(100%-48px)]">
        <div className="flex justify-between items-center mb-4">
          <p className="font-semibold text-gray-800 text-md">
            {new Date(currentYear, currentMonth).toLocaleString('fr-FR', { month: 'long' })}, {currentYear}
          </p>
          <div className="flex gap-3">
            <button onClick={() => changeMonth(-1)} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
              <ChevronLeft size={20} className="text-gray-600" />
            </button>
            <button onClick={() => changeMonth(1)} className="p-2 rounded-lg bg-gray-200 hover:bg-gray-300">
              <ChevronRight size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="grid grid-cols-7 gap-2 text-gray-700 text-center font-medium relative">
          {days.map(day => (
            <div key={day} className="p-2 text-indigo-700 font-semibold">{day}</div>
          ))}
          {monthDays.map((date, i) => {
            if (!date) return <div key={`empty-${i}`} className="p-2" />;
            
            const isSelected = selectedDates.some(d => d.getTime() === date.getTime());
            const isStart = selectedDates.length && selectedDates[0]?.getTime() === date.getTime();
            const isEnd = selectedDates.length && selectedDates[selectedDates.length - 1]?.getTime() === date.getTime();
            const isInRange = selectedDates.length > 1 &&
              date.getTime() > selectedDates[0].getTime() && 
              date.getTime() < selectedDates[selectedDates.length - 1].getTime();
            
            const activityLevel = getActivityLevel(date);
            
            return (
              <div 
                key={date.getTime()} 
                onClick={() => toggleDateSelection(date)}
                className={`relative p-2 rounded-lg cursor-pointer transition-colors text-lg
                  ${isSelected ? 'bg-green-500 text-white' : ''}
                  ${isInRange ? 'bg-green-300 text-white' : ''}
                  ${isToday(date) ? 'ring-2 ring-amber-400 bg-amber-50' : 'hover:bg-gray-100'}
                  ${activityLevel === 'high' ? 'bg-green-500 text-white' : ''}
                  ${activityLevel === 'medium' ? 'bg-green-200' : ''}
                  hover:bg-opacity-75`}
              >
                <span className="relative z-10">{date.getDate()}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ActivityCalendar;
