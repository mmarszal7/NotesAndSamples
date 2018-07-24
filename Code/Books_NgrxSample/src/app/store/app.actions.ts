import { Action } from '@ngrx/store';

export enum AppActionTypes {
  OpenSidenav = '[Layout] Open Sidenav',
  CloseSidenav = '[Layout] Close Sidenav',
}

export class OpenSidenav implements Action {
  readonly type = AppActionTypes.OpenSidenav;
}

export class CloseSidenav implements Action {
  readonly type = AppActionTypes.CloseSidenav;
}

export type AppActionsUnion = OpenSidenav | CloseSidenav;
