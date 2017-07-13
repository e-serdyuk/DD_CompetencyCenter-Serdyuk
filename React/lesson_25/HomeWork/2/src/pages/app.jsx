var React = require('react'); 
var Link = require('react-router').Link;   

// импорт хранилища данных (store)
var TodoStore = require('../stores/toDoStore'); 

// импорт действий toDoActions 
var TodoActions = require('../actions/toDoActions'); 

var TaskSearch = require('./search.jsx');  
class App extends React.Component {
    constructor() {
        super() 
        this.state = {
            tasks: TodoStore.getAll(), 
            newName:""
        } 
        this.firstValue = this.firstValue.bind(this);
        this.clickHandler = this.clickHandler.bind(this);

    } 
    remove(id) {
        TodoActions.removeItem (id);

    }
    firstValue(event){
    this.setState({
            newName: event.currentTarget.value
        });
    }

    clickHandler(){
    var el=document.getElementsByClassName("checkbox")[0];
    let exp=el.checked ?"completed":"not complete"
         if(this.state.newName==""){alert("Please enter the name of the task")}

         else TodoActions.createItem({name:this.state.newName, complete:exp})
    }
    componentWillMount() {

        TodoStore.on ('CHANGE', ()=> {
            this.setState ({tasks: TodoStore.getAll()});
           })
                   TodoStore.on ('CHANGESEARCH', ()=> {
            this.setState ({tasks: TodoStore.getAllSearch()});
           })
    }

    render() {
        return(
        <div>
        <h2>Search</h2>
         <TaskSearch />
         <h2>Tasks</h2>
            <ul>
                {
                    this.state.tasks.map((el,i) => 
                    (<li key={i}>
                    {el.name + ' - ' + el.complete} 
                    <span style={{cursor: 'pointer',background:'red',color:'white'}}        onClick={this.remove.bind (this, i)}>click to delete</span>
                    </li>
                    ))
                }
            </ul>

            <input  type="text" onChange={this.firstValue}  />
            <input className="checkbox" type="checkbox"   />
            <input type="submit" value="AddItem" onClick={this.clickHandler} />


        </div>

         
    )}
} 

module.exports = App; 
