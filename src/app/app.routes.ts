import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'cardapio', component: HomeComponent },
    { path: 'reserva', component: HomeComponent },
    { path: 'fila', component: HomeComponent },
    { path: '**', redirectTo: '' }
];
