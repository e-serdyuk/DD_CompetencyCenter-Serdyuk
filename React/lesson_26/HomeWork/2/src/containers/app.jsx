var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var ListView = require('../components/itemList.jsx');
var ItemTable = require('../components/itemTable.jsx');
var EditBar = require('./editBar.jsx'); 

class App extends React.Component {
    constructor(){
        super();
   
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
    let chooseHandler = this.choose.bind(this);
    let boundHandler = this.clickHandler.bind(this);
        return (<div>
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
            <div>
                          {this.state.ch=="list" ? <ListView items={this.props.stateNew.users} handler={boundHandler}/> :          <ItemTable items={this.props.stateNew.users} handler={boundHandler}/>}
            </div>
            <EditBar />
            </div>
        )}
}

function mapStateToProps(state) {
console.log(state)
    return {
        stateNew: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    deleteTask: actions.deleteTask
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);