var React = require('react');

export default class List extends React.Component {
    render() {

        return (
            <ul>
                {
                    this.props.items.map
                    ((item,i)=>
                    <li key={i}>{item.first_name} {item.last_name}
                     </li>
                     )
                }
            </ul>
        )
    }
}

module.exports = List;