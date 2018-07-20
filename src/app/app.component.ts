import {Component, OnInit} from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import {ArticleService} from './article.service';
import {IAppState} from './store/store';
import { SET_ARTICLES } from './store/actions';
import {isUndefined} from 'util';
import {Observable} from 'rxjs/Observable';
import {IGroup} from './models/groups';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {
  @select() selectedGroup$: Observable<IGroup>;
  selectedGroup: IGroup;
  isArticles: boolean = true;

  constructor(private ngRedux: NgRedux<IAppState>, private articleService: ArticleService) {
  }

  ngOnInit() {

    this.selectedGroup$.subscribe(selectedGroup => this.selectedGroup = selectedGroup)

    this.articleService.getBussinessArticle().then((data) => {
      if ( !isUndefined(data)) {
        for(let i = 0; i < data.length; i++){
          data[i].id = i + 1;
          data[i].isAdded = false;
        }
        this.ngRedux.dispatch({type: SET_ARTICLES, articles: data});
      }

      console.log( data );
    });
  }
}
