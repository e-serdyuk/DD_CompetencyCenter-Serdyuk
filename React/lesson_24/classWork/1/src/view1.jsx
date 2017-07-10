import React from 'react';
import { Link } from 'react-router-dom';

export default class View1 extends React.Component {
    render(){
        return (
            <div>
                <h1>View 1</h1> 
                 <Link to='/view2'>View 2</Link>
            </div>
        )
    }
}