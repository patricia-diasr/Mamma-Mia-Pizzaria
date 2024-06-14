import { Component } from '@angular/core';
import { MenuItemCardComponent } from "./menu-item-card/menu-item-card.component";

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [MenuItemCardComponent]
})
export class MenuComponent {
data: any;

}
