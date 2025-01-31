import { Chart as ChartJS } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import { ChevronDown } from 'lucide-react';
const ActivityChart = () => {
  const data = {
    labels: ['SAT', 'SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI'],
    datasets: [{
      label: 'Activité totale',
      data: [50, 150, 100, 120, 200, 130, 130],
      backgroundColor: 'white',
      borderRadius: 4,
    }],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false }
    },
    scales: {
      x: { 
        grid: { display: false },
        ticks: { color: 'white' } 
      },
      y: { display: false }
    }
  };

  return (
    <div className="flex flex-col h-[338px] bg-indigo-600 text-white border border-white/20 rounded-xl overflow-hidden">
      <div className="flex justify-between items-center px-6 py-4">
        <h3 className="text-lg font-semibold tracking-wide">Activité totale</h3>
        <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 transition-all duration-200 rounded-lg flex items-center gap-1.5 text-sm border border-white/10">
          cette semaine <ChevronDown size={16} />
        </button>
      </div>
      <div className="flex-1 w-full px-4 pb-4">
        <div className="w-full h-full">
          <Bar 
            data={data} 
            options={{
              ...options,
              maintainAspectRatio: false,
              responsive: true,
              plugins: {
                ...options.plugins,
                tooltip: {
                  backgroundColor: 'white',
                  titleColor: '#4f46e5',
                  bodyColor: '#4f46e5',
                  padding: 12,
                  borderWidth: 1,
                  borderColor: '#e2e8f0'
                }
              }
            }} 
          />
        </div>
      </div>
    </div>
  );
};

export default ActivityChart;
