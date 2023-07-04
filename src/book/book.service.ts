import { Injectable } from '@nestjs/common';

@Injectable()
export class BookService {
  id: number;
  title: string;
  author: string;
  genre: string[];
  publishedYear: number;
  stockAmount: number;
}
