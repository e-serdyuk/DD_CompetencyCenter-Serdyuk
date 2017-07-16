var React = require('react');
var Link = require('react-router-dom').Link;
var Actions = require('../actions/actions.jsx');
var bindActionCreators = require('redux').bindActionCreators;
var connect = require('react-redux').connect;

class About extends React.Component {
    constructor(){
        super();
        this.checkRate = this.checkRate.bind(this)
    }

    checkRate(event){
        this.props.rate(event.target.dataset.rate)
    }

    render() {
        return (
            <div className="about">
                    <Link to="/" replace><button>Lists</button></Link>
                    <Link to="/edit" replace><button>Edit</button></Link>
                    <div className="panel well">
                                 <h2>About</h2>
                    </div>
                <div>
                    {this.props.rated
                        ?
                        <div className="rate">Rating: {this.props.average}</div>
                        :
                        <div className="rate">Choose the rate:
                            <span data-rate={1} onClick={this.checkRate}> 1 </span>
                            <span data-rate={2} onClick={this.checkRate}> 2 </span>
                            <span data-rate={3} onClick={this.checkRate}> 3 </span>
                            <span data-rate={4} onClick={this.checkRate}> 4 </span>
                            <span data-rate={5} onClick={this.checkRate}> 5 </span>
                        </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    return {
        average: state.averageRate,
        rated: state.chosenRate
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        rate: Actions.rated
    }, dispatch)
}

module.exports = connect(mapStateToProps, matchDispatchToProps)(About);