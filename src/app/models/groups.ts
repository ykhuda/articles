import {IArticle} from "./article";

export interface IGroup {
  id: number;
  name: string;
  articles: IArticle[];
}
