import { Component } from '@angular/core';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [CommonModule, ReservationFormComponent],
  templateUrl: './reservation-detail.component.html',
  styleUrl: './reservation-detail.component.scss'
})
export class ReservationDetailComponent {
  isEditing: boolean = false;

  toggleEdit() {
    this.isEditing = !this.isEditing;
  }
}
