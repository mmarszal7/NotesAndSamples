import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { BookEffects } from './store/book.effects';
import { FindBookPageComponent } from './containers/find-book-page.component';
import { ViewBookPageComponent } from './containers/view-book-page.component';
import { SelectedBookPageComponent } from './containers/selected-book-page.component';
import { CollectionPageComponent } from './containers/collection-page.component';
import { MaterialModule } from '../shared/material.module';

import { reducers } from './store/book.reducres';
import { BooksRoutingModule } from './books-routing.module';
import { BookAuthorsComponent } from './components/book-authors.component';
import { BookDetailComponent } from './components/book-detail.component';
import { BookPreviewComponent } from './components/book-preview.component';
import { BookPreviewListComponent } from './components/book-preview-list.component';
import { BookSearchComponent } from './components/book-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AddCommasPipe } from '../shared/pipes/add-commas.pipe';
import { EllipsisPipe } from '../shared/pipes/ellipsis.pipe';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        BooksRoutingModule,
        ReactiveFormsModule,
        RouterModule,

        StoreModule.forFeature('books', reducers),
        EffectsModule.forFeature([BookEffects]),
    ],
    declarations: [
        FindBookPageComponent,
        ViewBookPageComponent,
        SelectedBookPageComponent,
        CollectionPageComponent,
        BookAuthorsComponent,
        BookDetailComponent,
        BookPreviewComponent,
        BookPreviewListComponent,
        BookSearchComponent,
        AddCommasPipe,
        EllipsisPipe
    ]
})
export class BooksModule { }
