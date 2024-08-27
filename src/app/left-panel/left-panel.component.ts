import { players } from '../player-list'; // Import the data array
import { CommonModule } from '@angular/common'; // Import this to use ngFor
import * as bootstrap from 'bootstrap';
import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [
    CommonModule, // Ensure this is imported
  ],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.css',
})
export class LeftPanelComponent implements OnInit {
  public playerList: any;
  public activePlayer: any;
  @Input() title: string = 'Confirm Action';
  @Input() message: string = 'Are you sure you want to proceed?';
  @Output() confirmed = new EventEmitter<void>();
  constructor() {
    this.playerList = players;
    this.activePlayer = players.filter(
      (player) => player.status === 'active'
    ).length;
    // Constructor logic here, typically dependency injection
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  confirm() {
    this.confirmed.emit();
    this.hideModal();
  }

  openConfirmModal() {
    const modalElement = document.getElementById('confirmModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
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
