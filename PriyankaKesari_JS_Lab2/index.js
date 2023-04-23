// Define the quiz data
const quizData = [
    {
        question: "What is the output of the following code: \nconsole.log(typeof null);",
        choices: ["null", "undefined", "object", "number"],
        answer: 2
    },
    {
      question: "What is the correct syntax for referring to an external script called 'script.js'?",
      choices: [
        "<script src='script.js'>",
        "<script name='script.js'>",
        "<script href='script.js'>",
        "<script alt='script.js'>"
      ],
      answer: 0
    },
    {
      question: "Which operator is used to assign a value to a variable?",
      choices: [
        "=",
        "+",
        "-",
        "*"
      ],
      answer: 0
    },
    {
      question: "Which event occurs when the user clicks on an HTML element?",
      choices: [
        "onmouseclick",
        "onclick",
        "onchange",
        "onmouseover"
      ],
      answer: 1
    },
    {
      question: "Inside which HTML element do we put the JavaScript?",
      choices: [
        "<js>",
        "<script>",
        "<javascript>",
        "<scripting>"
      ],
      answer: 1
    }
  ];
  
  // Get references to the HTML elements
  const quizContainer = document.getElementById('quiz');
  const questionContainer = document.getElementById('question');
  const choiceContainers = [
    document.getElementById('choice0'),
    document.getElementById('choice1'),
    document.getElementById('choice2'),
    document.getElementById('choice3')
  ];
  const progressContainer = document.getElementById('progress');
  const scoreContainer = document.getElementById('score');
  
  // Define some variables to keep track of the quiz state
  let currentQuestion = 0;
  let score = 0;
  
  // Define a function to display the current question
  function showQuestion() {
    // Get the current question data
    const currentQuestionData = quizData[currentQuestion];
    
    // Display the current question and choices
    questionContainer.textContent = currentQuestionData.question;
    for (let i = 0; i < currentQuestionData.choices.length; i++) {
      choiceContainers[i].textContent = currentQuestionData.choices[i];
    }
    
    // Update the progress indicator
    progressContainer.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
  }
  
  // Define a function to check the user's answer
  function checkAnswer(answer) {
    // Get the current question data
    const currentQuestionData = quizData[currentQuestion];
    
    // Check if the answer is correct and update the score
    if (answer === currentQuestionData.answer) {
      score++;
    }
    
    // Move on to the next question or end the quiz
    currentQuestion++;
    if (currentQuestion >= quizData.length) {
      endQuiz();
    } else {
      showQuestion();
    }
  }
  
  // Define a function to end the quiz and display the results
  function endQuiz() {
    // Hide the question and choices
    questionContainer.style.display = 'none';
    for (let i = 0; i < choiceContainers.length; i++) {
      choiceContainers[i].style.display = 'none';
    }

    // Display the user's score
    var gameEnded = "<h1>Result</h1>";
    gameEnded +="<h2 id='score'>Your score: "+ score +" out of " +quizData.length +" And mark percentage is " + score/quizData.length*100 + "%</h2>";
    document.getElementById("quiz").innerHTML.gameEnded;
    var element = document.getElementById("quiz");
    element.innerHTML = gameEnded;
  }
  
  // Start the quiz
  showQuestion();
  
  // Add event listeners to the choice buttons
  for (let i = 0; i < choiceContainers.length; i++) {
    choiceContainers[i].addEventListener('click', () => {
      checkAnswer(i);
    });
  }
