import { Component, Input } from '@angular/core';
import { ArticleEventData } from '../article/article.component';

export interface parentArray {
  id: number;
  articulo: string;
  imgArticle: string;
  price: number;
  onSale: boolean;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent {
  idArticle: number = 0;
  actualId: { id: number; count: number }[] = [];
  isOnSale: {} = [];
  arrayParent: parentArray[] = [
    { id: 1, articulo: 'Sandía', imgArticle: "https://cdn.pixabay.com/photo/2017/08/03/17/57/gummy-watermelon-2577632_1280.jpg", price: 0.10, onSale: true },
    { id: 2, articulo: 'Ositos', imgArticle: "https://cdn.pixabay.com/photo/2013/11/01/21/17/jellies-204206_1280.jpg", price: 0.05, onSale: true },
    { id: 3, articulo: 'Piruletas', imgArticle: "https://cdn.pixabay.com/photo/2022/12/26/12/02/candies-7678910_1280.jpg", price: 1, onSale: false }
  ];

  public objectChild($event: ArticleEventData): void {
    if ($event.operation === 'sum') {
      const existingItem = this.actualId.find(e => e.id === $event.articulo);
      if (!existingItem) {
        this.actualId.push({ id: $event.articulo, count: 1 })
      } else {
        existingItem.count += 1;
      }
    } else if ($event.operation === 'res') {
      const existingItem = this.actualId.find(e => e.id === $event.articulo);
      if (!existingItem) {
        this.actualId.push({ id: $event.articulo, count: 1 });
      } else {
        if (existingItem.count > 0) {
          existingItem.count -= 1;
        }
      }
    }
  }
}