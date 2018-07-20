import {Component, OnInit} from '@angular/core';
import { NgRedux } from '@angular-redux/store';
import {ArticleService} from './article.service';
import {IAppState} from './store/store';
import { SET_ARTICLES } from './store/actions';
import {isUndefined} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  title = 'app';
  isArticles: boolean = true;

  constructor(private ngRedux: NgRedux<IAppState>, private articleService: ArticleService) {
  }


  ngOnInit() {
    this.articleService.getBussinessArticle().then((data) => {
      if ( !isUndefined(data)) {
        this.ngRedux.dispatch({type: SET_ARTICLES, articles: data});
      }

      console.log( data );
    });
  }
}
