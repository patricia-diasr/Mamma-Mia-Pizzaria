import { Component } from '@angular/core';
import { ToastComponent } from '../toast/toast.component';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-footer',
    standalone: true,
    templateUrl: './footer.component.html',
    styleUrl: './footer.component.scss',
    imports: [
      CommonModule,
      ToastComponent
    ]
})
export class FooterComponent {
  showToast: boolean = false;

  copyText(text: string): void {
    navigator.clipboard.writeText(text)
        .then(() => {
          this.showToast = true;
          setTimeout(() => this.showToast = false, 2500);
        })
        .catch(err => console.error('Error copying text: ', err));
  }
}
