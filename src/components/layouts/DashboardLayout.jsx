import { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import StatsOverview from '../StatsOverview';
import ClassProgress from '../ClassProgress';
import ActivityCalendar from '../ActivityCalendar';
import ActivityChart from '../ActivityChart';
import TopScores from '../TopScores';
import Students from '../Students';
import { Outlet, useLocation } from 'react-router-dom';

const DashboardLayout = () => {
  const [selectedDates, setSelectedDates] = useState([new Date()]);
  const location = useLocation();

  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
  };

  const renderStatsContent = () => (
    <div className="bg-gray-100 p-5 rounded-2xl border-4 border-purple-600 shadow-xl">
      <div className="bg-white p-4 rounded-xl">
        <StatsOverview />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-4 sm:mt-5">
        <div className="h-[500px] lg:h-[600px] bg-white rounded-xl border border-purple-300 shadow-lg">
          <ClassProgress />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 z-0">
          <ActivityCalendar 
            onDateSelect={handleDateSelect} 
            selectedDates={selectedDates}
            className="bg-white rounded-xl border border-purple-300 shadow-lg"
          />
          <Students />
        </div>
        <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5">
          <ActivityChart className="bg-white rounded-xl border border-purple-300 shadow-lg" />
          <TopScores className="bg-white rounded-xl border border-purple-300 shadow-lg" />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-3 sm:p-4 lg:p-5">
          <Header className="bg-white p-4 rounded-xl" />
          {location.pathname === '/stats' ? renderStatsContent() : <Outlet />}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
