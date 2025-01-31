import ProgressCircle from './ProgressCircle';

const ClassProgress = () => {
  const classes = [
    { name: 'Classe A', students: 78, progress: 32 },
    { name: 'Classe B', students: 60, progress: 43 },
    { name: 'Classe C', students: 80, progress: 67 },
    { name: 'Classe D', students: 104, progress: 56 },
    { name: 'Classe E', students: 92, progress: 78 },
    { name: 'Classe F', students: 86, progress: 91 },
    { name: 'Classe G', students: 73, progress: 45 },
    { name: 'Classe H', students: 95, progress: 88 },
    { name: 'Classe I', students: 68, progress: 72 },
    { name: 'Classe J', students: 82, progress: 63 },
    { name: 'Classe K', students: 77, progress: 59 },
    { name: 'Classe L', students: 89, progress: 84 },
    { name: 'Classe M', students: 71, progress: 76 },
    { name: 'Classe N', students: 83, progress: 92 },
    { name: 'Classe O', students: 88, progress: 67 },
    { name: 'Classe P', students: 94, progress: 81 },
    { name: 'Classe Q', students: 69, progress: 73 },
    { name: 'Classe R', students: 75, progress: 88 },
    { name: 'Classe S', students: 91, progress: 95 },
    { name: 'Classe T', students: 87, progress: 79 }
  ];

  return (
    <div className="w-full h-full flex flex-col">
      <div className="p-6 pb-2">
        <h3 className="text-lg font-semibold text-gray-800">Progrès des Classes</h3>
      </div>
      <div className="flex-1 px-6 overflow-hidden relative">
        <div className="absolute inset-0 overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300">
          <div className="space-y-3 pr-2 pb-4">
            {classes.map((classe, index) => (
              <div 
                key={`${classe.name}-${index}`} 
                className="flex items-center justify-between p-3 border rounded-lg hover:shadow-md transition-all duration-200 border-indigo-200 hover:border-indigo-300 hover:bg-indigo-50/50 h-[70px]"
              >
                <div>
                  <p className="text-md font-semibold text-gray-800">{classe.name}</p>
                  <p className="text-gray-500 text-sm">{classe.students} Élèves</p>
                </div>
                <ProgressCircle percentage={classe.progress} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassProgress;
