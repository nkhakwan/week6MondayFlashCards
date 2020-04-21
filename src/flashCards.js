export class Question {
    constructor(){
        this.answer = "";
        this.score = 10;
        this.response = "";
    }


  setVerification() {
    setTimeout(() => {
      console.log(`Here is the answer that the function got ${this.answer}`);
      let answers =["blue"];
      if (answers[0] === this.answer){
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


  askQuestion(){
    return "what is the coolest color";
  }
  updateAnswer(answer){
    console.log(`i am being called with ${answer}`);
    this.answer = answer;
  }
}