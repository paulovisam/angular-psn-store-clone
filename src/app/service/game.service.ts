import { Injectable } from '@angular/core';
import { GameModel } from '../model/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private urlBase: string = "https://www.cheapshark.com/api/1.0";

  constructor() { }

  getGames(title: string) {
    let gameModelArray: GameModel[] = [];

    return fetch(this.urlBase+"/games?title="+title)
      .then((response) => response.json())
      .then((jsonBody) => {
        for(const game of jsonBody) {
          let gameModel = new GameModel();
          gameModel.cheapest = game["cheapest"];
          gameModel.cheapestDealID = game["cheapestDealID"];
          gameModel.external = game["external"];
          gameModel.gameID = game["gameID"];
          gameModel.internalName = game["internalName"];
          gameModel.steamAppID = game["steamAppID"];
          gameModel.thumb = game["thumb"];
          gameModelArray.push(gameModel);
        }
      return gameModelArray
      })
  }
}
