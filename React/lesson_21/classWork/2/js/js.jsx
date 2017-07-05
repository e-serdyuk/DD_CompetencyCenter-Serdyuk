    var Timer = React.createClass({
        getInitialState: function () {
            return {
                count: 0
            }

        },
        componentWillMount: function () {
          this.interval = setInterval(this.addCount, 1000);
        },
        addCount: function () {
            this.setState({ count: ++this.state.count});
        },

        render: function () {
            return (<h1>{this.state.count}</h1>)
        }
    });

    ReactDOM.render(
        <Timer/>,
        document.getElementById('root')
    );

