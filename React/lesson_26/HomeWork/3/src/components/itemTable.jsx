var React = require('react');   

class ItemTable extends React.Component {
    constructor(props) {
        super(props)
    }  
 
    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Complete</th>
                   </tr>
                </thead>
                <tbody>
                   {this.props.items.map((item, i) => {
                       return(
                               <tr key={i}>
                                    <td><span style={{cursor: 'pointer',background:'red',color:'white',padding:"0 5px"}}        data-id={item.id} onClick={this.props.handler}>del</span>&nbsp;
                                    <span style={{cursor: 'pointer',background:'red',color:'white',padding:"0 5px"}}        data-id={item.id} onClick={this.props.handler2}>edit</span>
                                        {item.name}</td>
                                    <td>{item.complete}</td>
                                </tr>
                            )
                    })}
                </tbody>
            </table>
    )} 
}

module.exports = ItemTable; 


