import { Component } from '@angular/core';
import { WaitingTimeComponent } from "../../components/waiting-time/waiting-time.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-virtual-line',
    standalone: true,
    templateUrl: './virtual-line.component.html',
    styleUrl: './virtual-line.component.scss',
    imports: [
        CommonModule,
        WaitingTimeComponent
    ]
})
export class VirtualLineComponent {
    showWaitingTime: Boolean = true;
}
