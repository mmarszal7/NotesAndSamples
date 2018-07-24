import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Authenticate } from '../../shared/models/user';
import * as AuthActions from '../store/auth.actions';
import { getLoginPagePending, getLoginPageError } from '../store/auth.selectors';
import { AuthState } from '../store/auth.state';

@Component({
    selector: 'bc-login-page',
    template: `
    <bc-login-form
      (submitted)="onSubmit($event)"
      [pending]="pending$ | async"
      [errorMessage]="error$ | async">
    </bc-login-form>
  `,
    styles: [],
})
export class LoginPageComponent implements OnInit {
    pending$ = this.store.pipe(select(getLoginPagePending));
    error$ = this.store.pipe(select(getLoginPageError));

    constructor(private store: Store<AuthState>) { }

    ngOnInit() { }

    onSubmit($event: Authenticate) {
        this.store.dispatch(new AuthActions.Login($event));
    }
}
