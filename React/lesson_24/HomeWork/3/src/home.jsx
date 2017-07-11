import React from 'react';
import { Link } from 'react-router-dom';

export default class Home extends React.Component {
    render(){
        return (
            <div>
                <ul className="menu">
                    <li><Link to='/tableView'>Table</Link></li>
                    <li><Link to='/listView'>List</Link></li>
                </ul>

            </div>
        )
    }
}