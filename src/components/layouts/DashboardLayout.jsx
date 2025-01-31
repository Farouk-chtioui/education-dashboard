import Sidebar from '../Sidebar';
import Header from '../Header';
import StatsOverview from '../StatsOverview';
import ClassProgress from '../ClassProgress';
import ActivityCalendar from '../ActivityCalendar';
import StudentsByDate from '../StudentsByDate';
import ActivityChart from '../ActivityChart';
import TopScores from '../TopScores';
import { useState } from 'react';

const Dashboard = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <Sidebar />
      <main className="flex-1 overflow-y-auto">
        <div className="p-6">
          <Header />
          <StatsOverview />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {/* Class Progress - First column */}
            <div className="h-[600px] lg:h-[700px] bg-indigo-50 rounded-xl border border-indigo-100">
              <ClassProgress />
            </div>

            {/* Middle column - Calendar and Students */}
            <div className="flex flex-col lg:grid lg:grid-rows-2 gap-6">
              <ActivityCalendar 
                onDateSelect={setSelectedDate} 
                selectedDate={selectedDate}
              />
              <StudentsByDate date={selectedDate} />
            </div>

            {/* Right column - Activity Chart and Top Scores */}
            <div className="flex flex-col lg:grid lg:grid-rows-2 gap-6">
              <ActivityChart />
              <TopScores />
            </div>
          </div>

          {/* Bottom Sections */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl shadow-sm h-[300px]">
              {/* Bottom left content */}
            </div>
            <div className="bg-white rounded-2xl shadow-sm h-[300px]">
              {/* Bottom right content */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;