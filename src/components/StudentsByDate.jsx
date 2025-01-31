import { User, CheckCircle2, Clock } from 'lucide-react';

const StudentsByDate = ({ date }) => {
  const formattedDate = date.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Mock data - replace with real data
  const students = [
    { id: 1, name: 'Alice Martin', status: 'present', time: '08:30', class: 'Classe A' },
    { id: 2, name: 'Thomas Bernard', status: 'late', time: '09:15', class: 'Classe B' },
    { id: 3, name: 'Emma Dubois', status: 'present', time: '08:25', class: 'Classe A' },
    // Add more students as needed
  ];

  return (
    <div className="min-h-[338px] h-full p-4 sm:p-6 bg-indigo-50 rounded-xl border border-indigo-100">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h3 className="text-xl font-semibold text-gray-800">
          Élèves du {formattedDate}
        </h3>
        <span className="bg-indigo-100 text-indigo-600 px-4 py-2 rounded-xl">
          {students.length} Élèves
        </span>
      </div>
      <div className="h-[calc(100%-48px)] overflow-y-auto space-y-3 pr-2"> {/* Adjusted height calculation */}
        {students.map(student => (
          <div key={student.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                <User size={20} />
              </div>
              <div>
                <p className="font-medium text-gray-800">{student.name}</p>
                <p className="text-sm text-gray-500">{student.class}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {student.status === 'present' ? (
                <CheckCircle2 className="text-green-500" size={20} />
              ) : (
                <Clock className="text-orange-500" size={20} />
              )}
              <span className={student.status === 'present' ? 'text-green-500' : 'text-orange-500'}>
                {student.time}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentsByDate;
