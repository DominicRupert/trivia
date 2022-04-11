import { ProxyState } from "../AppState.js";
import { Game } from "../Models/Game.js";
class GamesService{
    async getGames(){
        // @ts-ignore
        const response = await axios.get('https://opentdb.com/api.php?amount=10&type=boolean')
        ProxyState.games = response.data.results.map(g=> new Game(g))
        console.log(response);
    }

    guess(){
        
    }
}

export const gamesService = new GamesService()