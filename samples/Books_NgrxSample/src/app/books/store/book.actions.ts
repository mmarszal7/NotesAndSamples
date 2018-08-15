import { Action } from '@ngrx/store';
import { Book } from '../../shared/models/book';

export enum BookActionTypes {
  Search = '[Book] Search',
  SearchComplete = '[Book] Search Complete',
  SearchError = '[Book] Search Error',
  Load = '[Book] Load',
  Select = '[Book] Select',
  AddBook = '[Collection] Add Book',
  AddBookSuccess = '[Collection] Add Book Success',
  AddBookFail = '[Collection] Add Book Fail',
  RemoveBook = '[Collection] Remove Book',
  RemoveBookSuccess = '[Collection] Remove Book Success',
  RemoveBookFail = '[Collection] Remove Book Fail',
  LoadCollection = '[Collection] Load',
  LoadSuccess = '[Collection] Load Success',
  LoadFail = '[Collection] Load Fail',
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 *
 * See Discriminated Unions: https://www.typescriptlang.org/docs/handbook/advanced-types.html#discriminated-unions
 */
export class Search implements Action {
  readonly type = BookActionTypes.Search;

  constructor(public payload: string) {}
}

export class SearchComplete implements Action {
  readonly type = BookActionTypes.SearchComplete;

  constructor(public payload: Book[]) {}
}

export class SearchError implements Action {
  readonly type = BookActionTypes.SearchError;

  constructor(public payload: string) {}
}

export class Load implements Action {
  readonly type = BookActionTypes.Load;

  constructor(public payload: Book) {}
}

export class Select implements Action {
  readonly type = BookActionTypes.Select;

  constructor(public payload: string) {}
}

/**
 * Add Book to Collection Actions
 */
export class AddBook implements Action {
    readonly type = BookActionTypes.AddBook;

    constructor(public payload: Book) {}
  }

  export class AddBookSuccess implements Action {
    readonly type = BookActionTypes.AddBookSuccess;

    constructor(public payload: Book) {}
  }

  export class AddBookFail implements Action {
    readonly type = BookActionTypes.AddBookFail;

    constructor(public payload: Book) {}
  }

  /**
   * Remove Book from Collection Actions
   */
  export class RemoveBook implements Action {
    readonly type = BookActionTypes.RemoveBook;

    constructor(public payload: Book) {}
  }

  export class RemoveBookSuccess implements Action {
    readonly type = BookActionTypes.RemoveBookSuccess;

    constructor(public payload: Book) {}
  }

  export class RemoveBookFail implements Action {
    readonly type = BookActionTypes.RemoveBookFail;

    constructor(public payload: Book) {}
  }

  /**
   * Load Collection Actions
   */
  export class LoadCollection implements Action {
    readonly type = BookActionTypes.LoadCollection;
  }

  export class LoadSuccess implements Action {
    readonly type = BookActionTypes.LoadSuccess;

    constructor(public payload: Book[]) {}
  }

  export class LoadFail implements Action {
    readonly type = BookActionTypes.LoadFail;

    constructor(public payload: any) {}
  }

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type BookActionsUnion =
  | Search
  | SearchComplete
  | SearchError
  | Load
  | Select
  | AddBook
  | AddBookSuccess
  | AddBookFail
  | RemoveBook
  | RemoveBookSuccess
  | RemoveBookFail
  | LoadCollection
  | LoadSuccess
  | LoadFail;
