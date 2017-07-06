  class List extends React.Component {
      render() {
          var temp = [];
          for (var index in this.props) {
              temp.push(this.props[index])
          }
          return ( <div >
              <ul > {
                  temp.map(function(el, i) {
                      return <li key = {i} > {el} </li>
                  })
              } </ul>

              </div>
          )

      }
  }

  class Hello extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              show: false
          };
          this.handler = this.handler.bind(this)
      }
      handler() {
          this.setState({
              show: true
          })
      }

      render() {
          return ( < div >
              <button onClick = {this.handler}> Button </button> {
                  this.state.show == true ? < List one = "4"
                  two = "3"
                  three = "5" / >: "Click for list"
              } </div>
          )
      }

  }


  ReactDOM.render( <Hello / > ,
      document.getElementById("root")
  )