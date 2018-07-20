export interface IArticle {
  id: number;
  isAdded:boolean;
  source: {
    id: string,
    name: string
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
}
