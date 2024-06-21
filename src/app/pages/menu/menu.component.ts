import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItemCardComponent } from "./menu-item-card/menu-item-card.component";
import { Item } from '../../interfaces/Item';
import { MenuItemDetailComponent } from "./menu-item-detail/menu-item-detail.component";
import { MenuService } from '../../services/menu.service';

@Component({
    selector: 'app-menu',
    standalone: true,
    templateUrl: './menu.component.html',
    styleUrl: './menu.component.scss',
    imports: [
        CommonModule,
        MenuItemCardComponent,
        MenuItemDetailComponent
    ]
})
export class MenuComponent {
    allItems: Item[] = [];
    pizzas: Item[] = [];
    pastas: Item[] = [];
    appetizers: Item[] = [];
    desserts: Item[] = [];
    drinks: Item[] = [];

    itemDetail!: Item;

    constructor(private menuService: MenuService) {}

    ngOnInit() {
        this.allItems = this.menuService.getItems();
        this.pizzas = this.allItems.filter(item => item.category === "pizza");
        this.pastas = this.allItems.filter(item => item.category === "pasta");
        this.appetizers = this.allItems.filter(item => item.category === "appetizer");
        this.desserts = this.allItems.filter(item => item.category === "dessert");
        this.drinks = this.allItems.filter(item => item.category === "drink");
    }

    openItem(item: Item): void {
        this.itemDetail = item;
    }
}
