import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { MenuItemCardComponent } from "./menu-item-card/menu-item-card.component";
import { Item } from "../../interfaces/Item";
import { MenuItemDetailComponent } from "./menu-item-detail/menu-item-detail.component";
import { MenuService } from "../../services/menu.service";

@Component({
    selector: "app-menu",
    standalone: true,
    templateUrl: "./menu.component.html",
    styleUrl: "./menu.component.scss",
    imports: [CommonModule, MenuItemCardComponent, MenuItemDetailComponent],
})
export class MenuComponent {
    allItems: Item[] = [];
    pizzas: Item[] = [];
    pastas: Item[] = [];
    appetizers: Item[] = [];
    desserts: Item[] = [];
    drinks: Item[] = [];

    itemDetail: Item = {
        name: "",
        description: "",
        price: 0,
        image: "",
        imageDescription: "",
        category: "",
    };

    constructor(private menuService: MenuService) {}

    ngOnInit() {
        this.menuService.getItems().subscribe(
            (items) => {
                this.allItems = items;
                this.pizzas = this.filterItemsByCategory("pizza");
                this.pastas = this.filterItemsByCategory("pasta");
                this.appetizers = this.filterItemsByCategory("appetizer");
                this.desserts = this.filterItemsByCategory("dessert");
                this.drinks = this.filterItemsByCategory("drink");
            },
            (error) => {
                console.error("Error fetching menu items", error);
            }
        );
    }

    filterItemsByCategory(category: string): Item[] {
        return this.allItems.filter((item) => item.category.toLowerCase() === category);
    }

    openItem(item: Item): void {
        this.itemDetail = item;
    }
}
