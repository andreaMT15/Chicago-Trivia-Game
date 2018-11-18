var triviaQuestions = [
  {
    q:
      "What is one of the most famous landmarks in Chicago that survived the great Chicago fire?",
    options: [
      "Wrigley Field",
      "The Water Tower",
      "The Field Museum",
      "The Planetarium"
    ],
    correctAnswer: "The Water Tower"
  },
  {
    q:
      "What is the 100 story glass and steel skyscaper that was completed in 1969, in Chicago and named after a famous American revolutionary?",
    options: [
      "The Sears Tower",
      "Trump Tower",
      "The John Hancock Center",
      "The Aon Center"
    ],
    correctAnswer: "The John Hancock Center"
  },
  {
    q: "What twin buildings are known to Chicago residents as the 'corn cobs'?",
    options: [
      "Marina City",
      "The House of Blues",
      "Navy Pier",
      "The Shedd Aquarium"
    ],
    correctAnswer: "Marina City"
  }
];

var timer = "Time Left: 60 seconds";
var intervalId;
var score = 0;
var count = 0;
var correct = 0;
var incorrect = 0;
var answers = [];
var inputs = $("#questions").children("input:checked");

function time() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  time--;
  $("#show-timer").html("<h5>" + timer + "</h5>");
}
function populateQuestions() {
  for (var i = 0; i < triviaQuestions.length; i++) {
    var individualQuestion = triviaQuestions[i];
    var questionDiv = $("<div>");
    questionDiv.append("<p>" + individualQuestion.q + "</p>");
    for (var j = 0; j < individualQuestion.options.length; j++) {
      var radioDiv = $("<div>");
      var radioInput = $("<input type='radio' name='selection'>");
      radioDiv.append(radioInput);
      var labelDiv = $("<label>").text(individualQuestion.options[j]);
      radioDiv.append(labelDiv);
      questionDiv.append(radioDiv);
    }
    $("#questions").append(questionDiv);
    radioInput.on("click", "input[type=radio]", function() {
      answers.push(inputs);
      console.log(answers);
    });
  }
}

populateQuestions();
time();
decrement();
