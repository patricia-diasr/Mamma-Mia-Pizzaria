import { Component } from "@angular/core";
import { WaitingTimeComponent } from "../../components/waiting-time/waiting-time.component";
import {
    FormGroup,
    FormControl,
    Validators,
    ReactiveFormsModule,
    AbstractControl,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ValidatePeopleNumber } from "../../utils/ValidatePeopleNumber";
import { VirtualLineService } from "../../services/virtual-line.service";

@Component({
    selector: "app-virtual-line",
    standalone: true,
    templateUrl: "./virtual-line.component.html",
    styleUrl: "./virtual-line.component.scss",
    imports: [ReactiveFormsModule, CommonModule, WaitingTimeComponent],
})
export class VirtualLineComponent {
    waitingTime: number | undefined;

    constructor(private virtualLineService: VirtualLineService) {}

    checkWaitingTimeForm = new FormGroup({
        peopleNumber: new FormControl("", [Validators.required, ValidatePeopleNumber]),
        priority: new FormControl("none", [
            Validators.required,
            Validators.pattern(/^(none|pcd|idoso)$/),
        ]),
    });

    async onSubmit() {
        if (!this.checkWaitingTimeForm.valid) {
            return;
        }

        const peopleNumber = Number(this.f["peopleNumber"].value!);
        const priority = this.f["priority"].value!;

        const response = await this.virtualLineService.getWaitingTime(
            peopleNumber,
            priority
        );

        if (typeof response === "number") {
            this.waitingTime = response;
        }
    }

    get f(): { [key: string]: AbstractControl } {
        return this.checkWaitingTimeForm.controls;
    }
}
