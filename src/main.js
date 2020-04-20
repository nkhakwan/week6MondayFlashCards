import { Question } from './flashCards.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';



function displayTimer(question){
    setInterval(() => {
    $("#timer").html(question.score);
    console.log(`here is our answer${question.response}`);
    $("#question").html(question.response);
},1000);
}



$(document).ready(function() {
    let question1 = new Question("");
    // under click function
    $("#start-quiz").click(function(){
        $("#ourquestion").html(question1.askQuestion());
        question1.setScore();
        question1.setVerification();
        displayTimer(question1);
    })
    // get out of click function
    $("#uenter").submit(function(event){
        event.preventDefault();
        question1($("#answer").val());
    });   
});








