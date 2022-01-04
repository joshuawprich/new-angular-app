import { Component, OnInit } from '@angular/core';
import { PlayerDataService } from 'src/app/services/player-data-service/player-data.service';
import { TypePlayer } from 'src/types';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  player: TypePlayer;
  constructor(private playerDataService: PlayerDataService) {
    this.player = playerDataService.getPlayer();
   }

   // Called whenever this component is initialised.
  ngOnInit(): void {
  }

  onSubmit() {
    //..
  }

}
