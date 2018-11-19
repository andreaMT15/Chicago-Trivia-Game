// Array of Questions and Answers

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

var timer = 60;
var intervalId;
var score = 0;
var count = 0;
var correct = 0;
var incorrect = 0;
var userAnswers;
var inputs = $("#questions").children("input:checked");

//timer
function time() {
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  time--;
  $("#show-timer").html("<h5>" + timer + "</h5>");
}

//Display Questions on the screen along with radio buttons for answers
function populateQuestions() {
  for (var i = 0; i < triviaQuestions.length; i++) {
    var individualQuestion = triviaQuestions[i];
    var questionDiv = $("<div>");
    questionDiv.append("<p>" + individualQuestion.q + "</p>");
    for (var j = 0; j < individualQuestion.options.length; j++) {
      var radioDiv = $("<div>");
      var radioInput = $("<input type='radio' name='selection'>");
      radioInput.attr("value", individualQuestion.options[j]);
      radioDiv.append(radioInput);
      var labelDiv = $("<label>").text(individualQuestion.options[j]);
      radioDiv.append(labelDiv);
      questionDiv.append(radioDiv);
    }
    $("#questions").append(questionDiv);
  }

  //capture the value of the button that was clicked
  $(document).on("click", "input[type=radio]", function() {
    userAnswers = $(this).val();
    console.log(answers);
    if (answers === triviaQuestions.correctAnswer) {
      correct++;
      $("#correct").text("Correct Answers:" + correct);
    }
  });
}

populateQuestions();
time();
decrement();
