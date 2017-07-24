var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx'); 
var Link = require('react-router-dom').Link; 
var ReactCSSTransitionGroup = require('react-addons-css-transition-group'); 

class Blog extends React.Component {
    constructor(props) {
        super(props)
        this.clicked = this.clicked.bind(this);
        this.state = {
           ch: true,

         
        } 

    }  
clicked() {
this.props.changeBlogs();
   
}
componentDidMount() {
var timerId = setInterval(this.clicked, 5000);

}
    render(){
const blogsShow = this.props.items.map((item, i) => (
   <div key={i} className="blog">
      <div className="blog_photo">
         <img src={item.image_url}/>
      </div>
      <div className="blog_description">
     <div className="div_title"><Link to={{pathname:`/Blogs/${i}`}}> <h4>{item.title}</h4></Link></div>
     <div className="div_content"> <p>{item.content} </p></div>
         <a href={item.link} className="blogRead">READ MORE</a>
      </div>
   </div>
))

        return (<div>
 <h2>Latest Blog</h2>
    <div className="blog-group">
      <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={800}>
          {blogsShow}
        </ReactCSSTransitionGroup>
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
 changeBlogs: actions.changeBlogs
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Blog);






