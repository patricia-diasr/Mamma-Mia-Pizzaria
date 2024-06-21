import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { ValidateDate } from '../../utils/ValidateDate';
import { ValidatePeopleNumber } from '../../utils/ValidatePeopleNumber';
import { CommonModule } from '@angular/common';

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

  onSubmit() {
    this.reservationForm.reset();
    console.log(this.reservationForm.value);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.reservationForm.controls;
  }

}
