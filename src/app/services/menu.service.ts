import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Item } from '../interfaces/Item';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  private baseApiUrl = environment.baseApiUrl;
  private apiUrl = `${this.baseApiUrl}/api/menu-items`;

  constructor() { }

  getItems(): Item[] {
    return [
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "pizza"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "pizza"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "pizza"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "pasta"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "pasta"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "pasta"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "appetizer"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "appetizer"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "appetizer"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "dessert"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "dessert"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "dessert"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "drink"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "drink"
      },
      {
          name: "Nome do Produto",
          price: 10,
          description: "Descrição do Produto",
          image: "../../../../assets/images/pizza-menu-item.png",
          imageDescription: "Descrição da Imagem",
          category: "drink"
      },
  ];
  }
}
