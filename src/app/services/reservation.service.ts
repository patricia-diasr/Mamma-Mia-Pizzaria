import { Injectable } from '@angular/core';
import { Reservation } from '../interfaces/Reservation';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/reservation`;

  constructor(private http: HttpClient) { }

  createReservation(data: Reservation): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`, data);
  }
  
  getReservation(reservationId: string): Observable<Reservation> {
    return this.http.get<Reservation>(`${this.apiUrl}/${reservationId}`);
  }

  updateReservation(reservationId: string, data: Partial<Reservation>): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}/${reservationId}`, data);
  }

  deleteReservation(reservationId: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${reservationId}`);
  }
  
}
