import { AbstractControl } from "@angular/forms";

export function ValidateDate(control: AbstractControl) {
    const value: string = control.value;

    if (value === "") {
        return { required: true };
    }

    const date: Date = new Date(value);
    const today: Date = new Date();
    today.setHours(0, 0, 0, 0);

    if (isNaN(date.getTime())) {
        return { invalidDate: true };
    }

    if (date <= today) {
        return { dateNotInFuture: true };
    }

    return null;
}
