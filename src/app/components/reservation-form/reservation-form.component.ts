import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { ValidateDate } from '../../utils/ValidateDate';
import { ValidatePeopleNumber } from '../../utils/ValidatePeopleNumber';
import { CommonModule } from '@angular/common';
import { Reservation } from '../../interfaces/Reservation';

@Component({
  selector: 'app-reservation-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './reservation-form.component.html',
  styleUrl: './reservation-form.component.scss'
})
export class ReservationFormComponent {
  @Input() reservation?: Reservation;
  @Output() onSubmit = new EventEmitter<Reservation>();

  tomorrow: string = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];
  reservationForm!: FormGroup;

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm(): void {
    this.reservationForm = new FormGroup({
      name: new FormControl(
        this.reservation?.name || "", 
        [
          Validators.required,
          Validators.minLength(8),
          Validators.maxLength(40)
        ]
      ),
      email: new FormControl(
        this.reservation?.email || "", 
        [
          Validators.required, 
          Validators.email
        ]
      ),
      phone: new FormControl(
        this.reservation?.phone || "", 
        [
          Validators.required, 
          Validators.pattern(/^(?:\+(\d{2}))?\s?(\(?([1-9]{2}|[0-9]{3})\)?)\s?(\d{4,5})-?(\d{4})$/)
        ]
      ),
      date: new FormControl(
        this.reservation?.date || "", 
        [
          Validators.required, 
          ValidateDate
        ]
      ),
      time: new FormControl(
        this.reservation?.time || 'select', 
        [
          Validators.required, 
          Validators.pattern(/^(19:00|19:30|20:00|20:30|21:00|21:30|22:00|22:30|23:00)$/)
        ]
      ),
      peopleNumber: new FormControl(
        this.reservation?.peopleNumber || "", 
        [
          Validators.required, 
          ValidatePeopleNumber
        ]
      ),
      description: new FormControl(
        this.reservation?.description || "", 
        [
          Validators.maxLength(300)
        ]
      ),
    });
  }

  submit(): void {
    if (!this.reservationForm.valid) {
      return;
    }

    const reservation: Reservation = {
      name: this.f['name'].value!,
      email: this.f['email'].value!,
      phone: this.f['phone'].value!,
      date: this.f['date'].value!,
      time: this.f['time'].value!,
      peopleNumber: Number(this.f['peopleNumber'].value!),
      description: this.f['description'].value || ""
    };
  
    this.onSubmit.emit(reservation);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reservationForm.controls;
  }

}
