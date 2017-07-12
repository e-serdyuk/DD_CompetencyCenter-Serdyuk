var React = require('react');

var appStore = require('../stores/appStore.js');
var appActions = require('../actions/appActions.js');

class Timer extends React.Component{
    constructor() {
        super();
        this.state = {
            interval: "",
            flag: false,
            counter: appStore.getInitialCount()
        };
        this.clickHandler1 = this.clickHandler1.bind(this);
        this.intervalFunc = this.intervalFunc.bind(this);
        this.clickHandler3 = this.clickHandler3.bind(this);
        this.clickHandler2 = this.clickHandler2.bind(this);
    }

    componentWillMount() {
        appStore.on('countStart', () => {
                appStore.countClicks();
                this.setState({ counter: appStore.getInitialCount() })
            }
        )
        appStore.on('countReset', () => {
                appStore.ResetFunc();
                this.setState({ counter: appStore.getInitialCount() })
                clearInterval(this.state.interval);
            }
        )
                appStore.on('countStop', () => {
                  clearInterval(this.state.interval);
             
            }
        )
    }

    clickHandler1() {
        if(!this.state.flag) {
            this.setState({interval: setInterval(this.intervalFunc, 1000), flag: true})
        }
    }

    clickHandler3() {
        this.setState({
            flag: false
        });
        appActions.Reset();
    }

    clickHandler2() {
      
        this.setState({
            flag: false
        });
        appActions.Stop();
    }
    intervalFunc(){
        appActions.Start();
    }
        componentDidMount(){
        this.clickHandler1();
    }

    render() {
        return (
            <div>
                  <button  onClick={this.clickHandler1}>Start</button>
                <button onClick={this.clickHandler2}>Stop</button>
                <button  onClick={this.clickHandler3}>Reset</button>
                <h1>{this.state.counter}</h1>
            </div>
        )}
}

module.exports = Timer;