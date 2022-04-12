import { ProxyState } from "../AppState.js";
import { gamesService } from "../Services/GamesService.js";
import { Game } from "../Models/Game.js";
function _drawGames() {
  let template = "";
  ProxyState.games.forEach((g) => (template += g.Template));
  document.getElementById("games").innerHTML = template;
}

export class GamesController {
  constructor() {
    this.getGames();
    ProxyState.on("games", _drawGames);
    _drawGames();
  }
  guess(id, playerGuess) {
    // @ts-ignore
    if (ProxyState.games[id].correctAnswer == playerGuess) return alert("yay");
    else alert("no");
  }

  async getGames() {
    try {
      await gamesService.getGames();
    } catch (error) {}
  }
}
