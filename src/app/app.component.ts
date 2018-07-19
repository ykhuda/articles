import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Film } from './models';
import { Store } from '@ngrx/store';
import * as fromRoot from './store/reducers';
import * as filmAction from './store/actions/films';
import { ArticleService, ARTICLES } from './article.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  films$: Observable<Film[]>;
  selected$: Observable<Film>;

  constructor(private store: Store<fromRoot.State>, private articleService: ArticleService) {
    this.films$ = store.select(fromRoot.getAllFilms);
    this.selected$ = store.select(fromRoot.getSelectedFilm);
    this.articleService.getBussinessArticle().then(()=> {
			this.store.dispatch(new filmAction.Select(0));
			console.log("this.articles");
		});
  }

  onSelect(id: number) {
    this.store.dispatch(new filmAction.Select(id));
  }
}
