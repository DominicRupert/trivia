export class Game{
    constructor(data){
        this.category = data.category
        this.type = data.type
        this.difficulty = data.difficulty
        this.question = data.question
        this.correctAnswer= data.correct_answer
        this.incorrectAnswers = data.incorrect_answers
    }
    
}