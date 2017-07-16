var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var ListView = require('../components/itemL.jsx');
var ItemTable = require('../components/itemT.jsx');
var EditBar = require('./editBar.jsx'); 
var Link = require('react-router-dom').Link;

class App extends React.Component {
    constructor(){
        super();
   
        this.choose =  this.choose.bind(this)
            this.state = {
            ch: ""
         
        } 
        }

    choose(e) { 
          this.setState({
            ch: e.currentTarget.value
        });
     }

    render() {
    let chooseHandler = this.choose.bind(this);
        return (<div>
                    <Link to="/edit" replace><button>Edit</button></Link>
                    <Link to="/about" replace><button>About</button></Link>
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
                          {this.state.ch=="list" ? <ListView items={this.props.stateNew.users} /> :          <ItemTable items={this.props.stateNew.users} />}
            </div>
      
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
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);