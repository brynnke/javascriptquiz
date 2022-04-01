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