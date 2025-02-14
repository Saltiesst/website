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
  
  let currentQuestionIndex = 0;
  let score = 0;
  let quizStarted = false;
  
  function startQuiz() {
    quizStarted = true;
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("quizCard").classList.remove("hidden");
    showQuestion();
  }
  
  function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("questionText").innerText = question.question;
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";
    question.options.forEach((option, index) => {
      const button = document.createElement("button");
      button.classList.add("bg-blue-500", "text-white", "px-6", "py-2", "rounded-lg", "hover:bg-blue-600", "transition", "duration-200", "ease-in-out");
      button.innerText = option;
      button.onclick = () => handleAnswer(option);
      optionsContainer.appendChild(button);
    });
  }
  
  function handleAnswer(answer) {
    if (answer === questions[currentQuestionIndex].answer) {
      score++;
    }
    if (currentQuestionIndex < questions.length - 1) {
      currentQuestionIndex++;
      showQuestion();
    } else {
      endQuiz();
    }
  }
  
  function endQuiz() {
    document.getElementById("quizEnd").classList.remove("hidden");
    document.getElementById("score").innerText = score;
  }
  
  function restartQuiz() {
    document.getElementById("quizEnd").classList.add("hidden");
    startQuiz();
  }
  
  // Live-feed toggling
  function toggleLiveFeed() {
    const feed = document.getElementById("liveFeedContainer");
    const button = document.getElementById("liveFeedButton");
    if (feed.classList.contains("hidden")) {
      feed.classList.remove("hidden");
      button.innerText = "Skjul live feed";
    } else {
      feed.classList.add("hidden");
      button.innerText = "Se nå";
    }
  }
  
  // Fact toggling
  function toggleFact() {
    const factContainer = document.getElementById("factContainer");
    const button = document.getElementById("factButton");
    if (factContainer.classList.contains("hidden")) {
      factContainer.classList.remove("hidden");
      button.innerText = "Skjul fakta";
    } else {
      factContainer.classList.add("hidden");
      button.innerText = "Vis fakta";
    }
  }
  