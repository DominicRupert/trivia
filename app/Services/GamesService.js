import { ProxyState } from "../AppState.js";
import { Game } from "../Models/Game.js";
class GamesService {
  async getGames() {
    // @ts-ignore
    const response = await axios.get(
      "https://opentdb.com/api.php?amount=10&type=boolean"
    );
    ProxyState.games = response.data.results.map((g, i) => {
      g.id = i;
      return new Game(g);
    });
    console.log(response);
    console.log(ProxyState.games);
  }
}

export const gamesService = new GamesService();
