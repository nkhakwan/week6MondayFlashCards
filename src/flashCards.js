export class Question {
    constructor(question, answer, correctAnswer){
        this.question = question;
        this.answer = answer;
        this.correctAnswer = correctAnswer;
        this.score = 10;
        this.response = "";
    }


  setVerification() {
    setTimeout(() => {
      let answers =[];
      if (this.answer[1] === this.correctAnswer){
        this.response = "correct";
      }else {
        this.response = "not correct";
      }    
  }, 10000);
}

setScore() {
  setInterval(() => {
    this.score --;
}, 1000);
}
}