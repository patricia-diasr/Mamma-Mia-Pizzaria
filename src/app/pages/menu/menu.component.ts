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
    pizzas: Item[] = [
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
    ];

    pastas: Item[] = [
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
    ];

    appetizers: Item[] = [
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
    ];

    desserts: Item[] = [
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
    ];

    drinks: Item[] = [
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
        {
            name: "Nome do Produto",
            price: 10,
            description: "Descrição do Produto",
            image: "../../../../assets/images/pizza-menu-item.png",
            imageDescription: "Descrição da Imagem"
        },
    ];

    itemDetail!: Item;

    openItem(item: Item): void {
        this.itemDetail = item;
    }
}
