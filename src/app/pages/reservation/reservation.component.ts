import { Component } from '@angular/core';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';

import { Reservation } from '../../interfaces/Reservation';
import { ReservationService } from '../../services/reservation.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [ ReservationFormComponent ],
  templateUrl: './reservation.component.html',
  styleUrl: './reservation.component.scss'
})
export class ReservationComponent {
  constructor(private reservationService: ReservationService, private toastService: ToastService){}

  async createHandler(reservation: Reservation) {
    const formData = new FormData();

    formData.append("name", reservation.name);
    formData.append("email", reservation.email);
    formData.append("phone", reservation.phone);
    formData.append("date", reservation.date);
    formData.append("time", reservation.time);
    formData.append("peopleNumber", reservation.peopleNumber.toString());
    
    if (reservation.description) {
      formData.append("description", reservation.description);
    }

    const response = await this.reservationService.createReservation(formData);
    this.toastService.add(response);
  }
}
