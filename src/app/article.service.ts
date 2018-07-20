import { Injectable } from '@angular/core';
import { HttpRequestor } from './common/http-requestor';
import { Constants } from './common/constants';


@Injectable()
export class ArticleService {

  constructor (public httpRequestor: HttpRequestor) { }

  public getBussinessArticle(): Promise<any> {
    return this.httpRequestor.getRequest(Constants.BussinessArticle).then( data => {
      return data.articles;
    });
  }

}
