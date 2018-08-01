import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BooksState, BookCollectionState, SearchBookState, SingleBooksState, adapter } from './book.state';

export const getBooksState = createFeatureSelector<BooksState>('books');

export const getBookEntitiesState = createSelector(
    getBooksState,
    (state: BooksState) => state.books
);

export const getSelectedBookId = createSelector(
    getBookEntitiesState,
    (state: SingleBooksState) => state.selectedBookId
);

export const {
    selectIds: getBookIds,
    selectEntities: getBookEntities,
    selectAll: getAllBooks,
    selectTotal: getTotalBooks,
} = adapter.getSelectors(getBookEntitiesState);

export const getSelectedBook = createSelector(
    getBookEntities,
    getSelectedBookId,
    (entities, selectedId) => {
        return selectedId && entities[selectedId];
    }
);

export const getSearchState = createSelector(
    getBooksState,
    (state: BooksState) => state.search
);

export const getSearchBookIds = createSelector(
    getSearchState,
    (state: SearchBookState) => state.ids
);
export const getSearchQuery = createSelector(
    getSearchState,
    (state: SearchBookState) => state.query
);
export const getSearchLoading = createSelector(
    getSearchState,
    (state: SearchBookState) => state.loading
);
export const getSearchError = createSelector(
    getSearchState,
    (state: SearchBookState) => state.error
);

export const getSearchResults = createSelector(
    getBookEntities,
    getSearchBookIds,
    (books, searchIds) => {
        return searchIds.map(id => books[id]);
    }
);

export const getCollectionState = createSelector(
    getBooksState,
    (state: BooksState) => state.collection
);
export const getCollectionLoaded = createSelector(
    getCollectionState,
    (state: BookCollectionState) => state.loaded
);
export const getCollectionLoading = createSelector(
    getCollectionState,
    (state: BookCollectionState) => state.loading
);
export const getCollectionBookIds = createSelector(
    getCollectionState,
    (state: BookCollectionState) => state.ids
);

export const getBookCollection = createSelector(
    getBookEntities,
    getCollectionBookIds,
    (entities, ids) => {
        return ids.map(id => entities[id]);
    }
);

export const isSelectedBookInCollection = createSelector(
    getCollectionBookIds,
    getSelectedBookId,
    (ids, selected) => {
        return ids.indexOf(selected) > -1;
    }
);
