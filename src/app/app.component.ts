import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Observable, Subscription } from 'rxjs';
import { selectBookCollection, selectBooks } from './store/books.selectors';

import { Store } from '@ngrx/store';
import { GoogleBooksService } from './books.service';
import { addBook, removeBook, retrievedBookList } from './store/books.actions';
import { Book } from './types/books.model';
import { ContentfulService } from './contentful.service';
import { Entry } from 'contentful';
import { Article } from './types/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  books$: Observable<ReadonlyArray<Book>> = this.store.select(selectBooks);
  bookCollection$: Observable<any> = this.store.select(selectBookCollection);

  public articles: Entry<Article>[] = [];

  constructor(
    private appService: AppService,
    private booksService: GoogleBooksService,
    private contentfulService: ContentfulService,
    private store: Store
  ) {}

  universityListSubscription: Subscription;

  ngOnInit() {
    // this.universityListSubscription = this.appService
    //   .getUniversityList()
    //   .subscribe({
    //     next: (data) => {
    //       console.log(data);
    //     },
    //     error: (err) => console.log(err),
    //   });

    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));

    this.contentfulService.getProducts().then((products) => {
      this.articles = products;
      console.log(this.articles);
    });
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  ngOnDestroy() {
    this.universityListSubscription?.unsubscribe();
  }
}
