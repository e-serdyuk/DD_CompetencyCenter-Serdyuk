var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx'); 

class Blog extends React.Component {
    constructor(props) {
        super(props)
    }  

    render(){

        return (<div>
 <h2>Latest Blog</h2>
    <div className="blog-group">
   <div className="blog">
      <div className="blog_photo">
         <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAQ8mepp20M58xM54bQiF3ejT40VEdiswS3k3xXsnQh8TzVbqjjw"/>
      </div>
      <div className="blog_description">
      <h4></h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. </p>
         <a>READ MORE</a>
      </div>
   </div>
   <div className="blog">
      <div className="blog_photo">
         <img src="https://media.licdn.com/mpr/mpr/shrinknp_200_200/p/1/000/228/094/24ca9ed.jpg"/>
      </div>

      <div className="blog_description">
      <h4>BLOG TITLE(ONE OR TWO LINES) </h4>
     <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. </p>
          <a>READ MORE</a>
      </div>
   </div>
   <div className="blog">
      <div className="blog_photo">
         <img src="https://icdn.lenta.ru/images/2016/03/24/19/20160324193936117/pic_215c8b61ea898e4ff82e07fa440ac76f.jpg"/>
      </div>

      <div className="blog_description">
      <h4>BLOG TITLE(ONE OR TWO LINES) </h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
         tempor incididunt ut labore et dolore magna aliqua. </p>
          <a>READ MORE</a>
      </div>
   </div>
</div></div>
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

module.exports = connect(mapStateToProps, matchDispatchToProps)(Blog);






