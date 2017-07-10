import React from 'react';
import ReactDOM from 'react-dom';

import {Users} from './app.jsx';

function UsersList() {

    return (
        <div>
            <Users/>
          
        </div>
    );
}
ReactDOM.render(
    <UsersList/>,
    document.getElementById('container')
);