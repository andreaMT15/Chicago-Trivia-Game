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
        $("#questions").append(`<div>${individualQuestion.q}</div>`);
        //     for (var j = 0; j < individualQuestion.options.length; j++) {
        //       $("#questions").append(
        //         `<input type="radio" name="question-${j}" value="${
        //           individualQuestion.options[j]
        //         }">${individualQuestion.options[j]}</input>`
        //       );
        //     }
        //   }
        //   $("#questions").append('<button id="submit-btn">Submit</button>');
    }
    populateQuestions();
// var answers = [];

// $("#questions").on("click", "input[type='radio']", function() {
//   //collect inputs as user clicks
//   answers.push(this.value);
// });

//on click function for button
//function will loop over questions and compare correct answer to answer in answers array
//for (var i = 0; i < triviaQuestions.length; i++) {
// is triviaQuestions[i] === answer[i]
//incrememnt correct answers/wrong answers variables appropietely

// function populateAnswers() {
//   for (var i = 0; i < triviaQuestions.length; i++)
//     var radioBtn = triviaQuestions[i];
//   $("#question-1").append(
//     "<input type= 'radio'>" + radioBtn.options + "</input>"
//   );
// }

// populateAnswers();


// var radioBtn = $("<input type='radio'>");
// radioBtn.addClass("answer-button");
// $("#answer").append(radioBtn.options);