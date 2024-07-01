import { Component } from "@angular/core";
import { ReservationFormComponent } from "../../components/reservation-form/reservation-form.component";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { Reservation } from "../../interfaces/Reservation";
import { ReservationService } from "../../services/reservation.service";
import { ToastService } from "../../services/toast.service";

@Component({
    selector: "app-reservation-detail",
    standalone: true,
    imports: [CommonModule, ReservationFormComponent],
    templateUrl: "./reservation-detail.component.html",
    styleUrl: "./reservation-detail.component.scss",
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
            this.reservationId = params.get("id")!;
        });

        this.reservationService.getReservation(this.reservationId).subscribe(
            (item) => {
                this.reservation = item;
                this.reservation.date = this.reservation.date.substring(0, 10);
                this.reservation.time = this.reservation.time.substring(0, 5);

                if (!this.reservation) {
                    this.router.navigate(["/"]);
                }
            },
            (error) => {
                console.error("Error fetching reservation", error);
                this.router.navigate(["/"]);
            }
        );
    }

    toggleEdit(): void {
        this.isEditing = !this.isEditing;
    }

    async updateHandler(reservation: Reservation) {
        this.reservationService
            .updateReservation(this.reservationId, reservation)
            .subscribe(
                (response) => {
                    console.log("Reserva atualizada", response);
                    this.toastService.add("Reserva atualizada");

                    this.isEditing = false;
                    this.router.navigate([this.router.url]);
                },
                (error) => {
                    console.log(JSON.stringify(error))
                    this.toastService.add(error.error.message);
                    console.error("Erro ao atualizar reserva", error);
                }
            );
    }

    async deleteHandler() {
        this.reservationService.deleteReservation(this.reservationId).subscribe(
            (response) => {
                console.log("Reserva deletada", response);
                this.toastService.add("Reserva deletada");

                this.isEditing = false;
                this.router.navigate(["/"]);
            },
            (error) => {
                console.error("Erro ao deletar reserva", error);
                this.toastService.add("Erro ao deletar reserva");
            }
        );
    }
}
