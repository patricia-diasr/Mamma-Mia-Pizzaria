import { Component } from '@angular/core';
import { ReservationFormComponent } from '../../components/reservation-form/reservation-form.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Reservation } from '../../interfaces/Reservation';
import { ReservationService } from '../../services/reservation.service';
import { ToastService } from '../../services/toast.service';

@Component({
  selector: 'app-reservation-detail',
  standalone: true,
  imports: [CommonModule, ReservationFormComponent],
  templateUrl: './reservation-detail.component.html',
  styleUrl: './reservation-detail.component.scss'
})
export class ReservationDetailComponent {
  isEditing: boolean = false;
  reservationId!: string;
  reservation: Reservation | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private reservationService: ReservationService,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.reservationId = params.get('id')!;
    });

    this.reservation = this.reservationService.getReservation(this.reservationId);

    if (this.reservation === undefined) {
      this.router.navigate(['/']);
    }
  }

  toggleEdit(): void {
    this.isEditing = !this.isEditing;
  }


  async updateHandler(reservation: Reservation) {
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

    const response = await this.reservationService.updateReservation(this.reservationId, formData);
    this.toastService.add(response);

    this.isEditing = false;
    this.router.navigate([this.router.url]);
  }

  async deleteHandler() {
    const response = await this.reservationService.deleteReservation(this.reservationId);
    this.toastService.add(response);
    this.router.navigate(['/']);
  }
}
