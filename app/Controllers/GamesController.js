import {ProxyState} from '../AppState.js';
import {gamesService} from '../Services/GamesService.js'
import {Game} from '../Models/Game.js'
function _drawGames(){
    let template=''
    ProxyState.games.forEach(g => template += g.Template) 
    document.getElementById('games').innerHTML = template
        
    
}

export class GamesController{
    constructor(){
        this.getGames()
        ProxyState.on('games', _drawGames)
        _drawGames()
    }
 
        
     
    async getGames(){
        try {
            await gamesService.getGames()
        } catch (error) {
            
        }
    }
}
