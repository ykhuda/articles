import { Component, OnInit, Input } from '@angular/core';
import { article } from '../../models';

@Component({
  selector: 'app-article-selected',
  template: `
    <mat-card *ngIf="article && article.name">
      <mat-card-header>
        <mat-card-title>{{article.name}}</mat-card-title>
      </mat-card-header>
      <img mat-card-image src="{{article.img}}" alt="article image">
      <mat-card-content>
        <p>{{article.description}}</p>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
  mat-card {
    margin-top: 14px;
    width: 700px;
  }
  `]
})
export class articleSelectedComponent implements OnInit {
  @Input() article: article;
  constructor() { }

  ngOnInit() {
  }

}
