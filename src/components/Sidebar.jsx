import { Search, Calendar, Gamepad as GamepadIcon, BookOpen, BarChart3, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Sidebar = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  const navItems = [
    { path: '/classes', icon: <Calendar size={22} />, label: 'Classes' },
    { path: '/games', icon: <GamepadIcon size={22} />, label: 'Jeux' },
    { path: '/courses', icon: <BookOpen size={22} />, label: 'Cours' },
    { path: '/stats', icon: <BarChart3 size={22} />, label: 'Statistiques' },
  ];

  return (
    <div className="w-72 bg-white min-h-screen p-6 shadow-sm">
      <div className="flex justify-center mb-8 relative">
        <div className="relative">
          <div className="absolute -z-10 w-12 h-12 bg-indigo-300 rounded-xl transform rotate-6 left-1/2 -translate-x-1/2"></div>
          <div className="absolute -z-20 w-12 h-12 bg-indigo-200 rounded-xl transform -rotate-6 left-1/2 -translate-x-1/2"></div>
          <div className="relative w-20 h-12 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-bold text-2xl shadow-lg">
            edp
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-xl p-4 flex items-center gap-4 mb-6 shadow-lg relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500 rounded-full transform translate-x-16 -translate-y-16 opacity-20"></div>
        <img 
          src="https://randomuser.me/api/portraits/men/32.jpg" 
          alt="Profile" 
          className="w-12 h-12 rounded-xl ring-2 ring-white/50"
        />
        <div>
          <p className="font-semibold text-lg">Mr. Mandhar</p>
          <p className="text-indigo-200">Professeur</p>
        </div>
      </div>
      <div className="relative mb-6">
        <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher"
          className="w-full bg-gray-50 rounded-xl pl-12 pr-4 py-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-200"
        />
      </div>
      <nav className="space-y-2">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `w-full p-4 rounded-xl flex items-center gap-4 transition-colors duration-200
              ${isActive 
                ? 'bg-indigo-50 text-indigo-600' 
                : 'text-gray-700 hover:bg-gray-50'
              }`
            }
          >
            {item.icon}
            <span className="font-medium">{item.label}</span>
          </NavLink>
        ))}
      </nav>

      <div className="absolute bottom-6 left-6 right-6">
        <button 
          onClick={handleLogout}
          className="w-full p-4 text-gray-700 rounded-xl flex items-center gap-4 hover:bg-gray-50 transition-colors duration-200"
        >
          <LogOut size={22} />
          <span className="font-medium">Se Déconnecter</span>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;