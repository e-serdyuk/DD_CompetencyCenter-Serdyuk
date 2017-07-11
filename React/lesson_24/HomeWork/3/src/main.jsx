import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router,Route,Switch, Redirect} from 'react-router-dom';
import Home from  './home.jsx';
import Table from  './TableView.jsx';
import List from  './ListView.jsx';
import About from './About.jsx';

class App extends React.Component {
    render() {
        return (
        <Router><div>
                <Home/>
                <Switch>
                    <Route exact path="/tableView" component={Table} />
                    <Route exact path="/listView" component={List} />
                    <Route path="/listView/:id" component={About}/>
                    <Route path='/tableView/:id' component={About}/>

                </Switch>
                </div>
        </Router>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('container')
);