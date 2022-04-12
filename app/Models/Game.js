import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";
export class Game {
  constructor(data) {
    this.id = data.id;
    this.category = data.category;
    this.type = data.type;
    this.difficulty = data.difficulty;
    this.question = data.question;
    this.correctAnswer = data.correct_answer;
    this.incorrectAnswers = data.incorrect_answers;
    this.answer = data.answers;
  }
  victory(id){
      let victory = ProxyState.games
    if (true){
        alert('yay')
    }
}
async getGames(){
    // @ts-ignore
    const response = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
    ProxyState.games = response.data.results.map(g=> new Game(g))
    console.log(response);
}

  get Template() {
    
    return`
        <li>Question: ${this.question} - Answers: <li><button onclick="victory()"> ${this.correctAnswer}</button>, <button onclick="victory()">${this.incorrectAnswers}</button> </li></li>
        `;
  }
}
