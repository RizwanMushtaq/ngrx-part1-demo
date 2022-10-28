export interface Article {
  articleImage: Image;
  cardImage: Image;
  category: string;
  date: string;
  title: string;
}

export interface Image {
  fields: {
    description: '';
    file: '';
    title: '';
  };
}
