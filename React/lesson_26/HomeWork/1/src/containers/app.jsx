var React = require('react');  

// импорт зависимостей для установки связви между React компонентом, actions и состоянием приложения(state)
var bindActionCreators = require('redux').bindActionCreators;  
var connect = require('react-redux').connect; 

var ItemTable = require('../components/itemTable.jsx'); 
var List = require('../components/itemList.jsx'); 
var EditBar = require('./editBar.jsx'); 
var actions = require('../actions/actions'); 

class App extends React.Component {
    constructor() {
        super()
        this.clickHandler =  this.clickHandler.bind(this)
               this.choose =  this.choose.bind(this)
               
            this.state = {
            ch: ""
         
        } 
    } 

    clickHandler(e) { 
        this.props.deleteTask(e.target.dataset.id); 
    }
        choose(e) { 
          this.setState({
            ch: e.currentTarget.value
        });
     }

    render() {

      let boundHandler = this.clickHandler.bind(this);
      let chooseHandler = this.choose.bind(this);
     
      return(    
       <div>
            <div className="panel well">
                <h2>Choose table or list</h2>
           </div>
           <select onChange={chooseHandler}>
    <option value="table">table</option>
    <option value="list">list</option>
    </select>
            <div className="panel well">
                <h2>Tasks List</h2>
           </div>
           {this.state.ch=="list" ? <List items={this.props.tasks} handler={boundHandler}/> :          <ItemTable items={this.props.tasks} handler={boundHandler}/>}
  
           <EditBar />
       </div>    
    )
  }
} 

// связывание состояния приложения с React компонентом 
function mapStateToProps(state) {
    console.log(state)
    return {
        tasks: state
    }
}  

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        deleteTask: actions.deleteTask
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App)