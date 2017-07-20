var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./containers/app.jsx')

var Provider = require('react-redux').Provider;
var redux = require('redux');
var createStore = redux.createStore;
var combineReducers = redux.combineReducers; // Необходим в случае нескольких редюсеров
var applyMiddleware = redux.applyMiddleware;
var compose = redux.compose;

var thunk = require('redux-thunk').default; // redux-thunk - middleware-функция, позволяющая создавать actionCreators, которые возвращают функцию вместо action.
var usersReducer = require('./reducers/reducer.jsx');
var fetchUsers = require('./actions/actions.jsx').fetchUsers;

const middleware = applyMiddleware(thunk);
const store = createStore(usersReducer, compose(middleware))


store.dispatch(fetchUsers()) //загрузка файла

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);