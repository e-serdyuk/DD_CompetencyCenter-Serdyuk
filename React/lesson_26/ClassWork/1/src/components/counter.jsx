var React = require('react'); 
var bindActionCreators =  require('redux').bindActionCreators; 
var connect = require('react-redux').connect; 

var actions = require('../actions/index'); 

class ShowText extends React.Component {
 constructor(){
        super();
        this.inputValueFunc = this.inputValueFunc.bind(this);
    }
    inputValueFunc(event){
        this.props.value(event.currentTarget.value)
    }
    render() {   
        return (
            <div>
               <input type="text" onChange={this.inputValueFunc}/>
                <h1>{this.props.text}</h1>
            </div>
    )} 
}

//функция для привязки состояния приложения к props (свойствам компонента)
 function mapStateToProps(state) {
    return {
       text: state
   }
 } 

 //функция для привязки actions к props (свойствам компонента)
 function matchDispatchToProps(dispatch) {
     return bindActionCreators({
         value: actions.showText, 
     } , dispatch )
 }

 // привязка actions и state к React компоненту 
module.exports = connect(mapStateToProps, matchDispatchToProps)(ShowText); 