import { Inject, Injectable, InjectionToken, Optional } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { asyncScheduler, empty, Observable, of, defer } from 'rxjs';
import {
  catchError,
  debounceTime,
  map,
  skip,
  switchMap,
  takeUntil,
  toArray,
  mergeMap,
} from 'rxjs/operators';

import { GoogleBooksService } from '../../services/google-books.service';
import {
  BookActionTypes,
  Search,
  SearchComplete,
  SearchError,
  LoadSuccess,
  LoadFail,
  AddBookSuccess,
  AddBookFail,
  AddBook,
  RemoveBook,
  RemoveBookSuccess,
  RemoveBookFail,
} from './book.actions';
import { Book } from '../../shared/models/book';
import { Scheduler } from 'rxjs/internal/Scheduler';
import { Database } from '@ngrx/db';

export const SEARCH_DEBOUNCE = new InjectionToken<number>('Search Debounce');
export const SEARCH_SCHEDULER = new InjectionToken<Scheduler>(
  'Search Scheduler'
);

/**
 * Effects offer a way to isolate and easily test side-effects within your
 * application.
 *
 * If you are unfamiliar with the operators being used in these examples, please
 * check out the sources below:
 *
 * Official Docs: http://reactivex.io/rxjs/manual/overview.html#categories-of-operators
 * RxJS 5 Operators By Example: https://gist.github.com/btroncone/d6cf141d6f2c00dc6b35
 */

@Injectable()
export class BookEffects {
  @Effect()
  search$: Observable<Action> = this.actions$.pipe(
    ofType<Search>(BookActionTypes.Search),
    debounceTime(this.debounce || 300, this.scheduler || asyncScheduler),
    map(action => action.payload),
    switchMap(query => {
      if (query === '') {
        return empty();
      }

      const nextSearch$ = this.actions$.pipe(
        ofType(BookActionTypes.Search),
        skip(1)
      );

      return this.googleBooks
        .searchBooks(query)
        .pipe(
          takeUntil(nextSearch$),
          map((books: Book[]) => new SearchComplete(books)),
          catchError(err => of(new SearchError(err)))
        );
    })
  );

  @Effect({ dispatch: false })
  openDB$: Observable<any> = defer(() => {
    return this.db.open('books_app');
  });

  @Effect()
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(BookActionTypes.Load),
    switchMap(() =>
      this.db
        .query('books')
        .pipe(
          toArray(),
          map((books: Book[]) => new LoadSuccess(books)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );

  @Effect()
  addBookToCollection$: Observable<Action> = this.actions$.pipe(
    ofType<AddBook>(BookActionTypes.AddBook),
    map(action => action.payload),
    mergeMap(book =>
      this.db
        .insert('books', [book])
        .pipe(
          map(() => new AddBookSuccess(book)),
          catchError(() => of(new AddBookFail(book)))
        )
    )
  );

  @Effect()
  removeBookFromCollection$: Observable<Action> = this.actions$.pipe(
    ofType<RemoveBook>(BookActionTypes.RemoveBook),
    map(action => action.payload),
    mergeMap(book =>
      this.db
        .executeWrite('books', 'delete', [book.id])
        .pipe(
          map(() => new RemoveBookSuccess(book)),
          catchError(() => of(new RemoveBookFail(book)))
        )
    )
  );

  constructor(
    private actions$: Actions,
    private googleBooks: GoogleBooksService,
    private db: Database,
    @Optional()
    @Inject(SEARCH_DEBOUNCE)
    private debounce: number,
    /**
     * You inject an optional Scheduler that will be undefined
     * in normal application usage, but its injected here so that you can mock out
     * during testing using the RxJS TestScheduler for simulating passages of time.
     */
    @Optional()
    @Inject(SEARCH_SCHEDULER)
    private scheduler: Scheduler
  ) {}
}
