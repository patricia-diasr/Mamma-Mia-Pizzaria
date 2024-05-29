import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  items = ['item 1', 'item 2', 'item 3', 'item 4', 'item 5'];
  currentIndex = 0;
  visibleItemsCount!: number;

  constructor() {
    this.updateVisibleItemsCount(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateVisibleItemsCount(event.target.innerWidth);
  }

  private updateVisibleItemsCount(windowWidth: number) {
    if (windowWidth < 768) {
      this.visibleItemsCount = 1;
    } else if (windowWidth < 992) {
      this.visibleItemsCount = 2;
    } else {
      this.visibleItemsCount = 3;
    }
  }


  nextSlide() {
    if (this.currentIndex < this.items.length) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
  }

  prevSlide() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.items.length;
    }
  }

  visibleItems(){
    const itemsToShow = [];
    const currentIndex = this.currentIndex;
    for (let i = 0; i < this.visibleItemsCount; i++) {
        const index = (currentIndex + i) % this.items.length;
        itemsToShow.push(this.items[index]);
    }
    return itemsToShow;
  }

}
