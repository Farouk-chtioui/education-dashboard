import { useState, useEffect } from 'react';
import QuizSetup from './QuizSetup';
import QuizResults from './QuizResults';
import PageContainer from '../PageContainer';

// Fallback questions in case API fails
const fallbackQuestions = [
  {
    question: "Which programming language is known as the 'language of the web'?",
    correct_answer: "JavaScript",
    incorrect_answers: ["Python", "Java", "PHP"]
  },
  {
    question: "What does HTML stand for?",
    correct_answer: "HyperText Markup Language",
    incorrect_answers: [
      "HighText Machine Language",
      "HyperText Machine Language",
      "HighText Markup Language"
    ]
  },
  {
    question: "What does CSS stand for?",
    correct_answer: "Cascading Style Sheets",
    incorrect_answers: [
      "Computer Style Sheets",
      "Creative Style Sheets",
      "Colorful Style Sheets"
    ]
  }
];

const themes = {
  classic: {
    container: "p-6 bg-white rounded-xl shadow-lg",
    question: "text-lg font-medium text-gray-800",
    button: "w-full p-4 text-left rounded-xl border-2 border-gray-200 hover:bg-gray-50 transition-all duration-200 transform hover:scale-[1.02]",
    score: "text-indigo-600 font-semibold",
    progress: "text-gray-600",
    correct: "border-green-500 bg-green-50 text-green-700",
    incorrect: "border-red-500 bg-red-50 text-red-700"
  },
  dark: {
    container: "p-6 bg-gray-800 rounded-xl shadow-lg",
    question: "text-lg font-medium text-white",
    button: "w-full p-4 text-left rounded-xl border-2 border-gray-600 text-white hover:border-purple-500 hover:bg-gray-700 transition-colors",
    score: "text-purple-400 font-semibold",
    progress: "text-gray-400",
    correct: "border-green-500 bg-green-900/30 text-green-400",
    incorrect: "border-red-500 bg-red-900/30 text-red-400"
  },
  colorful: {
    container: "p-6 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-xl shadow-lg",
    question: "text-lg font-medium text-white",
    button: "w-full p-4 text-left rounded-xl border-2 border-white/30 text-white hover:bg-white/20 transition-colors backdrop-blur-sm",
    score: "text-white font-semibold",
    progress: "text-white/90",
    correct: "border-green-400 bg-green-500/20 text-white",
    incorrect: "border-red-400 bg-red-500/20 text-white"
  }
};

const QuizGame = () => {
  const [gameState, setGameState] = useState('setup'); // setup, playing, completed
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedTheme, setSelectedTheme] = useState('classic');
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [previousScores, setPreviousScores] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const handleStart = (category) => {
    setSelectedCategory(category);
    setGameState('playing');
    fetchQuestions(category.id);
  };

  const handleComplete = () => {
    setPreviousScores([...previousScores, score]);
    setGameState('completed');
  };

  const handleRestart = () => {
    setGameState('setup');
    setScore(0);
    setCurrentQuestion(0);
    setQuestions([]);
  };

  const fetchQuestions = async (categoryId, retryCount = 0) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch(
        `https://opentdb.com/api.php?amount=10&category=${categoryId}&type=multiple`
      );
      
      if (response.status === 429 && retryCount < 2) {
        // If rate limited, wait and retry
        await new Promise(resolve => setTimeout(resolve, 2000));
        return fetchQuestions(retryCount + 1);
      }

      const data = await response.json();
      
      if (data.results && data.results.length > 0) {
        setQuestions(data.results);
      } else {
        console.log('Using fallback questions due to API failure');
        setQuestions(fallbackQuestions);
      }
    } catch (error) {
      console.error('Error fetching questions:', error);
      console.log('Using fallback questions due to error');
      setQuestions(fallbackQuestions);
    } finally {
      setLoading(false);
    }
  };

  const handleAnswer = async (answer) => {
    setSelectedAnswer(answer);
    setShowFeedback(true);
    
    const isCorrect = answer === questions[currentQuestion].correct_answer;
    if (isCorrect) {
      setScore(score + 1);
    }

    // Wait for feedback animation
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setShowFeedback(false);
    setSelectedAnswer(null);

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      handleComplete();
    }
  };

  if (gameState === 'setup') {
    return (
      <PageContainer>
        <QuizSetup onStart={handleStart} />
      </PageContainer>
    );
  }

  if (gameState === 'completed') {
    return (
      <PageContainer>
        <QuizResults
          score={score}
          totalQuestions={questions.length}
          previousScores={previousScores}
          onRestart={handleRestart}
        />
      </PageContainer>
    );
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className={`animate-spin rounded-full h-12 w-12 border-b-2 ${selectedTheme === 'dark' ? 'border-purple-500' : 'border-indigo-600'}`}></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={themes[selectedTheme].container}>
        <div className="text-red-500 text-center">{error}</div>
      </div>
    );
  }

  if (!questions.length || !questions[currentQuestion]) {
    return (
      <div className={themes[selectedTheme].container}>
        <div className="text-center">No questions available</div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const answers = [...question.incorrect_answers, question.correct_answer]
    .sort(() => Math.random() - 0.5);

  return (
    <PageContainer>
      <div className={themes[selectedTheme].container}>
        <div className="mb-4 flex justify-end space-x-2">
          {Object.keys(themes).map((theme) => (
            <button
              key={theme}
              onClick={() => setSelectedTheme(theme)}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedTheme === theme 
                  ? 'bg-indigo-600 text-white' 
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className={themes[selectedTheme].progress}>
              Question {currentQuestion + 1}/{questions.length}
            </span>
            <span className={themes[selectedTheme].score}>
              Score: {score}
            </span>
          </div>
          <h3 className={`${themes[selectedTheme].question} mb-4`}
              dangerouslySetInnerHTML={{ __html: question.question }}>
          </h3>
          <div className="space-y-3">
            {answers.map((answer, index) => {
              const isSelected = selectedAnswer === answer;
              const isCorrect = answer === question.correct_answer;
              
              let buttonClass = themes[selectedTheme].button;
              
              if (showFeedback && isSelected) {
                buttonClass += isCorrect 
                  ? ` ${themes[selectedTheme].correct}`
                  : ` ${themes[selectedTheme].incorrect}`;
              }

              return (
                <button
                  key={index}
                  onClick={() => !showFeedback && handleAnswer(answer)}
                  disabled={showFeedback}
                  className={buttonClass}
                  dangerouslySetInnerHTML={{ __html: answer }}
                />
              );
            })}
          </div>
          
          {showFeedback && (
            <div className="mt-4 text-center font-medium">
              {selectedAnswer === question.correct_answer ? (
                <span className="text-green-600">Correct!</span>
              ) : (
                <span className="text-red-600">
                  Incorrect! The correct answer was:{' '}
                  <span dangerouslySetInnerHTML={{ 
                    __html: question.correct_answer 
                  }}/>
                </span>
              )}
            </div>
          )}
        </div>
      </div>
    </PageContainer>
  );
};

export default QuizGame;
