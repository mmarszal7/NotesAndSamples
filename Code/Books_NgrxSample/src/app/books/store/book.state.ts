import { Book } from '../../shared/models/book';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface SingleBooksState extends EntityState<Book> {
    selectedBookId: string | null;
}

export const adapter: EntityAdapter<Book> = createEntityAdapter<Book>({
    selectId: (book: Book) => book.id,
    sortComparer: false,
});

export const booksInitialState: SingleBooksState = adapter.getInitialState({
    selectedBookId: null,
});

export interface SearchBookState {
    ids: string[];
    loading: boolean;
    error: string;
    query: string;
}

export const searchBookInitialState: SearchBookState = {
    ids: [],
    loading: false,
    error: '',
    query: '',
};

export interface BookCollectionState {
    loaded: boolean;
    loading: boolean;
    ids: string[];
}

export const bookCollectionInitialState: BookCollectionState = {
    loaded: false,
    loading: false,
    ids: [],
};

export interface BooksState {
    search: SearchBookState;
    books: SingleBooksState;
    collection: BookCollectionState;
}
