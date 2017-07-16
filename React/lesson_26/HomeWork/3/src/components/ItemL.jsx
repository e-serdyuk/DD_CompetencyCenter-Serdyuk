var React = require('react');   

class List extends React.Component {
    constructor(props) {
        super(props)
    }  
    render(){
        return (
            <ul>
                {
                    this.props.items.map((item, i) => (
                                <li key={i}>
                                        {item.name} - {item.complete}</li>
                    ))
                }
            </ul>
        )
    }
}

module.exports = List; 






