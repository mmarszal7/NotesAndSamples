import { ChangeDetectionStrategy, Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import * as BookActions from '../store/book.actions';
import { Book } from '../../shared/models/book';
import { getSearchResults, getSearchLoading, getSearchError, getSearchQuery } from '../store/book.selectors';
import { BooksState } from '../store/book.state';

@Component({
  selector: 'bc-find-book-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <bc-book-search [query]="searchQuery$ | async" [searching]="loading$ | async" [error]="error$ | async" (search)="search($event)"></bc-book-search>
    <bc-book-preview-list [books]="books$ | async"></bc-book-preview-list>
  `,
})
export class FindBookPageComponent {
  searchQuery$: Observable<string>;
  books$: Observable<Book[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(private store: Store<BooksState>) {
    this.searchQuery$ = store.pipe(select(getSearchQuery), take(1));
    this.books$ = store.pipe(select(getSearchResults));
    this.loading$ = store.pipe(select(getSearchLoading));
    this.error$ = store.pipe(select(getSearchError));
  }

  search(query: string) {
    this.store.dispatch(new BookActions.Search(query));
  }
}
