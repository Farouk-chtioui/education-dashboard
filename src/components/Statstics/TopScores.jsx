const TopScores = () => {
  const scores = [
    { 
      name: 'Jane Cooper', 
      score: 99.99, 
      school: 'St.Javidar School',
      image: 'https://randomuser.me/api/portraits/women/44.jpg',
      color: 'bg-green-500 text-white'
    },
    { 
      name: 'Eleanor Pena', 
      score: 99.76, 
      school: 'Polar School',
      image: 'https://randomuser.me/api/portraits/men/46.jpg',
      color: 'bg-purple-500 text-white'
    },
    { 
      name: 'Devon Lane', 
      score: 99.50, 
      school: 'Polar School',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
      color: 'bg-orange-500 text-white'
    }
  ];

  const placements = ['1er', '2ème', '3ème'];

  return (
    <div className="min-h-[338px] h-full p-4 sm:p-6 bg-indigo-700 text-white border border-white/20 rounded-xl">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-3">
        <h3 className="text-lg font-semibold tracking-wide">Top Scores</h3>
        <select className="text-sm bg-indigo-700 text-white rounded-lg px-3 py-1.5 border border-white/10">
          <option>2024 - 2025</option>
          <option>2023 - 2024</option>
          <option>2022 - 2023</option>
          <option>2021 - 2022</option>
        </select>
      </div>
      <div className="h-[calc(100%-48px)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {scores.map((student, index) => (
          <div key={index} className={`flex flex-col items-center ${student.color} rounded-xl p-6 shadow-lg`}> 
            <div className="relative mb-3">
              <img 
                src={student.image}
                alt={student.name}
                className="w-24 h-24 rounded-full ring-4 ring-white/20"
              />
            </div>
            <h4 className="font-medium text-white text-center mt-2 text-lg">{student.name}</h4>
            <p className="text-sm text-white/80">{student.school}</p>
            <p className="text-2xl font-bold mt-2">{student.score}%</p>
            <div className="mt-3 bg-white/30 px-6 py-2 rounded-full font-semibold text-sm text-black">
              {placements[index]}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopScores;