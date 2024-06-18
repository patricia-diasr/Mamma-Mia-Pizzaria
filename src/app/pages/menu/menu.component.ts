import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MenuItemCardComponent } from "./menu-item-card/menu-item-card.component";
import { Item } from '../../interfaces/Item';
import { MenuItemDetailComponent } from "./menu-item-detail/menu-item-detail.component";

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
    pizzaItems: Item[] = [
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "Imagem do Produto"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "Imagem do Produto"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "Imagem do Produto"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "Imagem do Produto"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "Imagem do Produto"
        },
    ];

    itemDetail: Item | undefined;

    openItem(item: Item) {
        this.itemDetail = item;
    }
}
