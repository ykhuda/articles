import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { article, List } from './models';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as articleAction from './store/actions/article';
import { ArticleService } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  articles$: Observable<article[]>;
  selected$: Observable<article>;
  articles: Observable<article[]>;
	lists: Observable<List[]>;
  

  constructor(private store: Store<fromRoot.State>, private articleService: ArticleService) {
    this.articles$ = store.select(fromRoot.getAllarticles);
    this.selected$ = store.select(fromRoot.getSelectedarticle);
  }

  ngOnInit() {
		this.articleService.getBussinessArticle().then((data)=> {
      this.articles = data;
			this.store.dispatch(new articleAction.Select(0));
			console.log( this.articles );
		});
	}

  onSelect(id: number) {
    this.store.dispatch(new articleAction.Select(id));
  }
}
