import { createSelector } from '@ngrx/store';
import { AppState, LayoutState } from './app.state';

export const getLayoutState = (state: AppState) => {
    return state.layoutState;
};

export const getShowSidenav = createSelector(
    getLayoutState,
    (state: LayoutState) => state.showSidenav
);
