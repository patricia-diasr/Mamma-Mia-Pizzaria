import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})
export class ToastService {
    message: string = "";

    constructor() {}

    add(message: string): void {
        this.message = message;

        setTimeout(() => {
            this.clear();
        }, 2500);
    }

    clear(): void {
        this.message = "";
    }
}
