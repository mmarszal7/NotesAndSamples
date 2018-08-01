import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import * as AuthActions from '../store/auth.actions';
import { getLoggedIn } from '../store/auth.selectors';
import { AuthState } from '../store/auth.state';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private store: Store<AuthState>) { }

    canActivate(): Observable<boolean> {
        return this.store.pipe(
            select(getLoggedIn),
            map(authed => {
                if (!authed) {
                    this.store.dispatch(new AuthActions.LoginRedirect());
                    return false;
                }

                return true;
            }),
            take(1)
        );
    }
}
