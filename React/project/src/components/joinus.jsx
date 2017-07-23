var React = require('react');   
var Link = require('react-router-dom').Link;

class Join extends React.Component {
    constructor(props) {
        super(props)
    }  
    render(){
        return (<div>
  <div className="joinsus_text">JOIN US NOW</div>
  <Link to='/signup'>CREATE AN ACCOUNT</Link></div>
        )
    }
}

module.exports = Join; 






