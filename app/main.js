import { GamesController } from "./Controllers/GamesController.js"
class App {
 gameController = new GamesController()
}

window["app"] = new App();
