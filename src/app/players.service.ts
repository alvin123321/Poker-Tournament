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
    {
      team: 'diamond',
      name: 'Alvin',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Zac',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Yoyo',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Crystal',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Dana',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Kevin',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Licky',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Jason',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Maxi',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'diamond',
      name: 'Cheryl',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'diamond',
      name: 'Joey',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Philip',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Vincent',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Joanna',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Steven',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Ricky 1010',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'RBC',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Issac',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Bruce',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'diamond',
      name: 'Jayden',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'diamond',
      name: 'Matt',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'William',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Derek',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Nate',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Gene',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Mark',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Tommy',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Jeff',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Ben',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'diamond',
      name: 'Nick',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'diamond',
      name: 'Kevin.M',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: '台北汗濕',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Keng',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Rick',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Kenny',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Benny',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Raymond',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Tony',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
  ];

  getPlayers() {
    return this.players;
  }

  updatePlayerStatus(name: string, status: string, placement: number) {
    let player: any = this.players.find((p: any) => p.name === name);
    if (player) {
      player.status = status;
      player.placement = placement;
    }
  }

  // Add more methods to modify players as needed
}
