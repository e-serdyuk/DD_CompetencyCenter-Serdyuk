var Click = React.createClass({
    getInitialState: function () {
        return {
            clicked: true
        }
    },
    handler: function(){
        this.setState({clicked: !this.state.clicked});
    },
    render: function() {

        return (<div>
            <div className={this.state.clicked ? "black" : "red"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br /></div>
                <button onClick={this.handler} >Button</button>
            </div>
        )
    }
});

ReactDOM.render(
    <Click/>,
    document.getElementById('root')
);