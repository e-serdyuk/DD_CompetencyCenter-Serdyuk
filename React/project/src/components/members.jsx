var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var SliderNew = require('../components/slider1.jsx');
var SliderOnline= require('../components/slider2.jsx');


class Members extends React.Component {
    constructor(props) {
        super(props)
        this.clickedNew = this.clickedNew.bind(this);
        this.clickedOnline = this.clickedOnline.bind(this);

    }  
    clickedNew(){
document.getElementsByClassName("tab1")[0].style.color="black";
document.getElementsByClassName("tab1")[0].style.borderBottom="4px solid #dba1fd";
document.getElementsByClassName("tab2")[0].style.color="#a1a1a1";
document.getElementsByClassName("tab2")[0].style.borderBottom="4px solid #dbdbdb";
document.getElementsByClassName("slider2")[0].style.display="none";
document.getElementsByClassName("slider1")[0].style.display="block";
    }
    clickedOnline(){
document.getElementsByClassName("tab2")[0].style.color="black";
document.getElementsByClassName("tab2")[0].style.borderBottom="4px solid #dba1fd";
document.getElementsByClassName("tab1")[0].style.color="#a1a1a1";
document.getElementsByClassName("tab1")[0].style.borderBottom="4px solid #dbdbdb";
document.getElementsByClassName("slider1")[0].style.display="none";
document.getElementsByClassName("slider2")[0].style.display="block";


    }
componentDidMount() {document.getElementsByClassName("slider2")[0].style.display="none";}
    render(){
        return ( <div>
    <div className="tabs">
     <a className="tabs_a tab1" onClick={this.clickedNew}>New Members</a>
     <a className="tabs_a tab2" onClick={this.clickedOnline}>Online members</a>
  </div>
   <SliderNew/>
  <SliderOnline/>
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
   
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Members);






