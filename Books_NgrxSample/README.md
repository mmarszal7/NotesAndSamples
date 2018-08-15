## Angular + ngrx book collection sample based on [ngrx example app](https://github.com/ngrx/platform/tree/master/example-app) 
*Main difference is that states, reducers and selectors are in the separated files*

## Main ngrx pieces:
- States
- Actions
- Reducers
- Selectors
- *Effects*

## 1. State

State is a class (or interface) that describes immutable object which describes State of the application. It should be created for every module. In addition to the state itself, you should define *initial state*:

```
export interface State {
  loggedIn: boolean;
  user: User | null;
}

// Initial state for LoginState
export initialState: State = {
    loggedIn: false
}
```

## 2. Actions

Actions are used to trigger the transform from one application state to another.
They are defined as enums with types, for each type of action type. At the end the union of these types is created.

*Union type describes a value that can be one of several types.* 

```
export enum BookActionTypes {
  SEARCH = '[Book] Search',
  SELECT = '[Book] Select',
}
```

actions can be empty or they can carry some data called payload:

```
// Empty
export class Search implements Action {
  readonly type = BookActionTypes.Search;
}

// With payload
export class Select implements Action {
  readonly type = BookActionTypes.Select;
  constructor(public payload: string) {}
}

// Union
export type BookActionsUnion =
  | Search
  | Select;
```

## 3. Reducers

Reducer is a function that for some Action current State returns new State. Reducer does not modify state but copies old, modifies it and and returns as a new one.

State + Action -> **Reducer** -> new State

```
export function reducer(state = initialState, action: BookActionsUnion): State{

    switch (action.type) {
        case BookActionTypes.SearchComplete:
        case CollectionActionTypes.LoadSuccess: {
            return {
                ...state,
                selectedBookId: state.selectedBookId,
            };
        }
        case BookActionTypes.Select: {
            return {
                ...state,
                selectedBookId: action.payload,
            };
        }
        default: {
            return state;
        }
    }
}

```

All reducers in module should be defined by ActionReducerMap

```
export const reducers: ActionReducerMap<BooksState> = {
  search: searchReducer,
  books: singlebookReducer,
  collection: bookCollectionRreducer,
};
```

All application Reducers should be registered in module.ts:
```
StoreModule.forFeature('books', reducers)
// or
StoreModule.forRoot(reducers),
```

## 4. Selectors

Selectors are functions that can be used to select some piece of State. Accessing the State you want to 'cut' can be done in two ways:
```
// When Selector is App level
selectState = s => s.state;

// When Selector is "feature" level
getFeatureState = createFeatureSelector<FeatureState>('feature');
```

In both cases to create selector (get piece of State) you need to use *createSelector()* function:

```
export const getState = createSelector(
  getFeatureState ,
  (state: FeatureState) => state.getInfo
);
```

## 5. Store
Store is a little bit abstract and has type of State. Store can be used with:<br>

a) Actions - to dispatch actions (empty or with payload):
```
this.store.dispatch(new CollectionActions.AddBook(book))
```

b) Selectors - to subscribe for State changes (which returns Observables)
```
export const getSearchState = createSelector(
    getBooksState,
    (state: BooksState) => state.search
);

this.pending$ = this.store.select(getSearchState);
```

## 6. Effecs

Effects are used to add new effect (async) to Actions.<br>
Effects are always connected to specific Action and they are triggered after this action is dispatched.<br>
If effect is not dispatching another Action you should add { dispatch: false } to decorator.
```
  @Effect() // or @Effect({ dispatch: false })
  loadCollection$: Observable<Action> = this.actions$.pipe(
    ofType(BookActionTypes.Load),
    switchMap(() =>
      this.db
        .query('books')
        .pipe(
          toArray(),
          map((books: Book[]) => new LoadSuccess(books)),
          catchError(error => of(new LoadFail(error)))
        )
    )
  );
```


