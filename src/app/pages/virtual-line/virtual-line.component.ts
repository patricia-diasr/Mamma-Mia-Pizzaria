import { Component } from '@angular/core';
import { WaitingTimeComponent } from "../../components/waiting-time/waiting-time.component";
import { FormGroup, FormControl, Validators, ReactiveFormsModule, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ValidatePeopleNumber } from '../../utils/ValidatePeopleNumber';


@Component({
    selector: 'app-virtual-line',
    standalone: true,
    templateUrl: './virtual-line.component.html',
    styleUrl: './virtual-line.component.scss',
    imports: [
        ReactiveFormsModule,
        CommonModule,
        WaitingTimeComponent
    ],
})
export class VirtualLineComponent {
    showWaitingTime: Boolean = true;

    checkWaitingTimeForm = new FormGroup({
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
    });

    onSubmit() {
        if (!this.checkWaitingTimeForm.valid) {
            return;
        }

        this.checkWaitingTimeForm.reset();
        console.log(this.checkWaitingTimeForm.value);
    }
    
    get f(): { [key: string]: AbstractControl } {
        return this.checkWaitingTimeForm.controls;
    }
}
