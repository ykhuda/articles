import { Injectable } from '@angular/core';
import { HttpRequestor } from './common/http-requestor';
import { Constants } from './common/constants';
import { article } from './models/article';
import {AppStore} from './app.store';

@Injectable()
export class ArticleService {
  private appStore:AppStore;
  constructor (public httpRequestor: HttpRequestor ) {
    this.appStore = AppStore.getInstance();
   }

  public getBussinessArticle(): Promise<any> {
    return this.httpRequestor.getRequest(Constants.BussinessArticle).then( data => {
      this.appStore.articles = data.articles;
      return data.articles;
    });
  }

}