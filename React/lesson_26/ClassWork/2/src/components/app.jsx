var React = require('react');
var bindActionCreators =  require('redux').bindActionCreators;
var connect = require('react-redux').connect;
var actions = require('../actions/actions.jsx');
var ListView = require('./list.jsx');

class App extends React.Component {
    constructor(){
        super();
        this.handler = this.handler.bind(this);
        this.state = { arr: [{"id":1,"first_name":"Carlos","last_name":"Hughes","email":"chughes0@stumbleupon.com","gender":"Male"},
{"id":2,"first_name":"Ruby","last_name":"Carpenter","email":"rcarpenter1@marketwatch.com","gender":"Female"},
{"id":3,"first_name":"Bruce","last_name":"Smith","email":"bsmith2@hp.com","gender":"Male"},
{"id":4,"first_name":"David","last_name":"Howell","email":"dhowell3@webnode.com","gender":"Male"},
{"id":5,"first_name":"Kathryn","last_name":"Reynolds","email":"kreynolds4@digg.com","gender":"Female"},
{"id":6,"first_name":"Ralph","last_name":"Dunn","email":"rdunn5@oakley.com","gender":"Male"},
{"id":7,"first_name":"John","last_name":"Hughes","email":"jhughes6@miitbeian.gov.cn","gender":"Male"},
{"id":8,"first_name":"Mary","last_name":"Tucker","email":"mtucker7@cloudflare.com","gender":"Female"},
{"id":9,"first_name":"Kenneth","last_name":"Dunn","email":"kdunn8@globo.com","gender":"Male"},
{"id":10,"first_name":"Juan","last_name":"Stanley","email":"jstanley9@engadget.com","gender":"Male"}] }
    }
    handler(){ this.props.clicked(this.props.click) }

    render() {
        return (
            <div>
                <button onClick={this.handler}>Click me</button>
                {this.props.click ? <ListView items={this.state.arr}/> : ""}
            </div>
        )}
}

function mapStateToProps(state) {
    return {
        click: state
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        clicked: actions.clicked
    } , dispatch )
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(App);