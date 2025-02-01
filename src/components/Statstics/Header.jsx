import { Expand, ChevronDown } from 'lucide-react';
import { useState, useCallback, useEffect, memo } from 'react';

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
export default Header;
