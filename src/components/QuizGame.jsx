import { useState, useEffect } from 'react';

const QuizGame = ({ onComplete }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchQuestions();
  }, []);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(
        'https://opentdb.com/api.php?amount=10&category=18&type=multiple'
      );
      const data = await response.json();
      setQuestions(data.results);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching questions:', error);
    }
  };

  const handleAnswer = (answer) => {
    if (answer === questions[currentQuestion].correct_answer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(score);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const answers = [...question.incorrect_answers, question.correct_answer]
    .sort(() => Math.random() - 0.5);

  return (
    <div className="p-6 bg-white rounded-xl">
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <span className="text-gray-600">Question {currentQuestion + 1}/{questions.length}</span>
          <span className="text-indigo-600 font-semibold">Score: {score}</span>
        </div>
        <h3 className="text-lg font-medium text-gray-800 mb-4" 
            dangerouslySetInnerHTML={{ __html: question.question }}>
        </h3>
        <div className="space-y-3">
          {answers.map((answer, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(answer)}
              className="w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:border-indigo-500 hover:bg-indigo-50 transition-colors"
              dangerouslySetInnerHTML={{ __html: answer }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuizGame;
