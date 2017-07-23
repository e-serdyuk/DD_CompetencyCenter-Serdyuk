var React = require('react');   

class Parallax extends React.Component {
    constructor(props) {
        super(props)
    }  
componentDidMount() {
$(window).scroll(function(e){
parallax();
});
function parallax(){
var scrolled = $(window).scrollTop();
$('.bg').css('top',-(scrolled*0.1)+'px');
}

}

    render(){
        return (<div>
        <div className="bg"></div>
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
  </div>
        )
    }
}

module.exports = Parallax; 






