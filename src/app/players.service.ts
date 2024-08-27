// data.js
import { Injectable } from '@angular/core';

export interface Player {
  team: string;
  name: string;
  placement: string;
  status: string;
}

@Injectable({
  providedIn: 'root',
})
export class PlayersService {
  private players = [
    { team: 'diamond', name: 'Alvin', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'active' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'heart', name: 'ace', placement: '', status: 'active' },
    { team: 'spade', name: 'EMD', placement: '', status: 'active' },
    { team: 'spade', name: 'John', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'active' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'spade', name: 'ace', placement: '', status: 'active' },
    { team: 'diamond', name: 'EMD', placement: '', status: 'active' },
    { team: 'diamond', name: 'John', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'active' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'heart', name: 'ace', placement: '', status: 'active' },
    { team: 'spade', name: 'EMD', placement: '', status: 'active' },
    { team: 'spade', name: 'John', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'active' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'spade', name: 'ace', placement: '', status: 'active' },
    { team: 'diamond', name: 'EMD', placement: '', status: 'active' },
    { team: 'diamond', name: 'John', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'active' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'heart', name: 'ace', placement: '', status: 'active' },
    { team: 'spade', name: 'EMD', placement: '', status: 'active' },
    { team: 'spade', name: 'John', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'out' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'spade', name: 'ace', placement: '', status: 'active' },
    { team: 'diamond', name: 'EMD', placement: '', status: 'active' },
    { team: 'diamond', name: 'John', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'active' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'heart', name: 'ace', placement: '', status: 'active' },
    { team: 'spade', name: 'EMD', placement: '', status: 'active' },
    { team: 'spade', name: 'John', placement: '', status: 'active' },
    { team: 'heart', name: 'Jane', placement: '', status: 'active' },
    { team: 'club', name: 'Doe', placement: '', status: 'active' },
    { team: 'spade', name: 'ace', placement: '', status: 'active' },
    { team: 'diamond', name: 'EMD', placement: '', status: 'active' },
  ];

  getPlayers() {
    return this.players;
  }

  updatePlayerStatus(name: string, status: string, placement: any) {
    let player: any = this.players.find((p: any) => p.name === name);
    if (player) {
      player.status = status;
      player.placement = placement;
    }
  }

  // Add more methods to modify players as needed
}
