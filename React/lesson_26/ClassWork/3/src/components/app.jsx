var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var ListView = require('./list.jsx');

class App extends React.Component {
    constructor(){
        super();
        this.handler = this.handler.bind(this);
     this.state = {click: true} 
        }
    handler(){ 

        this.setState({
            click: !this.state.click
        })
        console.log(this.state.click)
        }


    render() {
        return (
            <div>
                <button onClick={this.handler}>Click me</button>
                {!this.state.click ? <ListView items={this.props.stateNew.users}/> : ""}
            </div>
        )}
}

function mapStateToProps(state) {
    return {
        stateNew: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);