import { Component, OnInit } from '@angular/core';
import { GameModel } from 'src/app/model/game.model';
import { GameService } from 'src/app/service/game.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public gameModelArray: GameModel[] = [];

  constructor(private apiGames: GameService) { }

  ngOnInit(): void {
    this.apiGames.getGames("call")
      .then((data) => {
        this.gameModelArray = data
      });
  }

}
