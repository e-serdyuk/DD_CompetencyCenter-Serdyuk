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
                                <span style={{cursor: 'pointer',background:'red',color:'white',padding:"0 5px"}}        data-id={item.id} onClick={this.props.handler}>del</span>&nbsp;
                                        {item.name} - {item.complete}</li>
                    ))
                }
            </ul>
        )
    }
}

module.exports = List; 






