import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../types/books.model';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit {
  @Input() books: ReadonlyArray<Book> | null = [];
  @Output() add = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}
}
