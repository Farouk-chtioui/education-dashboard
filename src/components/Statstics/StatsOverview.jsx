import { GraduationCap, Users, Book, Gamepad as GamepadIcon, BarChart3 } from 'lucide-react';

const StatsOverview = () => (
    <div className="grid grid-cols-3 gap-6 px-6 py-4">
      <div className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="text-teal-500">
          <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center">
            <GraduationCap size={28} />
          </div>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Classes</p>
          <p className="text-2xl font-bold text-gray-800">6</p>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 flex items-center gap-6 shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="text-orange-500">
          <div className="w-14 h-14 bg-orange-50 rounded-xl flex items-center justify-center">
            <Users size={28} />
          </div>
        </div>
        <div>
          <p className="text-gray-500 mb-1">Élèves</p>
          <div className="flex items-center gap-3">
            <p className="text-2xl font-bold text-gray-800">100</p>
            <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-lg text-sm font-medium">
              45%
            </span>
          </div>
        </div>
      </div>
      <div className="bg-white rounded-2xl p-6 flex items-center justify-around shadow-sm hover:shadow-md transition-shadow duration-200">
        <div className="flex items-center gap-3">
          <Book size={24} className="text-indigo-600" />
          <span className="font-semibold text-xl text-gray-800">2</span>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex items-center gap-3">
          <GamepadIcon size={24} className="text-indigo-600" />
          <span className="font-semibold text-xl text-gray-800">2</span>
        </div>
        <div className="w-px h-8 bg-gray-200"></div>
        <div className="flex items-center gap-3">
          <BarChart3 size={24} className="text-indigo-600" />
          <span className="font-semibold text-xl text-gray-800">4</span>
        </div>
      </div>
    </div>
  );

export default StatsOverview;