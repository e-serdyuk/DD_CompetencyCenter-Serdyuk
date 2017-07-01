       class Hello extends React.Component {
          render() {

      return (
        <form>
               <input type="text" placeholder="name" />
               <input type="text" placeholder="login" />
            <input type="submit" value="Submit" />
        </form>

        );
                    
          }
        }
        ReactDOM.render(
            <Hello/>,
            document.getElementById("root")
        )
