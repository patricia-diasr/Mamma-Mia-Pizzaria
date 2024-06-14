import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ReservationDetailComponent } from './pages/reservation-detail/reservation-detail.component';
import { MenuComponent } from './pages/menu/menu.component';
import { VirtualLineComponent } from './pages/virtual-line/virtual-line.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cardapio', component: MenuComponent },
    { path: 'reserva', component: ReservationComponent },
    { path: 'minha-reserva', component: ReservationDetailComponent },
    { path: 'fila', component: VirtualLineComponent },
    { path: '**', redirectTo: 'home' }
];
