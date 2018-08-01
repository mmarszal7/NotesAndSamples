import { AppActionTypes, AppActionsUnion } from './app.actions';
import { AppState, initialLayoutState, LayoutState } from './app.state';
import { ActionReducerMap } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';

export function showSidenavReducer(state: LayoutState = initialLayoutState, action: AppActionsUnion): LayoutState {
    switch (action.type) {
        case AppActionTypes.CloseSidenav:
            return {
                showSidenav: false,
            };

        case AppActionTypes.OpenSidenav:
            return {
                showSidenav: true,
            };

        default:
            return state;
    }
}

export const appReducers: ActionReducerMap<AppState> = {
    router: routerReducer,
    layoutState: showSidenavReducer,
  };
