import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';


import { AppComponent } from './app.component';
import { articleItemComponent } from './components/article-item/article-item.component';
import { articleListComponent } from './components/article-list/article-list.component';

import { reducers, metaReducers } from './store/reducers';
import { articleSelectedComponent } from './components/article-selected/article-selected.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { ArticleService } from './article.service';
import { HttpRequestor } from './common/http-requestor';
import { HttpClientModule } from '@angular/common/http';

export const MATERIAL_MODULES = [
  MatToolbarModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  declarations: [
    AppComponent,
    articleItemComponent,
    articleListComponent,
    articleSelectedComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ...MATERIAL_MODULES,
    StoreModule.forRoot(reducers, { metaReducers }),
    HttpClientModule,
  ],
  providers: [
    ArticleService,
    HttpRequestor
],
  bootstrap: [AppComponent]
})
export class AppModule { }
