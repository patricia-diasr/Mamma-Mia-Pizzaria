import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cardapio', component: HomeComponent },
    { path: 'reserva', component: ReservationComponent },
    { path: 'fila', component: HomeComponent },
    { path: '**', redirectTo: '' }
];
