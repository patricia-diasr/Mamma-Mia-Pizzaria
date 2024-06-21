import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  contactForm = new FormGroup({
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
    subject: new FormControl(
      'select', 
      [
        Validators.required, 
        Validators.pattern(/^(evento|duvida|sugestao|trabalhe-conosco|outro)$/)
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
    if (!this.contactForm.valid) {
      return;
    }

    this.contactForm.reset();
    console.log(this.contactForm.value);
  }

  get f(): { [key: string]: AbstractControl } {
    return this.contactForm.controls;
  }
}
