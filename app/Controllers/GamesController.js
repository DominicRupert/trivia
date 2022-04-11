import {ProxyState} from '../AppState.js';
import {gamesService} from '../Services/GamesService.js'
function _drawGames(){
    let template=''
    ProxyState.games.forEach(g => template += `<li>Question: ${g.question} - Answers: <li><button onclick="guess()"> ${g.correctAnswer}</button>, <button onclick="guess()">${ g.incorrectAnswers}</button> </li></li>`)
    document.getElementById('games').innerHTML = template
        
    
}

export class GamesController{
    constructor(){
        this.getGames()
        ProxyState.on('games', _drawGames)
    }
    async getGames(){
        try {
            await gamesService.getGames()
        } catch (error) {
            
        }
    }
}