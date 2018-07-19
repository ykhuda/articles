import { Injectable } from '@angular/core';
import { HttpRequestor } from './common/http-requestor';
import { Constants } from './common/constants';
import { Articles } from './models/articleN';

export let ARTICLES: Articles[] = [];

@Injectable()
export class ArticleService {
  
  constructor (public httpRequestor: HttpRequestor) { }

  public getBussinessArticle(): Promise<any> {
    return this.httpRequestor.getRequest(Constants.BussinessArticle).then( data => {
      ARTICLES = data.articles;
      console.log(ARTICLES);
      return data.article;
    });
  }

}