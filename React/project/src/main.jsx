var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./containers/app.jsx')
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
var createHistory = require('history').createBrowserHistory;
const history = createHistory();
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
    <Router>
    <Route component={App} />
   </Router>

    </Provider>,
    document.getElementById('root')
);