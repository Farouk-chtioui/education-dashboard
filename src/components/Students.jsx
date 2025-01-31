import { User, School } from 'lucide-react';

const Students = () => {
  const students = [
    { id: 1, name: 'Emily Smith', class: 'Classe 1', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 2, name: 'Emily Smith', class: 'Classe 1', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' },
    { id: 3, name: 'Emily Smith', class: 'Classe 1', avatar: 'https://randomuser.me/api/portraits/women/44.jpg' }
  ];

  return (
    <div className="min-h-[338px] h-full p-4 sm:p-6 bg-indigo-600 text-white rounded-xl">
      <div className="flex justify-center items-center mb-6">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <School size={25} className="text-white/80" />
            <span className="text-lg">22</span>
          </div>
          <div className="flex items-center gap-2">
            <User size={25} className="text-white/80" />
            <span className="text-lg">22</span>
          </div>
        </div>
      </div>
      <div className="h-[calc(100%-48px)] overflow-y-auto pr-3 custom-scrollbar">
        {students.map(student => (
          <div key={student.id} className="flex items-center justify-between p-4 bg-indigo-700/50 rounded-xl mb-3">
            <div className="flex items-center gap-4">
              <img src={student.avatar} alt={student.name} className="w-12 h-12 rounded-full" />
              <span className="font-medium text-white">{student.name}</span>
            </div>
            <span className="bg-white/10 text-white px-4 py-2 rounded-lg text-sm">{student.class}</span>
          </div>
        ))}
      </div>
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 4px;
        }
      `}</style>
    </div>
  );
};

export default Students;
