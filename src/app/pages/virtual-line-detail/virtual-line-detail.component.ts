import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { WaitingTimeComponent } from "../../components/waiting-time/waiting-time.component";

@Component({
    selector: 'app-virtual-line-detail',
    standalone: true,
    templateUrl: './virtual-line-detail.component.html',
    styleUrl: './virtual-line-detail.component.scss',
    imports: [
        CommonModule,
        WaitingTimeComponent
    ]
})
export class VirtualLineDetailComponent {

}
