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
    correctAnswer: 2
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
    correctAnswer: 3
  },
  {
    q: "What twin buildings are known to Chicago residents as the 'corn cobs'?",
    options: [
      "Marina City",
      "The House of Blues",
      "Navy Pier",
      "The Shedd Aquarium"
    ],
    correctAnswer: 1
  }
];

var score = 0;
var count = 0;

function populateQuestions() {
  for (var i = 0; i < triviaQuestions.length; i++) {
    var individualQuestion = triviaQuestions[i];
    var questionDiv = $("<div>");
    questionDiv.append("<p>" + individualQuestion.q + "</p>");
    for (var j = 0; j < individualQuestion.options.length; j++) {
      var radioDiv = $("<div>");
      var radioInput = $("<input type='radio'>");
      radioDiv.append(radioInput);
      var labelDiv = $("<label>").text(individualQuestion.options[j]);
      radioDiv.append(labelDiv);
      questionDiv.append(radioDiv);
    }
    $("#questions").append(questionDiv);

    // $("#questions").append("<div>" + individualQuestion.q + "</div>");
    // var radioBtn;

    // for (var j = 0; j < radioBtn.options.length; j++) {
    //   $("#questions").append(
    //     "<input type= 'radio'>" + radioBtn.options + "</input>"
    //   );
    // }

    // console.log(individualQuestion);
  }
}

populateQuestions();

// var radioBtn = $("<input type='radio'>");
// radioBtn.addClass("answer-button");
// $("#answer").append(radioBtn.options);
