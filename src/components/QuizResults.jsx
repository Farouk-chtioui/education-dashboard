export default function QuizResults({ score, totalQuestions, previousScores, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Quiz Completed!</h2>
        <div className="text-5xl font-bold text-indigo-600 mb-2">{percentage}%</div>
        <p className="text-gray-600">
          You scored {score} out of {totalQuestions} questions
        </p>
      </div>

      {previousScores.length > 0 && (
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Previous Attempts</h3>
          <div className="space-y-2">
            {previousScores.map((prevScore, index) => (
              <div
                key={index}
                className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
              >
                <span className="text-gray-600">Attempt {index + 1}</span>
                <span className="font-medium text-indigo-600">
                  {Math.round((prevScore / totalQuestions) * 100)}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      <button
        onClick={onRestart}
        className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Try Again
      </button>
    </div>
  );
}
