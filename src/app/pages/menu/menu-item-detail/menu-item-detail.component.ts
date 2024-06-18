import { Component, Input } from '@angular/core';
import { Item } from '../../../interfaces/Item';

@Component({
  selector: 'app-menu-item-detail',
  standalone: true,
  imports: [],
  templateUrl: './menu-item-detail.component.html',
  styleUrl: './menu-item-detail.component.scss'
})
export class MenuItemDetailComponent {
  @Input() item!: Item | undefined;
}
