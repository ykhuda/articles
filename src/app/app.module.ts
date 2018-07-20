import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgRedux, NgReduxModule } from '@angular-redux/store';

import { AppComponent } from './app.component';
import { TodoOverviewComponent } from './components/todo-overview/todo-overview.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

import { IAppState, rootReducer, INITIAL_STATE } from './store/store';

import { ArticleService } from './article.service';
import { HttpRequestor } from './common/http-requestor';
import { HttpClientModule } from '@angular/common/http';
import { GroupListComponent } from './components/group-list/group-list.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoOverviewComponent,
    ArticleListComponent,
    GroupListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgReduxModule,
    HttpClientModule
  ],
  providers: [ArticleService,
    HttpRequestor],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
