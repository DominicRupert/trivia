import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";
import { generateId } from "../Utils/generateId.js";
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

  get Template() {
    let correctButton = `<button onclick="app.gameController.guess(${this.id}, '${this.correctAnswer}')"> ${this.correctAnswer}</button>`;
    let incorrectButton = `<button onclick="app.gameController.guess(${this.id}, '${this.incorrectAnswers}')">${this.incorrectAnswers}</button>`;

    let randomizer = Math.floor(Math.random() * 2);
    let firstOption;
    let secondOption;
    if (randomizer == 1) {
      firstOption = correctButton;
      secondOption = incorrectButton;
    } else {
      firstOption = incorrectButton;
      secondOption = correctButton;
    }
    return `
        <li>Question: ${this.question} - Answers: <li>${firstOption}, ${secondOption}  </li></li>
        `;
  }
}
