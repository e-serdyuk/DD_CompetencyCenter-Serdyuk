var React = require('react');   

class Parallax extends React.Component {
    constructor(props) {
        super(props)
    }  
    render(){
        return (
  <div className="parallax">
      <div className="ThreeColumn">
         <img src="src/images/icon1.png" alt="WEB DESIGN"/><br/>
         <p>OVER 5000</p>
         <p>Famale users</p>
      </div>
            <div className="ThreeColumn">
         <img src="src/images/icon2.png" alt="WEB DESIGN" /><br/>
           <p>OVER 9000</p>
         <p>Happy couples</p>
      </div>
            <div className="ThreeColumn">
         <img src="src/images/icon3.png" alt="WEB DESIGN"/><br/>
         <p>OVER 4000</p>
         <p>Male users</p>
      </div>
  </div>
        )
    }
}

module.exports = Parallax; 






