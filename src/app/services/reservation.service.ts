import { Injectable } from '@angular/core';

import { Reservation } from '../interfaces/Reservation';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/reservation`;

  constructor() { }

  getReservation(reservationId: string): Reservation {
    return {
      name: "Lorem Impsum",
      email: "loremimpsum@gmail.com",
      phone: "(15) 99999-9999",
      peopleNumber: 5,
      date: "07/06/2024",
      time: "22:00",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, debitis consequuntur voluptas soluta, eum omnis impedit adipisci incidunt nulla esse expedita, iure ex voluptatibus quisquam in nobis pariatur tempore animi.",
    }
  }

  createReservation(formData: FormData): string {
    return "Reserva cadastrada";
  }

  updateReservation(reservationId: string, formData: FormData): string {
    return "Reserva atualizada";
  }

  deleteReservation(reservationId: string): string {
    return "Reserva deletada";
  }
}
