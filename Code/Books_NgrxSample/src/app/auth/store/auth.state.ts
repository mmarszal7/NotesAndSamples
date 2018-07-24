import { User } from '../../shared/models/user';

export interface StatusState {
    loggedIn: boolean;
    user: User | null;
}

export const statusInitialState: StatusState = {
    loggedIn: false,
    user: null,
};

export interface LoginPageState {
    error: string | null;
    pending: boolean;
}

export const loginPageInitialState: LoginPageState = {
    error: null,
    pending: false,
};


export interface AuthState {
    status: StatusState;
    loginPage: LoginPageState;
}
