import {
  Component, OnInit, Input, OnChanges, Output,
  EventEmitter
} from '@angular/core';
import { article } from '../../models';


@Component({
  selector: 'app-article-list',
  template: `
    <mat-list role="list">
      <mat-list-item  *ngFor="let article of articles" role="listitem" (click)="select.emit(article.id)">
        <app-article-item  [article]="article"></app-article-item>
      </mat-list-item>
    </mat-list>


  `,
  styles: [`
  mat-list-item:hover {
    background-color: #ccc;
  }
  `]
})
export class articleListComponent implements OnInit, OnChanges {
  @Input() articles: article[];
  @Input() label: string;
  @Output() select = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes) {
  }

}
