import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';

import * as CollectionActions from '../store/book.actions';
import { Book } from '../../shared/models/book';
import { BooksState } from '../store/book.state';
import { getSelectedBook, isSelectedBookInCollection } from '../store/book.selectors';

@Component({
    selector: 'bc-selected-book-page',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
    <bc-book-detail
      [book]="book$ | async"
      [inCollection]="isSelectedBookInCollection$ | async"
      (add)="addToCollection($event)"
      (remove)="removeFromCollection($event)">
    </bc-book-detail>
  `,
})
export class SelectedBookPageComponent {
    book$: Observable<Book>;
    isSelectedBookInCollection$: Observable<boolean>;

    constructor(private store: Store<BooksState>) {
        this.book$ = store.pipe(select(getSelectedBook)) as Observable<
            Book
            >;
        this.isSelectedBookInCollection$ = store.pipe(
            select(isSelectedBookInCollection)
        );
    }

    addToCollection(book: Book) {
        this.store.dispatch(new CollectionActions.AddBook(book));
    }

    removeFromCollection(book: Book) {
        this.store.dispatch(new CollectionActions.RemoveBook(book));
    }
}
