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

          {/* Main Content Grid - Aligned with StatsOverview's 3 columns */}
          <div className="grid grid-cols-3 gap-6 mt-6 px-6">
            {/* Class Progress - First column */}
            <div className="bg-white rounded-2xl shadow-sm h-[700px] p-6">
              <ClassProgress />
            </div>

            {/* Activity Calendar and Students - Second column */}
            <div className="flex flex-col gap-6">
              <div className="bg-white rounded-2xl shadow-sm">
                <ActivityCalendar 
                  onDateSelect={setSelectedDate} 
                  selectedDate={selectedDate} 
                />
              </div>
              <div className="bg-white rounded-2xl shadow-sm">
                <StudentsByDate date={selectedDate} />
              </div>
            </div>

            {/* Right Section - Third column */}
            <div className="flex flex-col gap-6">
              <div className="rounded-2xl shadow-sm">
                <ActivityChart />
              </div>
              <div className="rounded-2xl shadow-sm">
                <TopScores />
              </div>
            </div>
          </div>

          {/* Bottom Sections - Also using 3 columns */}
          <div className="mt-6 grid grid-cols-3 gap-6 px-6">
            <div className="col-span-2 bg-white rounded-2xl shadow-sm h-[300px]">
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