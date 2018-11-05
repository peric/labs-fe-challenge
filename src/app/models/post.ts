import { Publisher } from './publisher';

export class Post {
  publishers: Publisher[] = [
    { id: 1, name: 'Buford' },
    { id: 2, name: 'Duane' },
    { id: 3, name: 'Hilaria' },
    { id: 4, name: 'Alena' },
    { id: 5, name: 'Lena' },
    { id: 6, name: 'Mary' },
    { id: 7, name: 'Waltraud' },
    { id: 8, name: 'Sharonda' },
    { id: 9, name: 'Jeanett' },
    { id: 10, name: 'Chang' },
  ];

  constructor(id: number, userId: number, title: string, body: string) {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.body = body;
    this.assignAuthor(userId);
  }

  id: number;
  userId: number;
  title: string;
  body: string;
  author: Publisher;

  private assignAuthor(userId: number) {
    let author = this.publishers.find((pub) => {
      return pub.id === userId;
    });

    if (!author) {
      author = new Publisher(userId, 'Unknown');
    }

    this.author = author;
  }
}
