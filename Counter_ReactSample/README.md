## Tutorials:

[EggHead](https://egghead.io/courses/the-beginner-s-guide-to-react)<br>
[ReactJS](https://reactjs.org/docs/introducing-jsx.html)

## What is React:

React is build of the **components** (component architecture is just like in Angular).<br>
React component just a js class which is build of **state** and **render method**.<br>
Output of render method is a js object (virtual DOMs) that maps to DOM. <br>
When component state is changed React renders new virtual DOM object.<br>
Then it compares new virtuial DOM object with real DOM and try to keep both in sync.<br>
In React we no longer works on real DOMs, we work on **cheap** virtual DOMs.<br>
That is why that library is called React, it reacts to state changes and updates the DOM.

## Angular vs React:

React is just a library with component architecture (like Angular).<br>
To make some http requests or routing we need additional js libraries for that.

## Start up:

```
npm i -g create-react-app
create-react-app name
// ^ this installs lightweight server, webpack?, babel and react libs (react, react-dom, react-scripts...)
```

## Basics:

JSX - JavaScript XML - html js file (e.g in render method)<br>
babel - js compiler used i.a. for converting JSX to js (try at babeljs.io/repl)<br><br>
Starting point of the app is a src/index.js file where you bootstrap App.js to root component (defined in public/index.html)
ReactDOM.render(<App />, document.getElementById('root'));<br>
Imports like bootstrap should be added in index.js<br>
Because Component.render() returns React.createElement('') you cannot return something like this: `<h1></h1><button></button>`, it has to be one element!<br> Solution to this is to wrap both elements into `<div>` or React.Fragment>
Why we should use '()' after return (like 'return ()'):

```
// because JS interprets:
return
  <div></div>

// like this:
return ;
  <div></div>

// so we should write:
return (
  <div></div>
	);
```

Because React reacts to changed (diffs) every time you are using list of items you have to add unique index to it.

Functions in Components does not have access to 'this' because they are not called with object: obj.method()<br>
They are called as stand-alone functions which in strict-mode results in undefined (without strict-mode calling this in stand-alone functions returns window object)<br>
To solve this problem u can use bind() method in constructor like:

```
constructor(){
    super();
    this.method = this.method.bind(this);
}
```

Another way to solve this problem is to use arrow functions which do not bind 'this', they inherit it:

```
method = () => {
	...
}
```

You can send info to components (like @Input in Angular) by using 'props' - which are read-only!

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

ReactDOM.render(
  <Welcome name="Sara" />,
  document.getElementById('root')
);
```

Passing arguments to eventHandler:

```
handleClick(e) {
    console.log('this is:', e);
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)}>
        Click me
      </button>
    );
  }
```

Creating component list:

```
render(){
    return (
        <div>
        { 
            this.state.list.map(l => 
                <div key={l.id}> 
                    l.element 
                </div>
            )
        }
        </div>
    );
}
```

Sending state up e.g. for deleting child component

```
// Parent:
<Child onDelete={handleDelete(id)}/>
...
handleDelete = (id) {...}

// Child:
<button onClick={this.props.onDelete(id)}></button>
```

Routing (npm install --save react-router-dom):

```
const App = () => (
  <Router>
	<div>
		<Route path="/" component={Home} />
		<Route path="/counter" component={Counter} />
	</div>
  </Router>
)
```

## Producion build:
Before build remove REDUX_DEVTOOLS_EXTENSION from index.js
```
npm run build
```

## TypeScript integration:

To wire up TypeScript with React we need to:

1.  use create-react-app my-app --scripts-version=react-scripts-ts
2.  use webpack - "Webpack is a tool that will bundle your code and optionally all of its dependencies into a single .js file."

```
npm install -g webpack
npm install --save @types/react @types/react-dom
npm install --save-dev typescript awesome-typescript-loader source-map-loader
```

## Redux

1.  Install redux:
    ```
    npm install --save redux react-redux 
    npm install --save-dev redux-devtools
    // for TypeScript
    npm install --save @types/react-redux
    ```
2.  Create store:
    ```
    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleware),
            window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
        )
    );
    ```
3.  Add Provider component:

    ```
    ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root') as HTMLElement
    );
    ```

4.  Create rootReducer in ./reducers/index.tsx:
    ```
    export default combineReducers({
        counterReducer;
    });
    ```
5. Add reducer and action:
    - Reducer
    ```
    const counterReducer = (state = initialCountersState, action) => {
        switch (action.type) {
            case INCREMENT:
            return {
                ...state,
            }
            ...
        }
    }
    ```
    - Action
    ```
    export const INCREMENT = 'INCREMENT';

    export const incrementCounter = id => ({
        type: 'INCREMENT',
        id
    })
    ```
6. Example of dispatching actions or accessing state:
    ```
    let Counters = ({ counters, dispatch }) => ( 
        
        ...someJSX...
        <button onClick={() => dispatch(resetCounters())}></button>
    )

    // Accessing state
    const mapStateToProps = state => ({
        counters: state.counterReducer.counters,
    });

    export default connect(mapStateToProps)(Counters);
    ``` 
## Notes:
- propTypes keep definition of properties types and names. They are used to make communication between components easier (it's not so important when all your data is in the store). 

- exports and imports:
    - when importing exported variables you have to add then in {}: 
        > import {var1, var2} from './file';
    - when useing *export default* you do not have to use {} in import statement:
        > export default variable;
        > import variable from './file';

## Extensions:

- Chrome: React Developer Tools (see ^ Redux point 2.)
- VS Code: Simple React Snippets 
    - imrc - import react class<br> 
    - cc - create class
