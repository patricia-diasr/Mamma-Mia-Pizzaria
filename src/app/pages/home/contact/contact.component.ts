import { Component } from "@angular/core";
import {
    FormGroup,
    FormControl,
    Validators,
    ReactiveFormsModule,
    AbstractControl,
} from "@angular/forms";
import { CommonModule } from "@angular/common";
import { ToastService } from "../../../services/toast.service";
import { ContactService } from "../../../services/contact.service";
import { Contact } from "../../../interfaces/Contact";

@Component({
    selector: "app-contact",
    standalone: true,
    imports: [ReactiveFormsModule, CommonModule],
    templateUrl: "./contact.component.html",
    styleUrl: "./contact.component.scss",
})
export class ContactComponent {
    constructor(
        private contactService: ContactService,
        private toastService: ToastService
    ) {}

    contactForm = new FormGroup({
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
        subject: new FormControl("select", [
            Validators.required,
            Validators.pattern(/^(evento|duvida|sugestao|trabalhe-conosco|outro)$/),
        ]),
        message: new FormControl("", [Validators.required, Validators.maxLength(300)]),
    });

    async onSubmit() {
        if (!this.contactForm.valid) {
            return;
        }

        const data: Contact = {
            name: this.f["name"].value!,
            email: this.f["email"].value!,
            phone: this.f["phone"].value!,
            subject: this.f["subject"].value!,
            message: this.f["message"].value!,
        };

        this.contactService.createContact(data).subscribe(
            (response) => {
                console.log("Mensagem enviada com sucesso", response);
                this.toastService.add("Mensagem enviada");
                this.contactForm.reset();
            },
            (error) => {
                console.error("Erro ao enviar mensagem", error);
                this.toastService.add("Erro ao enviar mensagem");
            }
        );
    }

    get f(): { [key: string]: AbstractControl } {
        return this.contactForm.controls;
    }
}
