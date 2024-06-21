import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { ReservationDetailComponent } from './pages/reservation-detail/reservation-detail.component';
import { MenuComponent } from './pages/menu/menu.component';
import { VirtualLineComponent } from './pages/virtual-line/virtual-line.component';
import { VirtualLineFormComponent } from './pages/virtual-line-form/virtual-line-form.component';
import { VirtualLineDetailComponent } from './pages/virtual-line-detail/virtual-line-detail.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cardapio', component: MenuComponent },
    { path: 'reserva', component: ReservationComponent },
    { path: 'reserva/minha-reserva/:id', component: ReservationDetailComponent },
    { path: 'fila', component: VirtualLineComponent },
    { path: 'fila/entrar', component: VirtualLineFormComponent },
    { path: 'fila/minha-posicao/:id', component: VirtualLineDetailComponent },
    { path: '**', redirectTo: 'home' }
];
