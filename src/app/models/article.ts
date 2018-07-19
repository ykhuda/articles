export interface article {
    source: {
        id: string,
        name: string
    },
    author: string,
    title: string,
    description: string,
    url: string,
    urlToImage: string,
    publishedAt: string
}

export interface List {
    name: string,
    desc: string,
    articles: article[]
};