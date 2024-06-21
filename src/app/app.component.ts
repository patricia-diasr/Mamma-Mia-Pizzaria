import { DEFAULT_CURRENCY_CODE, LOCALE_ID, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';

import ptBr from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { ToastComponent } from "./components/toast/toast.component";

registerLocaleData(ptBr);

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    providers: [
        { provide: LOCALE_ID, useValue: 'pt' },
        { provide: DEFAULT_CURRENCY_CODE, useValue: 'BRL' },
    ],
    imports: [
        CommonModule,
        RouterOutlet,
        HeaderComponent,
        FooterComponent,
        ToastComponent
    ]
})
export class AppComponent {
  title = 'Mamma-Mia-Pizzaria';

}
