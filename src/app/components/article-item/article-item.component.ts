import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { article } from '../../models';

@Component({
  selector: 'app-article-item',
  template: `
    <div>{{article.name}}</div>
  `,
  styles: [`
  div {
    width: 100%;
    height: 100%;
  }`]
})
export class articleItemComponent implements OnInit {
  @Input() article: article;

  constructor() { }

  ngOnInit() {
  }

}
