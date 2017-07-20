var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');    

class List extends React.Component {
    constructor(props) {
        super(props)
    }  

    render(){

        return (
            <ul>
                {
                    this.props.stateNew.blogs.map((item, i) => (
                                <li key={i}>
                                <span style={{cursor: 'pointer',background:'red',color:'white',padding:"0 5px"}}        data-id={item.id} onClick={this.props.handler}>del</span>&nbsp;
                                        {item.title} - {item.link}</li>
                    ))
                }
            </ul>
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
    change_stories: actions.change_stories
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(List);






