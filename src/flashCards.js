export class Question {
    constructor(answer){
        this.answer = answer;
        this.score = 10;
        this.response = "";
    }


  setVerification() {
    setTimeout(() => {
      let answers =["blue"];
      if (answers[0] === this.answer){
        this.response = "correct";
      }else {
        this.response = "not correct";
      }    
      console.log(`this is from the set var function ${this.response}`);
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

}