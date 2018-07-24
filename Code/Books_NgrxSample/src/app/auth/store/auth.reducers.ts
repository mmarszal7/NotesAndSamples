import { ActionReducerMap } from '@ngrx/store';
import { AuthActionsUnion, AuthActionTypes } from './auth.actions';
import { loginPageInitialState, statusInitialState, AuthState, StatusState, LoginPageState } from './auth.state';

export function statusReducer(state = statusInitialState, action: AuthActionsUnion): StatusState {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                loggedIn: true,
                user: action.payload.user,
            };
        }

        case AuthActionTypes.Logout: {
            return state;
        }

        default: {
            return state;
        }
    }
}

export function loginPageReducer(state = loginPageInitialState, action: AuthActionsUnion): LoginPageState {
    switch (action.type) {
        case AuthActionTypes.Login: {
            return {
                ...state,
                error: null,
                pending: true,
            };
        }

        case AuthActionTypes.LoginSuccess: {
            return {
                ...state,
                error: null,
                pending: false,
            };
        }

        case AuthActionTypes.LoginFailure: {
            return {
                ...state,
                error: action.payload,
                pending: false,
            };
        }

        default: {
            return state;
        }
    }
}

export const reducers: ActionReducerMap<AuthState> = {
    status: statusReducer,
    loginPage: loginPageReducer,
};
