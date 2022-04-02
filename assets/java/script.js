
// var with array and oject questions
var questions = [
  {
      title: 'What does var stand for in javascript?',
      choices: ['valubales', 'variables', 'videos'],
      answer: 'variables'
  },
  {
      title: 'What do you need to have after every line in Javascript?',
      choices: ['semi-colon;', 'smiley-face :-)', 'period.'],
      answer: 'semi-colon;'
  },
  {
      title: 'Which of the following is not a javascript object? ',
      choices: ['booleans', 'numbers', 'arrays', 'bodies'],
      answer: 'bodies'
  },
  {
      title: 'Does a website save data in localStorage? ',
      choices: ['yes', 'no'],
      answer: ''
  },
]

//declared var
var score = 0;
var questionIndex = 0;

// working code begin
var currentTime = document.querySelector('#currentTime');
var timer = document.querySelector('#startTime');
var questionsDiv = document.querySelector('#questionsDiv');
var wrapper = document.querySelector('#wrapper');

// seconds left 
var secleft = 76;
var holdInterval = 0;
var penalty = 10;
var ulCreate = document.createElement('ul');

// Timer triggered when button is clicked
timer.addEventListener('click', function () {
  if (holdInterval === 0){
      holdInterval = setInterval(function (){
          secondsLeft--;
          currentTime.textContent = "Time: " + secondsLeft;

          if (secondsLeft <= 0) {
              clearInterval(holdInterval);
              allDone ();
              currentTime.textContent = "Time's UP!";
          }
      }, 1000);
  }
  render(questionIndex);
});
// render questions and choices to page
function render(questionIndex) {
  questionsDiv.innerHTML = '';
  ulCreate.innerHTML = '';

  // loops
  for (var i = 0; i < questions.length; i++){
      var userQuestion = questions[questionIndex].title;
      var userChoice = questions [questionIndex].choices;
      questionsDiv.textContent = userQuestion;
   }
      userChoice.forEach(function(newItem){
          var listItem = document.createElement('li');
          listItem.textContent = newItem;
          questionsDiv.appendChild(ulCreate); 
          ulCreate.appendChild(listItem);
          listItem.addEventListener('click', (compare));
      })
}
// compare choices with answer
function compare(event) {
  var element = event.target;

  if (element.matches('li')) {

      var createDiv = document.createElement('div');
      createDiv.setAttribute('id', 'createDiv');

      // correct condition
      if (element.textContent == questions[questionIndex].answer){
          score ++;
          createDiv.textContent = 'CORRECT!!!! The answer is: '+ questions[questionIndex].answer;

      } else {
          // if question is wrong 5 seconds will be decucted
          secondsLeft = secondsLeft - penalty;
          createDiv.textContent = 'WRONG!!! The correct answer is: ' +
          questions[questionIndex].answer;
       }
  }
  questionIndex ++;

  if (questionIndex >= questions.length) {
      allDone();
      createDiv.textContent = 'End of quiz!!!!!' + ' ' + 'You got ' + score + '/' +
      questions.length + 'Correct!!!';
  } else {
      render(questionIndex);
  }
  questionsDiv.appendChild(createDiv);
}
// append last page
function allDone() {
  questionsDiv.innerHTML = '';
  currentTime.innerHTML = '';

  var createH1 = document.createElement('h1');
  createH1.setAttribute('id', 'createH1');
  createH1.textContent = 'ALL DONE!!!'

  questionsDiv.appendChild(createH1);

  var createP = document.createElement('p')
  createP.setAttribute('id', 'createP');

  questionsDiv.appendChild(createP);

  //Time remaining 

  if (secondsLeft >= 0) {
      var timeRemaining = secondsLeft;
      var createP2 = document.createElement('P');
      clearInterval(holdInterval);
      createP.textContent = 'Your final score is:' + timeRemaining;

      questionsDiv.appendChild(createP2);
  }

  // Labels
  var createLabel = document.createElement('label');
  createLabel.setAttribute('id', 'createLabel');
  createLabel.textContent + 'Enter our initials:';

  questionsDiv.appendChild(createLabel);

  // input
  var createInput = document.createElement('input');
  createInput.setAttribute('type', 'text');
  createInput.setAttribute('id', 'initials');
  createInput.textContent = '',

  questionsDiv.appendChild(createInput);

  //submit
  var createSubmit = document.createElement('button');
  createSubmit.setAttribute('type', 'submit');
  createSubmit.setAttribute('id', 'Submit');
  createSubmit.textContent = 'Submit';

  questionsDiv.appendChild(createSubmit);

  // event listners for local storage
  createSubmit.addEventListener('click',function () {
      var initials = createInput.value;

  });
      if (initials === null ) {

          console.log('NO VALUE ENTERED!');

      }else {
          var finalScore = {
              initials: initials,
              score: timeRemaining
          }
          console.log(finalScore);
          var allScores = localStorage.getItem('allScores');
          if (allScores === null) {
              allScores = [];
          } else {
              allScores = JSON.parse(allScores);
          }
          allScores.push(finalScore);
          var newScore = JSON.stringify(allScores);
          localStorage.setItem('allScores', newScore);
          //final page
          window.location.replace("./assets.scores.html")
      }
 

}