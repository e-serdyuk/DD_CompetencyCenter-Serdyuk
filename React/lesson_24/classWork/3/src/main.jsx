import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Route,Link,Switch, Redirect} from 'react-router-dom';
import View1 from './View1.jsx';
import View2 from './View2.jsx';
import Home from  './Home.jsx';

class App extends React.Component {
    render() {
        return (
        <HashRouter><div>
                <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/view1'>View 1</Link></li>
                <li><Link to='/view2'>View 2</Link></li>
                </ul>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/view1" component={View1} />
                    <Route path="/view2" component={View2} />
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