import React from 'react';
import { Link } from 'react-router-dom';

export default class View2 extends React.Component {
    render(){
        return (
            <div>
               <h1>View 2</h1> 
 <Link to='/view1'>View 1</Link>
            </div>
        )
    }
}