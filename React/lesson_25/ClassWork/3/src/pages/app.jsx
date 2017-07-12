var React = require('react'); 
var appStore = require('../Stores/appStore'); 
var appActions = require('../Actions/appActions');

class Calc extends React.Component{
    constructor() {
        super();

        this.state = {
            number1: '',
            number2: '',
            result: ''
        };

        this.first = this.first.bind(this);
        this.second = this.second.bind(this);
        this.clickHandler4 = this.clickHandler4.bind(this);
        this.clickHandler1 = this.clickHandler1.bind(this);
        this.clickHandler2 = this.clickHandler2.bind(this);
        this.clickHandler3 = this.clickHandler3.bind(this);
    }

    componentWillMount() {
        appStore.on('plus', () => {
                appStore.plusFunc(this.state.number1, this.state.number2);
                this.setState({ result: appStore.getResult() })

            }
        );
        appStore.on('minus', () => {
                appStore.minusFunc(this.state.number1, this.state.number2);
                this.setState({ result: appStore.getResult() })
            }
        );
        appStore.on('multi', () => {
                appStore.multiFunc(this.state.number1, this.state.number2);
                this.setState({ result: appStore.getResult() })
            }
        );
        appStore.on('divide', () => {
                appStore.divideFunc(this.state.number1, this.state.number2) 
                this.setState({ result: appStore.getResult() })
            }
        );

    }

    first(event){
        this.setState({
            number1: event.currentTarget.value
        });
    }

    second(event){
        this.setState({
            number2: event.currentTarget.value
        });
    }

    clickHandler4(){
        if(this.state.number1 =='' || this.state.number2 == ''){
             alert("Enter the fields")
              this.setState({ result: "" })
        }
       else  if(Number(this.state.number2)==0){

            this.setState({ result: "Divide by Zero" })
 
        }
        else appActions.divide()
    }

   clickHandler3(){
        if(this.state.number1 =='' || this.state.number2 == ''){
           alert("Enter the fields")
           this.setState({ result: "" })
        }
        else appActions.multi()
    }
    clickHandler2(){
        if(this.state.number1 =='' || this.state.number2 == ''){
           alert("Enter the fields")
           this.setState({ result: "" })
        }
        else  appActions.minus()
    }
    clickHandler1(){
        if(this.state.number1 =='' || this.state.number2 == ''){
          alert("Enter the fields")
          this.setState({ result: "" })
        }
         else appActions.plus()
    }

    render() {
        return (
            <div>
                <input type="number" onChange={this.first}/>
                <input type="number" onChange={this.second}/>
                <div>
                <input type="button" value='+' onClick={this.clickHandler1}/>
                <input type="button" value='-' onClick={this.clickHandler2}/>
                <input type="button" value='*' onClick={this.clickHandler3}/>
                <input type="button" value='/' onClick={this.clickHandler4}/>
                </div>
                <p>{this.state.result}</p>
            </div>
        )}
}

module.exports = Calc;