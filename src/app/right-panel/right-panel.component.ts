import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import this to use ngFor
import { FormsModule } from '@angular/forms';
import * as bootstrap from 'bootstrap';

@Component({
  selector: 'app-right-panel',
  standalone: true,
  imports: [
    CommonModule, // Ensure this is imported
    FormsModule,
  ],
  templateUrl: './right-panel.component.html',
  styleUrl: './right-panel.component.css',
})
export class RightPanelComponent implements OnInit {
  amount: any;
  placement: any;
  prizes: any = {
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
    sixth: 0,
  };
  constructor() {
    // Constructor logic here, typically dependency injection
  }

  ngOnInit(): void {
    // Initialization logic here
  }

  openConfirmModal(name: string) {
    const modalElement = document.getElementById('prizeModal');
    if (modalElement) {
      const modalInstance = new bootstrap.Modal(modalElement);
      this.placement = name;
      modalInstance.show();
    }
  }

  hideModal() {
    const modalElement = document.getElementById('prizeModal');
    if (modalElement) {
      const modalInstance = bootstrap.Modal.getInstance(modalElement);
      modalInstance ? modalInstance.hide() : console.log('modal hide error');
    }
  }

  confirm(amount: any) {
    this.prizes[this.placement] = amount;
    this.hideModal();
  }
}
