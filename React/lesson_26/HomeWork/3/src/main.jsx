var React = require('react');
var ReactDOM = require('react-dom');
var App = require('./containers/app.jsx')
var HashRouter = require('react-router-dom').HashRouter;
var Route = require('react-router-dom').Route;
var Link = require('react-router-dom').Link;

var Switch = require('react-router-dom').Switch;
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


var Edit = require('./containers/editBar.jsx');
var About = require('./components/about.jsx');



store.dispatch(fetchUsers()) //загрузка файла

ReactDOM.render(
    <Provider store={store}>
               <HashRouter history={history}>
            <div>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route path="/edit" component={Edit}/>
                    <Route path="/about" component={About}/>
                </Switch>
            </div>
        </HashRouter>
    </Provider>,
    document.getElementById('root')
);