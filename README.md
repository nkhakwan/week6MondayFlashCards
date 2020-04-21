# _Timed Flash Cards_

#### _Epicodus Week 6 Monday Project_

#### By _**KhanSahab**_ and _**Josh Hellman**_

## Description
_A trivia game where questions are generated with a timer that counts down. The question must be answered in the alloted time or the question is counted as answered incorrectly._


## Setup/Installation Requirements

* Clone the project and go in the root directory and type 
* npm install _to install dependencies_
* npm run start _to build it and have the website displayed_

## Known Bugs

* The work is unfinished. setTimeout and setInterval both have been deployed successfully but couple of things are remaining to make the web sit workable.
* Tests also have not been written yet.

## Support and contact details

_Have a bug or an issue with this application? email post_khan@yahoo.com_

## Technologies Used

Git and GitHub
JavaScript
jQuery
functions
NPM
Webpack
lintrc
WebpackHTML plugins
Jest and Babel.
JS classes
setTimeout and setInterval usage


## Specs Input
| Spec | Input | result |
| :-------------  | :-----------------------------------------------------| :----------------------------------------|
| **Enter the game**  | User Input:"clicks the button" | Output: " Both a question and counter gets displayed " |
| **Result** | User Input: "enters the answer" | Output: "not correct or incorrect is displayed. Need to work to display something that says time run out"|




### License


This software is licensed under the Epicodus inc license.

Copyright (c) 2020 **_Khan Sahab_**

@Travis. if i want to note the time when the user inputs a string and presses enter, i can put a setInterval function that checks every 50 millisecond to see whether the variable that was empty has changed or not. But my question. Is there a method in javascript that notes 

 @Travis. I want to capture the time when this.answer is written into. Following obviously is not working. So how can i do it? Following keeps on loading this.time with new decremented value after this.answer has been written into.
 
 setScore() {
    setInterval(() => {
      this.score --;
      if(this.answer != ""){
        this.time = this.score;
      }
  }, 1000);