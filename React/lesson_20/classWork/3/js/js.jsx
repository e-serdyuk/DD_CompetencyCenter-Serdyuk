
var Hero = React.createClass({
    getInitialState: function() {
        return {
            click: 1
        };
    },

    handleClick: function () {
        this.setState({ click: this.state.click == 0 ? 1 : 0 });
    },

    render: function() {
            return (
                <div className={this.state.click ? 'turnOFF' : 'turnON'}>
                    <input type="checkbox"  onClick={this.handleClick}/>
                </div>

            );
    }
});

    ReactDOM.render(
        <Hero />,
        document.getElementById('root')
    );

