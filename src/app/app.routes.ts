import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ReservationDetailComponent } from './pages/reservation-detail/reservation-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cardapio', component: HomeComponent },
    { path: 'reserva', component: ReservationComponent },
    { path: 'minha-reserva', component: ReservationDetailComponent },
    { path: 'fila', component: HomeComponent },
    { path: '**', redirectTo: 'home' }
];
