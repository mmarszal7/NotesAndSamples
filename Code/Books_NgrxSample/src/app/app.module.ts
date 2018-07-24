import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './components/app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { appReducers } from './store/app.reducers';
import { NotFoundPageComponent } from './components/not-found-page.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavItemComponent } from './components/layout/nav-item.component';
import { SidenavComponent } from './components/layout/sidenav.component';
import { ToolbarComponent } from './components/layout/toolbar.component';
import { GoogleBooksService } from './services/google-books.service';
import { MaterialModule } from './shared/material.module';
import { AuthModule} from './auth/auth.module';
import { DBModule } from '@ngrx/db';
import { schema } from './db';

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        MaterialModule,
        AuthModule.forRoot(),
        AppRoutingModule,

        /**
         * StoreModule.forRoot is imported once in the root module, accepting a reducer
         * function or object map of reducer functions. If passed an object of
         * reducers, combineReducers will be run creating your application
         * meta-reducer. This returns all providers for an @ngrx/store
         * based application.
         */
        StoreModule.forRoot(appReducers),

        /**
         * @ngrx/router-store keeps router state up-to-date in the store.
         */
        StoreRouterConnectingModule.forRoot({
            /*
              They stateKey defines the name of the state used by the router-store reducer.
              This matches the key defined in the map of reducers
            */
            stateKey: 'router',
        }),

        StoreDevtoolsModule.instrument({
            name: 'NgRx Book Store DevTools',
            logOnly: environment.production,
        }),
        EffectsModule.forRoot([]),
        DBModule.provideDB(schema)
    ],
    declarations: [
        AppComponent,
        NotFoundPageComponent,
        LayoutComponent,
        NavItemComponent,
        SidenavComponent,
        ToolbarComponent,
    ],
    providers: [GoogleBooksService],
    bootstrap: [AppComponent],
})
export class AppModule { }
