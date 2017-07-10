import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Switch} from 'react-router-dom';
import View1 from './View1.jsx';
import View2 from './View2.jsx';

class App extends React.Component {
    render() {
        return (
        <HashRouter>
                <Switch>
                    <Route exact path="/" component={View1} />
                    <Route path="/view1" component={View1} />
                    <Route path="/view2" component={View2} />
                </Switch>
        </HashRouter>
        )
    }
}


ReactDOM.render(
    <App/>,
    document.getElementById('container')
);