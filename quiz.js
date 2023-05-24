const questions = [
    {
      question: "What is the name of the soccer player who scored the 'Hand of God' goal in the 1986 World Cup?",
      answers: [
        { text: "Diego Maradona", correct: true },
        { text: "Pele", correct: false },
        { text: "Zinedine Zidane", correct: false },
        { text: "Ronaldo", correct: false }
      ]
    },
    {
      question: "Which NBA player has won the most championships?",
      answers: [
        { text: "Michael Jordan", correct: false },
        { text: "LeBron James", correct: false },
        { text: "Bill Russell", correct: true },
        { text: "Kobe Bryant", correct: false }
      ]
    },
    {
      question: "Who is the only boxer to win a heavyweight championship three times?",
      answers: [
        { text: "Muhammad Ali", correct: false },
        { text: "Mike Tyson", correct: false },
        { text: "Evander Holyfield", correct: true },
        { text: "George Foreman", correct: false }
      ]
    },
    {
        question: "Who will take 100% on Assignment 3?",
        answers: [
          { text: "Magzhan", correct: true},
          { text: "Gaini", correct: true },
          { text: "Daryn", correct: true },
          { text: "Aiber", correct: true}
        ]
      }
  ];
  
  const quizContainer = document.getElementById('quiz');
  const questionContainer = document.createElement('div');
  questionContainer.classList.add('question');
  quizContainer.appendChild(questionContainer);
  
  const answerContainers = [];
  let currentQuestionIndex = 0;
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.style.opacity = 0;
    setTimeout(() => {
      questionContainer.innerText = currentQuestion.question;
      currentQuestion.answers.forEach(answer => {
        const answerContainer = document.createElement('div');
        answerContainer.innerText = answer.text;
        answerContainer.addEventListener('click', () => {
          if (answer.correct) {
            alert('Correct!');
          } else {
            alert('Incorrect!');
          }
          answerContainers.forEach(answerContainer => {
            quizContainer.removeChild(answerContainer);
          });
          answerContainers.length = 0;
          currentQuestionIndex++;
          if (currentQuestionIndex < questions.length) {
            loadQuestion();
          } else {
            const homeButton = document.createElement('button');
homeButton.innerText = 'Back to Home Page';
homeButton.addEventListener('click', () => {
  window.location.href = "C:/Users/shaid/Desktop/pro-html/index.html";
});
quizContainer.appendChild(homeButton);

            alert('Quiz complete, now you can purchase our production with 10% discount to become a champion!');
          }
        });
        
        answerContainers.push(answerContainer);
        quizContainer.appendChild(answerContainer);
      });
      questionContainer.style.opacity = 1;
    }, 500);
  }
  
  loadQuestion();
  