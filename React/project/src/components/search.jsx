var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.clicked = this.clicked.bind(this);
    }  
    clicked(){
    var obj={iam:document.getElementsByClassName("select_gender")[0].value,
    Seeking:document.getElementsByClassName("select_seek")[0].value,
    Age:document.getElementsByClassName("select_age")[0].value,
    AgeTo:document.getElementsByClassName("select_to")[0].value,
    Country:document.getElementsByClassName("select_country")[0].value
    }
        this.props.search(obj)
    }
    render(){


        return (
<div>
   <select className="select_gender">
   <option disabled selected>I am:</option>
    <option value="man">man</option>
    <option value="woman">woman</option>
    </select>
    <select className="select_seek">
   <option disabled selected>Seeking a:</option>
    <option value="man">man</option>
    <option value="woman">woman</option>
    </select>
     <select className="select_age">
   <option disabled selected>Age:</option>
    <option value="19">19</option>
    <option value="21">21</option>
    <option value="24">24</option>
    <option value="27">27</option>
    <option value="30">30</option>
    </select>
     <select className="select_to">
   <option disabled selected>To:</option>
    <option value="22">22</option>
    <option value="25">25</option>
    <option value="27">27</option>
    <option value="32">32</option>
    <option value="40">40</option>
    </select>
     <select className="select_country">
   <option disabled selected>Country:</option>
    <option value="Ukraine">Ukraine</option>
    <option value="Russia">Russia</option>
    <option value="Poland">Poland</option>
    <option value="Belarus">Belarus</option>
    <option value="Latvia">Latvia</option>
    </select>
    <button onClick={this.clicked}>SEARCH</button>
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

module.exports = connect(mapStateToProps, matchDispatchToProps)(Search);






