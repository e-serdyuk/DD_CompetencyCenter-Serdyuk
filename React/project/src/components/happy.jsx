var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');  

class Happy extends React.Component {
    constructor(props) {
        super(props)
        this.story = this.story.bind(this);
        this.count=1

    }  

    story(){
    this.count++;
    if(this.count==4)this.count=1;
    this.props.change_stories(this.count)
    }
 
    render(){

        return ( <div>
<h2>Happy Stories</h2>
<div className="happy_story">
  <div className="happy_story_picture" ><img src={this.props.stateNew.newStoriesData[0].photo}/></div>
  <div className="happy_story_text" >
    <h4>{this.props.stateNew.newStoriesData[0].name}</h4>
    <p>{this.props.stateNew.newStoriesData[0].description}</p>
  </div>
   
</div>
<div className="happy_story">
  
  <div className="happy_story_text2" >
    <h4>{this.props.stateNew.newStoriesData[1].name}</h4>
    <p>{this.props.stateNew.newStoriesData[1].description}</p>
  </div>
   <div className="happy_story_picture2" ><img src={this.props.stateNew.newStoriesData[1].photo}/></div>
</div>
 <button onClick={this.story}>MORE STORIES</button>
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
    change_stories: actions.change_stories
     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(Happy);






