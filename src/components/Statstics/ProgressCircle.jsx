const ProgressCircle = ({ percentage }) => (
  <div className="relative w-14 h-14">
    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
      <path
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#f1f5f9"
        strokeWidth="3"
      />
      <path
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
        fill="none"
        stroke="#6366f1"
        strokeWidth="3"
        strokeDasharray={`${percentage}, 100`}
      />
    </svg>
    <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-indigo-600">
      {percentage}%
    </div>
  </div>
);

export default ProgressCircle;