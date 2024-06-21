import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastService } from '../../services/toast.service';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [CommonModule]
})
export class FooterComponent {
  constructor(private toastService: ToastService) {}

  copyText(text: string): void {
    navigator.clipboard.writeText(text)
        .then(() => {
          this.toastService.add("Texto copiado");
        })
        .catch(err => console.error('Error copying text: ', err));
  }
}
