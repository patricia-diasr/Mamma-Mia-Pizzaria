import { CommonModule } from "@angular/common";
import { Component, HostListener } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
    selector: "app-menu",
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: "./menu.component.html",
    styleUrl: "./menu.component.scss",
})
export class MenuComponent {
    items: { name: string; image: string; description: string }[] = [
        {
            name: "Pizzas",
            image: "../../../assets/images/pizzas.jpg",
            description: "Card com a imagem de uma pizza",
        },
        {
            name: "Vinhos",
            image: "../../../assets/images/vinhos.jpg",
            description: "Card com a imagem de uma taça de vinho sendo servida",
        },
        {
            name: "Sobremesas",
            image: "../../../assets/images/sobremesas.jpg",
            description:
                "Card com a imagem de uma sobremesa com um biscoito e uma bola de sorvete",
        },
        {
            name: "Massas",
            image: "../../../assets/images/massas.jpg",
            description: "Card com a imagem de um prato de macarrão",
        },
        {
            name: "Entradas",
            image: "../../../assets/images/entradas.jpg",
            description: "Card com a imagem de um prato com aperitivos de torradas",
        },
    ];

    currentIndex: number = 0;
    visibleItemsCount: number = 3;

    constructor() {
        this.updateVisibleItemsCount(window.innerWidth);
    }

    @HostListener("window:resize", ["$event"])
    onResize(event: any) {
        this.updateVisibleItemsCount(event.target.innerWidth);
    }

    private updateVisibleItemsCount(windowWidth: number) {
        if (windowWidth < 992) {
            this.visibleItemsCount = 1;
        } else {
            this.visibleItemsCount = 3;
        }
    }

    nextSlide(): void {
        if (this.currentIndex < this.items.length) {
            this.currentIndex++;
        } else {
            this.currentIndex = 0;
        }
    }

    prevSlide(): void {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        } else {
            this.currentIndex = this.items.length;
        }
    }

    visibleItems(): { name: string; image: string; description: string }[] {
        const itemsToShow = [];
        const currentIndex = this.currentIndex;
        for (let i = 0; i < this.visibleItemsCount; i++) {
            const index = (currentIndex + i) % this.items.length;
            itemsToShow.push(this.items[index]);
        }
        return itemsToShow;
    }
}
