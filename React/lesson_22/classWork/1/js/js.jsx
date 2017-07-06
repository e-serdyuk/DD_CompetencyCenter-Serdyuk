'use strict';
    let options = {
        title: "Menu",
        width: 100,
        height: 200
    };



    var Task = React.createClass({

    render: function() {
       let {width: w, height: h, title:t} = options;

        return (
            <div>
                <p>Tittle: {t}</p>
                <p>Width : {w}</p>
                <p>Height: {h}</p>
            </div>
        )
    }
});

ReactDOM.render(
    <Task/>,
    document.getElementById('root')
);