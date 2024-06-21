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

  createReservation(formData: FormData) {
    return "Reserva cadastrada";
  }
}
