export interface ArticleData {
  data: Article[];
}

export type Article = {
  id: number;
  title: string;
  text: string;
  creation: string;
  image: string;
};
