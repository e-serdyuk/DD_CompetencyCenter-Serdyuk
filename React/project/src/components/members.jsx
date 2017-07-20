var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');






class Members extends React.Component {
    constructor(props) {
        super(props)
    }  
    render(){
        return (
    <div className="tabs">
     <a className="tabs_a">New Members</a>
     <a className="tabs_a">Online members</a>

  </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        stateNew: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
    search: actions.search
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Members);






