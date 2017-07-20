var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');   

class ContactUs extends React.Component {
    constructor(props) {
        super(props)
    }  
    render(){
        return (<div>
<h2>Contact Us</h2>
<form>
  <input type="text" name=""/>
  <input type="text" name=""/>
  <textarea></textarea>
  <input type="submit" name=""/>
</form></div>
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

module.exports = connect(mapStateToProps, matchDispatchToProps)(ContactUs);






