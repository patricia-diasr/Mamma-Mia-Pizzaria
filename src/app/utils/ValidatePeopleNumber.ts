import { AbstractControl } from "@angular/forms";

export function ValidatePeopleNumber(control: AbstractControl) {
    const min: number = 1;
    const max: number = 20;
    const peopleNumber: number = parseInt(control.value);

    if (peopleNumber < min || peopleNumber > max) {
        return { invalidRange: true };
    }

    return null;
}
