import React, {Component} from 'react';

var AppActions = require('../actions/toDoActions'); 
var TodoStore = require('../stores/toDoStore'); 
class TaskSearch extends Component {
    constructor() {
        super() 
        this.state = {
         searchvalue:""
        } 
        this.searchValueFunc = this.searchValueFunc.bind(this);


    } 
    searchValueFunc(event){
    this.setState({
            searchvalue: event.currentTarget.value
        });
    }

    sendSearchText() {
        
            AppActions.search (this.state.searchvalue)
       

    }


    render() {

        return (<div>
            <input  type="text" placeholder="clear this input to show all tasks" onChange={this.searchValueFunc}  />
                <div>
                    <button  onClick={this.sendSearchText.bind (this)}>Search</button>
                
                </div>
            </div>
        )
    }

}

module.exports = TaskSearch;  