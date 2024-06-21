import { Component, EventEmitter, Output } from '@angular/core';
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
  @Output() onSubmit = new EventEmitter<Reservation>();

  tomorrow: string = new Date(new Date().setDate(new Date().getDate() + 1)).toISOString().split('T')[0];

  reservationForm = new FormGroup({
    name: new FormControl(
      '', 
      [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(40)
      ]
    ),
    email: new FormControl(
      '', 
      [
        Validators.required, 
        Validators.email
      ]
    ),
    phone: new FormControl(
      '', 
      [
        Validators.required, 
        Validators.pattern(/^(?:\+(\d{2}))?\s?(\(?([1-9]{2}|[0-9]{3})\)?)\s?(\d{4,5})-?(\d{4})$/)
      ]
    ),
    date: new FormControl(
      '', 
      [
        Validators.required, 
        ValidateDate
      ]
    ),
    time: new FormControl(
      'select', 
      [
        Validators.required, 
        Validators.pattern(/^(19:00|19:30|20:00|20:30|21:00|21:30|22:00|22:30|23:00)$/)
      ]
    ),
    peopleNumber: new FormControl(
      '', 
      [
        Validators.required, 
        ValidatePeopleNumber
      ]
    ),
    description: new FormControl(
      '', 
      [
        Validators.maxLength(300)
      ]
    ),
  });

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
      description: this.f['description'].value || ''
    };
  
    this.onSubmit.emit(reservation);
    this.reservationForm.reset();
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reservationForm.controls;
  }

}
