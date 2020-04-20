export class FlashCards{
  constructor(){
    this.questions = [];
    this.score = 0;
  }
}

export class Question {
    constructor(question, answers, correctAnswer){
        this.question = question;
        this.answers = answers;
        this.correctAnswer = correctAnswer;
    }
}