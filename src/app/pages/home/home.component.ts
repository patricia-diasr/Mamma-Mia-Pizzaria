import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { MenuComponent } from './menu/menu.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    AboutComponent,
    MenuComponent,
    ReservationComponent,
    ContactComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
