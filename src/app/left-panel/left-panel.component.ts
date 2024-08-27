import { PlayersService, Player } from '../players.service';
import { CommonModule } from '@angular/common'; // Import this to use ngFor
import * as bootstrap from 'bootstrap';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [
    CommonModule, // Ensure this is imported
    FormsModule,
  ],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css',
})
export class LeftPanelComponent implements OnInit {
  public playerList: any;
  public activePlayer: any;
  @Input() title: string = 'Confirm Action';
  @Input() message: string = 'Are you sure you want to proceed?';
  @Output() confirmed = new EventEmitter<{
    name: string;
    status: string;
    placement: string;
  }>();
  name: string = '';
  status: string = '';
  placement: string = '';

  constructor(private playersService: PlayersService) {
    this.playerList = this.playersService.getPlayers();
    console.log(this.playerList);
    this.activePlayer = this.playerList.filter(
      (player: any) => player.status === 'active'
    ).length;
    // Constructor logic here, typically dependency injection
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  confirm(name: string, status: string, placement: string) {
    this.confirmed.emit();
    this.playersService.updatePlayerStatus(name, status, placement);
    this.hideModal();
  }

  openConfirmModal(name:string) {
    const modalElement = document.getElementById('confirmModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      this.name = name
      modalInstance.show();
    }
  }

  hideModal() {
    const modalElement = document.getElementById('confirmModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance ? modalInstance.hide() : console.log('modal hide error');
    }
  }
}
