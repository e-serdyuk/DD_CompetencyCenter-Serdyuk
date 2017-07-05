    class Hello extends React.Component {
             render() {
        return (
            <div>
                <h1> Parent Component</h1>
                <Hello2 />
            </div>
        );
    }
        }
     class Hello2 extends React.Component {
          render() {
            return <h3>Child component</h3>;
          }
        }

      ReactDOM.render(
            <Hello />,
            document.getElementById("root")
        )