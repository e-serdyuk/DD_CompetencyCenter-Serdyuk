    var Calculator = React.createClass({
        getInitialState: function () {
            return {
                firstNumber: '',
                secondNumber: '',
                result: ''
            };
        },
        firstNumberValue: function (event) {
            this.setState({ firstNumber: event.target.value });
        },
        secondNumberValue: function (event) {
            this.setState({ secondNumber: event.target.value });
        },
        add: function () { this.setState({ result: Number(this.state.firstNumber) + Number(this.state.secondNumber) });
          },
        minus: function () {
               this.setState({ result: Number(this.state.firstNumber) - Number(this.state.secondNumber) });
        },
        div: function () {
        if(this.state.secondNumber==="0"){this.setState({ result: "Divide by zero" });}
        else{
                this.setState({ result: Number(this.state.firstNumber) / Number(this.state.secondNumber) });}
        },
        mul: function () {
                this.setState({ result: Number(this.state.firstNumber) * Number(this.state.secondNumber) });
        },

        render: function () {
            return (
                <div>
                    <input type="number" placeholder="FirstNumber" onChange={this.firstNumberValue} /><br/>
                    <input type="number" placeholder="SecondNumber" onChange={this.secondNumberValue}/><br/>
                    <button onClick={this.add}>+</button>
                    <button onClick={this.minus}>-</button>
                    <button onClick={this.div}>/</button>
                    <button onClick={this.mul}>*</button>
                    <h1>{this.state.result}</h1>
                </div>

            )
        }
    });

    ReactDOM.render(
        <Calculator/>,
        document.getElementById('root')
    );
