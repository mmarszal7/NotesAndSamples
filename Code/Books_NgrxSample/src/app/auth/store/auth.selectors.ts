import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState, StatusState, LoginPageState } from './auth.state';

export const selectAuthState = createFeatureSelector<AuthState>('auth');

export const selectAuthStatusState = createSelector(
    selectAuthState,
    (state: AuthState) => state.status
);
export const getLoggedIn = createSelector(
    selectAuthStatusState,
    (state: StatusState) => state.loggedIn
);
export const getUser = createSelector(selectAuthStatusState, (state: StatusState) => state.user);

export const selectLoginPageState = createSelector(
    selectAuthState,
    (state: AuthState) => state.loginPage
);
export const getLoginPageError = createSelector(
    selectLoginPageState,
    (state: LoginPageState) => state.error
);
export const getLoginPagePending = createSelector(
    selectLoginPageState,
    (state: LoginPageState) => state.pending
);
