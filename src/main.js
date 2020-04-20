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
    //$("form").submit(function(event){
        //event.preventDefault();
    let q1 = "what is the coolest color?";
    let q1A = ["red","blue","yellow"];
    let q1correct = "blue";
    var question1 = new Question(q1,q1A,q1correct);
    question1.setScore();
    //var ourAnswer = question1.setVerification();
    //console.log(`${ourAnswer}`);
    question1.setVerification();
    displayTimer(question1);
    //$("#question").html(ourAnswer);

   // });   
});








// // user interface logic -------------------------------
// $(document).ready(function() {
//     $("form").submit(function(event){
//       event.preventDefault();
//       var pizzaSize = parseInt($("#size").val());
//       var meatType  = parseInt($("#meat").val());
//       var vegType   = parseInt($("#veg").val());
//       var pizzaOrder = new PizzaOrders(pizzaSize,meatType,vegType);
//      $("#cost").html(pizzaOrder.calculateOrder());
//      pizzaOrder.details();
//      $("#det").html("You have order"+ " " +pizzaOrder.sizeCat + " pizza with meat topping of " + pizzaOrder.toppingOne + " and veggie topping of " + pizzaOrder.toppingTwo + " ");
//     });
//   });