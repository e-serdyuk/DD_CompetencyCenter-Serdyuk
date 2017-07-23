var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var Search = require('../components/search.jsx');
var Members = require('../components/members.jsx');
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

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link as Links
} from 'react-router-dom'



class App extends React.Component {
    constructor(){
        super();
   

        }
  scrollTo() {
    scroll.scrollToTop();
  }
    render() {


const Modal = ({ match, history,e }) => {
var id=match.params.id;
 var item=this.props.stateNew.data[id]
 
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className='overlay' onClick={back} >
      <div className='modal' >
      <img src={item.image}/>
        <h1>{item.first_name} {item.last_name}</h1>
        <p> <b>age-</b>{item.age}</p>
        <p> <b>description-</b>{item.description}</p>
         <p> <b>date_registration-</b>{item.date_registration}</p>
          <p> <b>Online-</b>{item.isOnline}</p>
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  )
}

const ModalOnline = ({ match, history,e }) => {
var id=match.params.id;
 var item=this.props.stateNew.OnlineData[id]
 
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className='overlay' onClick={back} >
      <div className='modal' >
      <img src={item.image}/>
        <h1>{item.first_name} {item.last_name}</h1>
        <p> <b>age-</b>{item.age}</p>
        <p> <b>description-</b>{item.description}</p>
         <p> <b>date_registration-</b>{item.date_registration}</p>
          <p> <b>Online-</b>{item.isOnline}</p>
        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  )
}


const Blogs = ({ match, history,e }) => {

var id=match.params.id;
 var item=this.props.stateNew.blogsToShow[id]
 
  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className='overlay' onClick={back} >
      <div className='modal_blogs' >
      
        <h1>{item.title}</h1>
        <p> <b>content-</b>{item.content}</p>
        <p> <b>link-</b>{item.link}</p>

        <button type='button' onClick={back}>
          Close
        </button>
      </div>
    </div>
  )
}

const Login = ({ match, history,e }) => {
const open = (e) => {
 document.getElementsByClassName("tab1_1")[0].style.color="black";
document.getElementsByClassName("tab1_1")[0].style.borderBottom="4px solid #dba1fd";
document.getElementsByClassName("tab2_1")[0].style.color="#a1a1a1";
document.getElementsByClassName("tab2_1")[0].style.borderBottom="4px solid #dbdbdb";
document.getElementById("form_modal2").style.display="none";
document.getElementById("form_modal").style.display="block";
  
}
const open2 = (e) => {
 document.getElementsByClassName("tab2_1")[0].style.color="black";
document.getElementsByClassName("tab2_1")[0].style.borderBottom="4px solid #dba1fd";
document.getElementsByClassName("tab1_1")[0].style.color="#a1a1a1";
document.getElementsByClassName("tab1_1")[0].style.borderBottom="4px solid #dbdbdb";
document.getElementById("form_modal").style.display="none";
document.getElementById("form_modal2").style.display="block";
  
}

  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className='overlay' >
      <div className='modal_login' >
       <button type='button' onClick={back}>
          X
        </button>
    <div className="tabs tabs_modal">
     <a className="tabs_a tab1_1" onClick={open}>Login</a>
     <a className="tabs_a tab2_1" onClick={open2}>Signup</a>

  </div>

    <form id="form_modal">
    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Password"/>
    <input type="submit" value="LOG IN"/>
    </form>
     <form id="form_modal2">
    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Password"/>
    <input type="submit" value="SIGN IN"/>
    </form>

 
      </div>
    </div>
  )
}



const Signup = ({ match, history,e }) => {
const open = (e) => {
 document.getElementsByClassName("tab1_2")[0].style.color="black";
document.getElementsByClassName("tab1_2")[0].style.borderBottom="4px solid #dba1fd";
document.getElementsByClassName("tab2_2")[0].style.color="#a1a1a1";
document.getElementsByClassName("tab2_2")[0].style.borderBottom="4px solid #dbdbdb";
document.getElementById("form_modal4").style.display="none";
document.getElementById("form_modal3").style.display="block";
  
}
const open2 = (e) => {
 document.getElementsByClassName("tab2_2")[0].style.color="black";
document.getElementsByClassName("tab2_2")[0].style.borderBottom="4px solid #dba1fd";
document.getElementsByClassName("tab1_2")[0].style.color="#a1a1a1";
document.getElementsByClassName("tab1_2")[0].style.borderBottom="4px solid #dbdbdb";
document.getElementById("form_modal3").style.display="none";
document.getElementById("form_modal4").style.display="block";
  
}

  const back = (e) => {
    e.stopPropagation()
    history.goBack()
  }
  return (
    <div className='overlay' >
      <div className='modal_login' >
       <button type='button' onClick={back}>
          X
        </button>
    <div className="tabs tabs_modal">
     <a className="tabs_a tab1_2" onClick={open}>Login</a>
     <a className="tabs_a tab2_2" onClick={open2}>Signup</a>

  </div>

    <form id="form_modal3">
    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Password"/>
    <input type="submit" value="LOG IN"/>
    </form>
     <form id="form_modal4">
    <input type="text" placeholder="Name"/>
    <input type="text" placeholder="Password"/>
    <input type="submit" value="SIGN IN"/>
    </form>

 
      </div>
    </div>
  )
}


return ( <div>
   <header>
   <div className="header_container" >
   <div id="logo" className="header_group">
      <a href="index.html">LOGO</a>
   </div>
   <div id="menu" className="header_group">
      <nav className="menu">
         <ul>
            <li className="current-item"><Link onClick={this.scrollTo} spy={true} smooth={true} duration={1500}>Home</Link></li>
            <li><Link to="search" spy={true} smooth={true} duration={1500}>Search</Link></li>
            <li><Link to="members" spy={true} smooth={true} duration={1500}>Members</Link></li>
            <li><Link to="happy" spy={true} smooth={true} duration={1500}>Extras</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={1500}>Contact us</Link></li>
            <li><Link to="blog" spy={true} smooth={true} duration={1500}>Blog</Link></li>
         </ul>
      </nav>

   </div>
   <div className="signup header_group">
     <Links to='/Login'>LOGIN/SIGNUP</Links>
   </div>

   <button className="hamburger">&#9776;</button>
   <button className="cross">&#735;</button>
   <div className="menu_burg">
            <ul>
            <li className="current-item"><Link onClick={this.scrollTo} spy={true} smooth={true} duration={1500}>Home</Link></li>
            <li><Link to="search" spy={true} smooth={true} duration={1500}>Search</Link></li>
            <li><Link to="members" spy={true} smooth={true} duration={1500}>Members</Link></li>
            <li><Link to="happy" spy={true} smooth={true} duration={1500}>Extras</Link></li>
            <li><Link to="contact" spy={true} smooth={true} duration={1500}>Contact us</Link></li>
            <li><Link to="blog" spy={true} smooth={true} duration={1500}>Blog</Link></li>
         </ul>
   </div>
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
 {this.props.stateNew.blogsToShow!=null ? <Blog items={this.props.stateNew.blogsToShow}/> : " "  } 
</Element>

<Element name="test6" className="joinUs">
<Join/>

</Element>

<Element name="contact" className="contact_us">
<ContactUs/>
</Element>


<footer>
<div className="footer_container">
<div className="footer_elems footer_about">
<h3>ABOUT US</h3>
<p>We are announcing the rebranding of Dating Solutions to WP Dating today. We thank all our customers of Dating Solutions and assure you that you will still remain as valued customers. You will still be able to receive the same or better level of products and support</p>
</div>
<div className="footer_elems footer_menu1">
        
            <p><Link onClick={this.scrollTo} spy={true} smooth={true} duration={1500}>Home</Link></p>
           <p><Link to="search" spy={true}  smooth={true} duration={1500}>Search</Link></p>
            <p><Link to="members" spy={true} smooth={true} duration={1500}>Members</Link></p>
       
</div>
<div className="footer_elems footer_menu2">
            <p><Link to="happy" spy={true} smooth={true} duration={1500}>Extras</Link></p>
            <p><Link to="contact" spy={true} smooth={true} duration={1500}>Contact us</Link></p>
            <p><Link to="blog" spy={true} smooth={true} duration={1500}>Blog</Link></p>
       
</div>
<div className="footer_elems footer_social">
<h3>SOCIAL</h3>
<div>
<ul>
<li><a href="https://twitter.com" ><img src="../src/images/twitter.png" /></a></li>
<li><a href="https://facebook.com" ><img src="../src/images/facebook.png" /></a></li>
<li><a href="https://instagram.com" ><img src="../src/images/ins.png" /></a></li>
</ul>

</div>
<p>Copyright @ Karma Dating 2017</p>

</div>
</div>
</footer>
   <Switch>
    <Route path='/newUsers/:id' component={Modal} /> 
    <Route path='/OnlineUsers/:id' component={ModalOnline} /> 
    <Route path='/Blogs/:id' component={Blogs} /> 
    <Route path='/Login' component={Login} /> 
    <Route path='/signup' component={Signup} /> 
</Switch>
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