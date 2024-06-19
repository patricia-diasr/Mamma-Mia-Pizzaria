import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Item } from '../../../interfaces/Item';

@Component({
  selector: 'app-menu-item-card',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './menu-item-card.component.html',
  styleUrl: './menu-item-card.component.scss'
})
export class MenuItemCardComponent {
  @Input() item!: Item;
}
