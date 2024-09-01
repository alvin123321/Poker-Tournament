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
      name: 'Fish Z🦈',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Yoyo',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Crystal',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'diamond',
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
      name: '上面是魚🎣',
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
      team: 'spade',
      name: 'Philip',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Vincent',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
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
      team: 'heart',
      name: 'Ricky 1010',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'RBC 👻',
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
      team: 'spade',
      name: 'William',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Derrik',
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
      team: 'spade',
      name: 'Luca.K',
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
      team: 'heart',
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
      team: 'spade',
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
      name: 'Kenny.K',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Benny.K',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'heart',
      name: 'Raymond.K',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'club',
      name: 'Tony.Y',
      placement: '',
      status: 'active',
      ko: 0,
      eliminateRound: 0,
    },
    {
      team: 'spade',
      name: 'Jeff',
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
