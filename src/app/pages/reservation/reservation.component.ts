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
    this.reservationService.createReservation(reservation).subscribe(
      response => {
        console.log("Reserva realizada", response);
        this.toastService.add("Reserva realizada");
      },
      error => {
        console.error("Erro ao realizar reserva", error);
        this.toastService.add("Erro ao realizar reserva");
      }
    );
  }
}
