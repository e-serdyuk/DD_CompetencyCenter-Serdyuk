var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var ListView = require('../components/itemList.jsx');
var ItemTable = require('../components/itemTable.jsx');
var Search = require('../components/search.jsx');
var Members = require('../components/members.jsx');
var EditBar = require('./editBar.jsx'); 
var Happy = require('../components/happy.jsx');
var Parallax = require('../components/parallax.jsx');
var Blog = require('../components/blog.jsx');
var Join= require('../components/joinus.jsx');
 var ContactUs= require('../components/contact.jsx');
var Scroll  = require('react-scroll');

var Link       = Scroll.Link;
var Element    = Scroll.Element;
var Events     = Scroll.Events;
var scroll     = Scroll.animateScroll;
var scrollSpy  = Scroll.scrollSpy;

class App extends React.Component {
    constructor(){
        super();
   

        }

    render() {

        return ( <div>
<header>
   <div id="logo" className="header_group">
      <a href="index.html">LOGO</a>
   </div>
   <div id="menu" className="header_group">
      <nav className="menu">
         <ul>
            <li className="current-item"><Link to="test1" spy={true} smooth={true} duration={1500}>Home</Link></li>
            <li><Link to="search" spy={true} smooth={true} duration={1500}>Search</Link></li>
            <li><Link to="members" spy={true} smooth={true} duration={1500}>Members</Link></li>
            <li><Link to="happy" spy={true} smooth={true} duration={1500}>Extras</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={1500}>Contact us</Link></li>
            <li><Link to="blog" spy={true} smooth={true} duration={1500}>Blog</Link></li>
         </ul>
      </nav>

   </div>
   <div className="signup header_group">
     <a>LOGIN/SIGNUP</a>
   </div>

   <button className="hamburger">&#9776;</button>
   <button className="cross">&#735;</button>
   <div className="menu_burg">
         <ul>
            <li className="current-item"><a>Home</a></li>
            <li><a>Search</a></li>
            <li><a>Members</a></li>
            <li><a>Extras</a></li>
            <li><a>Contact us</a></li>
            <li><a>Blog</a></li>
         </ul>
   </div>
</header>
<div id="top" className="photo">
   <div className="photo_text">ALL YOU NEED <br/>is LOVE</div>
</div>

<Element name="search" className="search_section">
<Search/>
</Element>

<Element name="members" className="members">
<Members/>
</Element>

<Element name="test3" className="parallax_section">
<Parallax/>
</Element>

<Element name="happy" className="happy">
<Happy/>
</Element>

<Element name="blog" className="section_blog">
 <Blog items={this.props.stateNew.blogs} />
</Element>

<Element name="test6" className="joinUs">
<Join/>

</Element>

<Element name="contact" className="contact_us">
<ContactUs/>
</Element>
                                <ListView items={this.props.stateNew.blogs} />               
   </div>     )}
}

function mapStateToProps(state) {
console.log(state)
    return {
        stateNew: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({

     } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);