    var Counter = React.createClass({
        getInitialState: function () {
            return {
                number: 0
            };
        },
        add:function () {
            this.setState({ number: this.state.number + 1 });
        },
        minus:function () {
            this.setState({ number: this.state.number - 1 });
        },
        render: function () {
                return (
                    <div>
                        <button onClick={this.add}>+</button>
                        <button onClick={this.minus}>-</button><br/>
                        <h1>{this.state.number}</h1>
                        
                    </div>

                )
        }
    });

    ReactDOM.render(
        <Counter/>,
        document.getElementById('root')
    );
