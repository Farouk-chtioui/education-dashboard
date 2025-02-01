import { useState, useCallback, useEffect, memo } from 'react';
import { Expand, ChevronDown } from 'lucide-react';
import StatsOverview from './StatsOverview';
import ClassProgress from './ClassProgress';
import ActivityCalendar from './ActivityCalendar';
import ActivityChart from './ActivityChart';
import TopScores from './TopScores';
import Students from './Students';
import PageContainer from '../PageContainer';

const Header = memo(({ title = "Statistiques" }) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullScreen = useCallback(async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen();
        setIsFullscreen(true);
      } else {
        await document.exitFullscreen();
        setIsFullscreen(false);
      }
    } catch (err) {
      console.error('Fullscreen error:', err);
    }
  }, []);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 sm:px-6 py-4 gap-4 sm:gap-0">
      <h1 className="text-2xl sm:text-3xl font-semibold text-gray-800">{title}</h1>
      <div className="flex items-center gap-3 sm:gap-4">
        <button className="px-4 py-2 bg-gray-50 hover:bg-gray-100 transition-all duration-200 rounded-xl flex items-center gap-2 text-gray-700">
          Niveau Scolaire <ChevronDown size={18} />
        </button>
        <button 
          onClick={toggleFullScreen}
          className="p-5 rounded-2xl transition-all duration-300 hover:bg-gray-200 text-gray-700 hover:shadow-lg"
          title={isFullscreen ? 'Exit fullscreen' : 'Enter fullscreen'}
        >
          <Expand size={32} className="text-indigo-600" />
        </button>
      </div>
    </div>
  );
});

Header.displayName = 'Header';

const Stats = () => {
  const [selectedDates, setSelectedDates] = useState([new Date()]);

  const handleDateSelect = (dates) => {
    setSelectedDates(dates);
  };

  const renderStatsContent = () => (
    <div className="bg-gray-100 p-5 rounded-2xl border-4 border-purple-600 shadow-xl">
      <Header />
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
    <PageContainer>
      {renderStatsContent()}
    </PageContainer>
  );
};

export default Stats;