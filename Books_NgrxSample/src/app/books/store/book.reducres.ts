import { BookActionTypes, BookActionsUnion } from './book.actions';
import {
    SingleBooksState,
    booksInitialState,
    adapter,
    BookCollectionState,
    bookCollectionInitialState,
    SearchBookState,
    searchBookInitialState,
    BooksState
} from './book.state';
import { ActionReducerMap } from '@ngrx/store';


export function booksReducer(
    state = booksInitialState,
    action: BookActionsUnion
): SingleBooksState {
    switch (action.type) {
        case BookActionTypes.SearchComplete:
        case BookActionTypes.LoadSuccess: {
            /**
             * The addMany function provided by the created adapter
             * adds many records to the entity dictionary
             * and returns a new state including those records. If
             * the collection is to be sorted, the adapter will
             * sort each record upon entry into the sorted array.
             */
            return adapter.addMany(action.payload, {
                ...state,
                selectedBookId: state.selectedBookId,
            });
        }

        case BookActionTypes.Load: {
            /**
             * The addOne function provided by the created adapter
             * adds one record to the entity dictionary
             * and returns a new state including that records if it doesn't
             * exist already. If the collection is to be sorted, the adapter will
             * insert the new record into the sorted array.
             */
            return adapter.addOne(action.payload, {
                ...state,
                selectedBookId: state.selectedBookId,
            });
        }

        case BookActionTypes.Select: {
            return {
                ...state,
                selectedBookId: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

export function bookCollectionReducer(
    state = bookCollectionInitialState,
    action: BookActionsUnion
): BookCollectionState {
    switch (action.type) {
        case BookActionTypes.Load: {
            return {
                ...state,
                loading: true,
            };
        }

        case BookActionTypes.LoadSuccess: {
            return {
                loaded: true,
                loading: false,
                ids: action.payload.map(book => book.id),
            };
        }

        case BookActionTypes.AddBookSuccess:
        case BookActionTypes.RemoveBookFail: {
            if (state.ids.indexOf(action.payload.id) > -1) {
                return state;
            }

            return {
                ...state,
                ids: [...state.ids, action.payload.id],
            };
        }

        case BookActionTypes.RemoveBookSuccess:
        case BookActionTypes.AddBookFail: {
            return {
                ...state,
                ids: state.ids.filter(id => id !== action.payload.id),
            };
        }

        default: {
            return state;
        }
    }
}

export function searchBookReducer(state = searchBookInitialState, action: BookActionsUnion): SearchBookState {
    switch (action.type) {
        case BookActionTypes.Search: {
            const query = action.payload;

            if (query === '') {
                return {
                    ids: [],
                    loading: false,
                    error: '',
                    query,
                };
            }

            return {
                ...state,
                loading: true,
                error: '',
                query,
            };
        }

        case BookActionTypes.SearchComplete: {
            return {
                ids: action.payload.map(book => book.id),
                loading: false,
                error: '',
                query: state.query,
            };
        }

        case BookActionTypes.SearchError: {
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        }

        default: {
            return state;
        }
    }
}

export const reducers: ActionReducerMap<BooksState> = {
    search: searchBookReducer,
    books: booksReducer,
    collection: bookCollectionReducer,
};
