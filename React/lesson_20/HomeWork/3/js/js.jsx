var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];


var List = React.createClass({

    getInitialState: function() {
        return {
            items: users
        }
    },

   render: function() {
        return (
            <div>
                 <ul>
                    {
                        this.state.items.map(function(el, i){
                            return <ListChild key={i} name={el.name} gender={el.gender}/>
                        })
                    }
                </ul>
            </div>
        )
    }
});

var ListChild = React.createClass({
    render: function() {
        return (
            <li key={this.props.index}>{this.props.name} - {this.props.gender}</li>
        )
    }
});

var Table = React.createClass({

    getInitialState: function() {
        return {
            items: users
        }
    },

   render: function() {
        return (
            <table>
                {
                    this.state.items.map(function(el, index) {
                        return <TableChild name={el.name} gender={el.gender} />
                    })
                }
            </table>
        )
    }
});

var TableChild = React.createClass({
    render: function() {
        return (
            <tr><td>{this.props.name}</td><td>{this.props.gender}</td></tr>
        )
    }
});


var Choice = React.createClass({
    getInitialState: function () {
        return {
            on: true
        };
    },

    handleClick: function(event) {
    var i;
    if(event.target.value=="table")
           i=true;
           else i=false
        this.setState({
            on: i
         })

    },

    render: function() {
        return (
            <div>
                {this.state.on == true ? <Table /> : <List /> }
       <input type="radio" name="choice" value="table" onClick={this.handleClick}/> table<br/>
   <input type="radio" name="choice" value="list" onClick={this.handleClick}/> list<br />
            </div>
        )
    }
});

ReactDOM.render(<Choice/>,document.getElementById('root'));
