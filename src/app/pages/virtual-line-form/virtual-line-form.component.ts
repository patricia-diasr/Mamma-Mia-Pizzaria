import { Component, EventEmitter, Output } from "@angular/core";
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
import { ToastService } from "../../services/toast.service";
import { Router } from "@angular/router";

@Component({
    selector: "app-virtual-line-form",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: "./virtual-line-form.component.html",
    styleUrl: "./virtual-line-form.component.scss",
})
export class VirtualLineFormComponent {
    constructor(
        private virtualLineService: VirtualLineService,
        private toastService: ToastService
    ) {}

    virtualLineForm = new FormGroup({
        name: new FormControl("", [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(40),
        ]),
        email: new FormControl("", [Validators.required, Validators.email]),
        phone: new FormControl("", [
            Validators.required,
            Validators.pattern(
                /^(?:\+(\d{2}))?\s?(\(?([1-9]{2}|[0-9]{3})\)?)\s?(\d{4,5})-?(\d{4})$/
            ),
        ]),
        peopleNumber: new FormControl("", [Validators.required, ValidatePeopleNumber]),
        priority: new FormControl("none", [
            Validators.required,
            Validators.pattern(/^(none|pcd|idoso)$/),
        ]),
        description: new FormControl("", [Validators.maxLength(300)]),
    });

    async onSubmit() {
        if (!this.virtualLineForm.valid) {
            return;
        }

        const formData = new FormData();

        formData.append("name", this.f["name"].value!);
        formData.append("email", this.f["email"].value!.email);
        formData.append("phone", this.f["phone"].value!);
        formData.append("priority", this.f["priority"].value!);
        formData.append("peopleNumber", this.f["peopleNumber"].value!);

        const response = await this.virtualLineService.createLinePosition(formData);

        this.toastService.add(response);
        this.virtualLineForm.reset();
    }

    get f(): { [key: string]: AbstractControl } {
        return this.virtualLineForm.controls;
    }
}
