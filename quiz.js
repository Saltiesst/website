function Quiz() {
    const [score, setScore] = React.useState(0);
    const [currentQuestionIndex, setCurrentQuestionIndex] = React.useState(0);
    const [quizFinished, setQuizFinished] = React.useState(false);
  
    const questions = [
      {
        question: "Hva er det største dyret i havet?",
        options: ["Hval", "Hai", "Delfin", "Blåhval"],
        answer: "Blåhval",
      },
      {
        question: "Hvor mange hjerter har en blekksprut?",
        options: ["1", "2", "3", "4"],
        answer: "3",
      },
      {
        question: "Hvilket dyr er kjent som havets mest intelligente?",
        options: ["Hai", "Delfin", "Sel", "Hummer"],
        answer: "Delfin",
      },
    ];
  
    const handleAnswer = (answer) => {
      if (answer === questions[currentQuestionIndex].answer) {
        setScore(score + 1);
      }
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      } else {
        setQuizFinished(true);
      }
    };
  
    const handleReset = () => {
      setScore(0);
      setCurrentQuestionIndex(0);
      setQuizFinished(false);
    };
  
    return (
      <div className="quiz-container">
        <h2>Quiz om marine dyr!</h2>
        {!quizFinished ? (
          <>
            <p>{questions[currentQuestionIndex].question}</p>
            <div className="options">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  className="option-btn"
                  onClick={() => handleAnswer(option)}
                >
                  {option}
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p>Quiz avsluttet! Du fikk {score} av {questions.length} riktige!</p>
            <button className="reset-btn" onClick={handleReset}>
              Start på nytt
            </button>
          </>
        )}
      </div>
    );
  }
  
  // Expose Quiz function to global window object so it can be called later in script.js
  window.Quiz = Quiz;
  