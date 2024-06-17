import { Component, Input } from '@angular/core';
import { NgCircleProgressConfigModule } from '../ng-circle-progress-module/ng-circle-progress-module.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-waiting-time',
  standalone: true,
  imports: [ 
    CommonModule,
    NgCircleProgressConfigModule, 
    RouterModule
  ],
  templateUrl: './waiting-time.component.html',
  styleUrl: './waiting-time.component.scss'
})
export class WaitingTimeComponent {
  @Input() showCallToAction: boolean = false;

}
