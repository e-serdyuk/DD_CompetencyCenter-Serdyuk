import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch, Redirect} from 'react-router-dom';
import Home from  './home.jsx';
import Table from  './TableView.jsx';
import List from  './ListView.jsx';

class App extends React.Component {
    render() {
        return (
        <HashRouter><div>
                <Home/>
                <Switch>
                    <Route path="/tableView" component={Table} />
                    <Route path="/listView" component={List} />
                    <Redirect from="*" to="/" />
                </Switch>
                </div>
        </HashRouter>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);