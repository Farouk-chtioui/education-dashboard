import Sidebar from '../Sidebar';
import Header from '../Header';
import StatsOverview from '../StatsOverview';
import ClassProgress from '../ClassProgress';
import ActivityCalendar from '../ActivityCalendar';
import ActivityChart from '../ActivityChart';
import TopScores from '../TopScores';
import { useState } from 'react';
import Students from '../Students';

const Dashboard = () => {
  const [selectedDates, setSelectedDates] = useState([new Date()]); // Initialize with today's date

  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
  };

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-3 sm:p-4 lg:p-5"> {/* Reduced padding */}
          <Header />
          <StatsOverview />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5 mt-4 sm:mt-5"> {/* Reduced gap and margin */}
            {/* Class Progress - First column */}
            <div className="h-[500px] lg:h-[600px] bg-indigo-50 rounded-xl border border-indigo-100"> {/* Reduced height */}
              <ClassProgress />
            </div>

            {/* Middle column - Calendar and Students */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5 z-0"> {/* Added z-0 and removed any bg color */}
              <ActivityCalendar 
                onDateSelect={handleDateSelect} 
                selectedDates={selectedDates}
              />
              <Students />
            </div>

            {/* Right column - Activity Chart and Top Scores */}
            <div className="flex flex-col gap-3 sm:gap-4 lg:gap-5"> {/* Adjusted gap */}
              <ActivityChart />
              <TopScores />
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="mt-3 sm:mt-4 lg:mt-5 grid grid-cols-1 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5"> {/* Adjusted margins and gap */}
            <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-sm h-[250px]"> {/* Reduced height */}
              {/* Bottom left content */}
            </div>
            <div className="bg-white rounded-2xl shadow-sm h-[250px]"> {/* Reduced height */}
              {/* Bottom right content */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;