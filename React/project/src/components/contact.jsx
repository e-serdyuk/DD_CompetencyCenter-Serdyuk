var React = require('react');   
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');   

class ContactUs extends React.Component {
    constructor(props) {
        super(props)
                this.Submit =  this.Submit.bind(this)
               this.NameChange =  this.NameChange.bind(this)
                  this.MessageChange =  this.MessageChange.bind(this)
               this.EmailChange =  this.EmailChange.bind(this)
       
        this.state = {
           name: '',
            email: '',
            message: '',
            nameValid:false,
            emailValid:false,
            messValid:false
        } 
    }  
Submit(e) {
            e.preventDefault();
            if(this.state.nameValid==true&&this.state.emailValid==true&&this.state.messValid==true){
             alert('Name: ' + this.state.name + '\n\r'
            + 'Email: ' + this.state.email + '\n\r'
            + 'Message: ' + this.state.message);}
            else alert("Please enter the valid data.Form is invalid")
        }

        NameChange(e) {
        const regExpName = new RegExp("^[A-zА-яЁё]+$");
        if(regExpName.test(e.target.value)&&e.target.value.length<25) 
        {
        this.setState({ name: e.target.value,nameValid:true })}
        else{
         console.log("Enter the valid name")
        this.setState({ name: "",nameValid:false})
        document.getElementsByName("name")[0].value="";

         }
        }
        EmailChange(e) {
        const regExpEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(regExpEmail.test(e.target.value)) 
        {
        this.setState({ email: e.target.value ,emailValid:true})
         }
        else{
         console.log("Enter the valid email")
          this.setState({ email: "",emailValid:false})
        document.getElementsByName("email")[0].value="";
         }
        }
        MessageChange(e) {
        var val=e.target.value;
        if(val.length<140){ document.getElementsByClassName("Messspan")[0].innerHTML="";
  
      }
        if(val.length>140&&val.length<145){ document.getElementsByClassName("Messspan")[0].innerHTML=val.length;
        document.getElementsByClassName("Messspan")[0].style.color="black";}
      if(val.length>145){ document.getElementsByClassName("Messspan")[0].innerHTML=val.length;
      document.getElementsByClassName("Messspan")[0].style.color="red";
      }
          if(val.length>150){ document.getElementsByClassName("Messspan")[0].innerHTML=val.length+" -150 is maximum.Textarea is invalid";
  
      }
        if(val.length<150)
        this.setState({ message: e.target.value,messValid:true })
         else{
         console.log("Enter the valid message")
          this.setState({ message: "",messValid:false})
      
         }
        }



    render(){


        return (<div>
<h2>Contact Us</h2>
<form onSubmit={this.Submit}> <div className="float_form">
<div className="left_form">
  <input type="text" name=""  name="name" onBlur={this.NameChange} placeholder="Name"/>
  <input type="text" name="" name="email" onBlur={this.EmailChange} placeholder="Enter email"/></div>
  <textarea onChange={this.MessageChange}  name="text" placeholder="Your Message"></textarea></div>
  <span className="Messspan"></span>
  <input type="submit" name="" value="Submit"/>
</form></div>
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

module.exports = connect(mapStateToProps, matchDispatchToProps)(ContactUs);






