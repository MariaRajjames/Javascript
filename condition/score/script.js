/*var a = document.getElementById("first").value;
var b = document.getElementById("second").value;
var c = document.getElementById("third").value;
var d = document.getElementById("fourth").value;

function myFunction(){
	if(a==c)
	document.getElementById("demo").innerHTML="Your Answer is: 2";
} */

var questions = [
    {
        title: "I like cricket.",
        answer: "I do not like cricket."
    },

    {
        title: "He is smart.",
        answer: "He is not smart."
    },

    {
        title: "She sings well.",
        answer: "She does not sing well."	
    },

    {
        title: "You are a cheat.",
        answer: "You are not a cheat."
    },

    {
        title: "They are coming.",
        answer: "They are not coming."

    },

];


let score = 0;
let currentQuestion = 0;

$('document').ready(function () {
    $('.start a').click(function (e) {
        e.preventDefault();
        $('.start').hide();
        $('.quiz').show();
        showQuestion();
    });

    $('.output').keyup(function (e) {
        if (e.keyCode === 13) {
            $('.sub').click();
        }
    });
});


function showQuestion() {
    let question = questions[currentQuestion];
    $('.input').val(question.title);
}


function checkAnswer() {
    let question = questions[currentQuestion];
    let out = $('.output').value;
if (out == questions.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion >= questions.length) {
        showSummary();
    } else {
        showQuestion();
    }

    $('.sub').click(function () {
        $('.output').val('');
    });
}


function showSummary() {
    $('.quiz').hide();
    $('.summary').show();
    $('.summary p').text("Congrats you scored " + score + " out of " + questions.length + " correct !");
}


function restartQuiz() {
    $('.summary a').click(function (e) {
        e.preventDefault();
        $('.summary').hide();
        $('.quiz').show();
        currentQuestion = 0;
        showQuestion();
    });
}