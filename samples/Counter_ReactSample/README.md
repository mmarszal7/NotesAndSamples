## What is React:

React is build on the **component** architecture just like an Angular. Every component consists **state** and **render method**. Output of render method is a JS object - a **virtual DOM** - that maps to a DOM. When component state is changed React renders a new virtual DOM object.
Then it compares the new virtuial DOM object with the real DOM and tries to keep both in sync.<br>

That is why that library is called React, it reacts to state changes and updates the DOM. <br>
*In React we no longer works on real DOMs, we work on **cheap** virtual DOMs.

***Angular vs React***:<br>
React is just a library with component architecture (like Angular).<br>
To make some http requests or routing we need additional js libraries for that.

## Basics:

1. React uses **JSX (JavaScript XML)** files which are JS extnsion of HTML. To compile this files to HTML React uses **babel** - a JS compiler.

2. Starting point of the app is a index.js file where you bootstrap App.js to root component  
    ``` JS
    // public/index.hmtl
    ...
        <div id="root"></div>
    ...

    // index.js
    ReactDOM.render(<App />, document.getElementById('root'));<br>
    ```

3. Because render() methods return React.createElement('') they always have to return only one element. You cannot return something like: 
    ``` HTML
    render(){
        <h1></h1>
        <button></button>
    }
    ```
    Solution to this is to wrap both elements into `<div>` or <React.Fragment>

4. Why we should use '()' after return:

    ```JS
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


5. Creating component list:<br>
The easiest way is to use map function. 
Because React reacts to changes of every single DOM element, every time you are using lists of items you have to add unique index to every list element.

    ``` JS
    render(){
        return (
            <div>
            { 
                this.state.list.map(l => 
                    <div key={l.id}> // unique key value
                        l.element 
                    </div>
                )
            }
            </div>
        );
    }
    ```


6. Functions in Components does not have access to 'this' because they are not called with object: 
    > obj.method()

    They are called as stand-alone functions which in strict-mode results in undefined (without strict-mode calling *this* in stand-alone functions returns window object).<br>
To solve this problem u can use bind() method in constructor like:

    ```JS
    constructor(){
        super();
        this.method = this.method.bind(this);
    }
    ```

    Another way to solve this problem is to use arrow functions which do    not bind *this*, they inherit it:

    ``` JS
    const method = () => {
    	...
    }
    ```

7. You can send info to components by using 'props' (like @Input in Angular) - which are read-only!

    ```JS
    function Welcome(props) {
      return <h1>Hello, {props.name}</h1>;
    }

    ReactDOM.render(
      <Welcome name="Sara" />,
      document.getElementById('root')
    );
    ```

8. Sending state up (like @Output in Angular) e.g. for deleting child component

    ```JS
    // Parent:
    <Child onDelete={handleDelete(id)}/>
    ...
    handleDelete = (id) {...}

    // Child:
    <button onClick={this.props.onDelete(id)}></button>
    ```

9. Passing arguments to eventHandler:<br>
    To pass argument to event handler you have to use arrow functions like:

    ```JS
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

10. Routing:<br>
To use routing you have to install React-router package:
    > npm install --save react-router-dom

    To create routing in React code just add <Router> component:

    ```JS
    const App = () => (
      <Router>
    	<div>
    		<Route path="/" component={Home} />
    		<Route path="/counter" component={Counter} />
    	</div>
      </Router>
    )
    ```

11. Producion build:<br>
    > npm run build

    *Remember to remove REDUX_DEVTOOLS_EXTENSION from index.js before build.

12. **PropTypes** - its node package that lets you define type of React props. It is used to make communication between components easier (it's not so important when all your data is in the store). 

13. Exports and imports:
    - when importing exported variables you have to add then in {}: 
        > import {var1, var2} from './file';
    - when useing *export default* you do not have to use {} in import statement:
        > export default variable;
        > import variable from './file';

14. **[Thunk](https://github.com/reduxjs/redux-thunk)** - it is a React middleware that "wraps an expression to delay its evaluation":
    ``` JS
    // calculation of 1 + 2 is immediate
    let x = 1 + 2;

    // calculation of 1 + 2 is delayed
    // thunk can be called later to perform the calculation
    let thunk = () => 1 + 2;
    ```

    Thunk installation:
    > npm install --save redux-thunk

    Use in React actions:
    ``` JS
    export const startTimer = (workTime, intervalTime) => (dispatch) => {
        clearInterval(timer);
        timer = setInterval(() => dispatch(tick()), 1000);

        dispatch({
            type: ActionTypes.START_TIMER,
            workTime,
            intervalTime,
        });
    }
    ```



15. Curried functions - "In mathematics and computer science, currying is the technique of translating the evaluation of a function that takes multiple arguments into evaluating a sequence of functions". In React they are present in async actions that use Thunk:
    ``` JS
    export const startTimer = (workTime, intervalTime) => (dispatch) => {
        ...
    }
    ```
    And they are equal to:
    ``` JS
    export const startTimer = (workTime, intervalTime) => {
        return (dispatch) => {
            ...
        }
    }
    ```

16. Extensions:
- Chrome: React Developer Tools (see ^ Redux point 2.)
- VS Code: Simple React Snippets 
    - imrc - import react class<br> 
    - cc - create class

## Redux

1.  Install redux:
    ```JS
    npm install --save redux react-redux 
    npm install --save-dev redux-devtools
    // for TypeScript
    npm install --save @types/react-redux
    ```
2.  Create store:
    ```JS
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

    ```JS
    ReactDOM.render(

    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root') as HTMLElement
    );
    ```

4.  Create rootReducer in ./reducers/index.tsx:
    ```JS
    export default combineReducers({
        counterReducer;
    });
    ```
5. Add reducer and action:
    - Reducer
    ```JS
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
    ``` JS
    export const INCREMENT = 'INCREMENT';

    export const incrementCounter = id => ({
        type: 'INCREMENT',
        id
    })
    ```
6. User react-redux to dispatch actions or subscribe to store:

    Inject just dispatch and don't listen to store:
    ``` JS
    let Counters = ({ dispatch }) => ( 
        
        ...someJSX...
        <button onClick={() => dispatch(resetCounters())}></button>
    )

    export default connect()(Counters)
    ```

    Inject dispatch and counters:
    ``` JS
     let Counters = ({ counters, dispatch }) => ( 
        
        ...someJSX...
        <button onClick={() => dispatch(resetCounters())}></button>
    )

    const mapStateToProps = state => ({
        counters: state.counterReducer.counters,
    });

    export default connect(mapStateToProps)(Counters);
    ``` 

## TypeScript integration:

To wire up TypeScript with React we need to:

1.  use create-react-app my-app --scripts-version=react-scripts-ts
2.  use webpack - "Webpack is a tool that will bundle your code and optionally all of its dependencies into a single .js file."

```JS
npm install -g webpack
npm install --save @types/react @types/react-dom
npm install --save-dev typescript awesome-typescript-loader source-map-loader
```
