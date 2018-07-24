import { RouterReducerState } from '@ngrx/router-store';

export interface AppState {
    router: RouterReducerState;
    layoutState: LayoutState;
}

export interface LayoutState {
    showSidenav: boolean;
}

export const initialLayoutState: LayoutState = {
    showSidenav: false,
};
