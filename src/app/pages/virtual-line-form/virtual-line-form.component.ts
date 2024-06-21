import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatePeopleNumber } from '../../utils/ValidatePeopleNumber';

@Component({
  selector: 'app-virtual-line-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './virtual-line-form.component.html',
  styleUrl: './virtual-line-form.component.scss'
})
export class VirtualLineFormComponent {
  virtualLineForm = new FormGroup({
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
    peopleNumber: new FormControl(
      '', 
      [
        Validators.required, 
        ValidatePeopleNumber
      ]
    ),
    priority: new FormControl(
      'none', 
      [
        Validators.required, 
        Validators.pattern(/^(none|pcd|idoso)$/)
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
    if (!this.virtualLineForm.valid) {
      return;
    }

    this.virtualLineForm.reset();
    console.log(this.virtualLineForm.value);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.virtualLineForm.controls;
  }
}
