var Images = React.createClass({

    getInitialState: function() {
        return {
            src: "",
            link: 'image.jpg'
        }
    },

    getImage: function() {
    let link = this.state.link;
        return new Promise(function(resolve, reject)
        {
            var img = new Image();
            img.onload = function()
            {
                return resolve(link);
            }
            img.onerror = function()
            {
                return reject("Error");
            }
            img.src = link;
        })  .then(
    (result) => {
     this.setState({
                src: result
            })

        alert("Fulfilled: " + result);
        document.querySelector("button").style.display = "none"; 
    },
    (error) => {
        alert("Rejected: " + error); 
    }
  );
    },

    render: function() {
        return (
        <div>
            <button onClick={this.getImage}>Get Image</button>
            <img src={this.state.src} alt=""/>
        </div>
        )
    }
});

ReactDOM.render(
    <Images/>,
    document.getElementById("root")
);