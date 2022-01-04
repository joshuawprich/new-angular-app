import { Injectable } from '@angular/core';
import { TypePlayer } from 'src/types';

@Injectable({
  providedIn: 'root'
})
export class PlayerDataService {

  constructor() { }

  public getPlayer() : TypePlayer {
    return {id: 1, username: "Hunch", exp: 0}
  }
}
