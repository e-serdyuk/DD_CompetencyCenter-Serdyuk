var users = [{name:"Anne Montgomery",gender:"Female"},
    {name:"Annie George",gender:"Female"},
    {name:"Gary Butler",gender:"Male"},
    {name:"Lisa Mendoza",gender:"Female"},
    {name:"Marilyn Henry",gender:"Female"},
    {name:"Johnny Tucker",gender:"Male"},
    {name:"Chris Jacobs",gender:"Male"},
    {name:"Benjamin James",gender:"Male"}];

    function getRandomColor() {
                var h = Math.floor(Math.random() * (255 - 1) + 1); 
                var s = Math.floor(Math.random() * (100 - 1) + 1) + '%'; 
                var l = '50%'; 
                var randomColor = 'hsl(' + h + ',' + s + ',' + l + ')';
                return randomColor;
            }
var colorNew="";
var Parent = React.createClass({

    getInitialState: function() {
        return {
            items: users,
            limit:8
        }
    },

    handler: function(event) {
        var number = document.getElementsByTagName("input")[0].value;
        var newArray = users.slice(0, number);
        this.setState({
            items: newArray,
            limit:number
        })
    },
       componentWillUpdate: function() {
        colorNew = getRandomColor()
    },

    render: function() {
        return (
            <div>
            <input type="number" max="8" min="0" value={this.state.limit} onChange={this.handler} /><br />
                <ul style={{color: colorNew}}>
                    {
                        this.state.items.map(function(el, i){
                            return <Child key={i} name={el.name} gender={el.gender}/>
                        })
                    }
                </ul>
            
            </div>
        )
    }
});

var Child = React.createClass({
    render: function() {
        return (
            <li key={this.props.index}>{this.props.name} - {this.props.gender}</li>
        )
    }
});

ReactDOM.render(<Parent/>,document.getElementById('root'));
