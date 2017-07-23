var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var Link = require('react-router-dom').Link;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');

 


class SliderNew extends React.Component {
    constructor(props) {
        super(props)
        
    }  
 
    render(){

        return (

              <div className="slider1">
              
  <div  className="owl-carousel owl-theme">
                {
                    this.props.stateNew.data.map((item, i) => (
                    <div key={i} className="item">
   <Link to={{pathname:`/newUsers/${i}`}}><img src={item.image}/></Link></div>
 
                    ))
                }
            </div>
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

module.exports = connect(mapStateToProps, matchDispatchToProps)(SliderNew);






