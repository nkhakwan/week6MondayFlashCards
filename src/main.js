import { FlashCards, Question } from './flashCards.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function() {
    let q1 = "what is the coolest color?";
    let q1A = ["red","blue","yellow"];
    let q1correct = "blue";
    let question1 = new Question(q1,q1A,q1correct);
    console.log(`consol log .....${question1.question}`);
})