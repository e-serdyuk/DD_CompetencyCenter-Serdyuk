 var Timer = React.createClass({
        getInitialState: function () {
            return {
                count: 0,
                flag:1
            }

        },
        componentWillMount: function () {
          this.interval = setInterval(this.addCount, 1000);
        },
        addCount: function () {
            this.setState({ count: ++this.state.count});
        },
        stop: function () {
            clearInterval(this.interval);
            this.setState({ flag: 0});
        },
        start: function () {
        if(this.state.flag==0){ this.interval = setInterval(this.addCount, 1000); this.setState({ flag: 1});}
        },
        reset: function () {

            this.setState({ count: 0});
            clearInterval(this.interval);
        },
        render: function () {
            return (<div>
            <h1>{this.state.count}</h1>
            <button type="button" onClick={this.stop}>stop</button>
            <button type="button"  onClick={this.start}>start</button>
            <button type="button" onClick={this.reset}>reset</button>
            </div>
            )
        }
    });

    ReactDOM.render(
        <Timer/>,
        document.getElementById('root')
    );
