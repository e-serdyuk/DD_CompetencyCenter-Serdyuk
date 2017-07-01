     class Hello extends React.Component {
          render() {
     var styles = {
        color: 'red',
        fontSize: '35px',
      };

      return <h1 style={styles}>Hello World</h1>;
                 
          }
        }
        ReactDOM.render(
            <Hello/>,
            document.getElementById("root")
        )

