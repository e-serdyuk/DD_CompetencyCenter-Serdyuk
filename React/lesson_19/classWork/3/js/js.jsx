
       class Hello extends React.Component {
          render() {
          var sum = +this.props.one + +this.props.two;
            return <h1>Sum:{sum}</h1>;
                    
          }
        }
        ReactDOM.render(
            <Hello one={4} two={3} />,
            document.getElementById("root")
        )