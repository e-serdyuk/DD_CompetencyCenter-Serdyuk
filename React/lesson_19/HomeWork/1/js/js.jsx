    var users = [{ name: "Anne Montgomery", gender: "Female" },
{ name: "Annie George", gender: "Female" },
{ name: "Gary Butler", gender: "Male" },
{ name: "Lisa Mendoza", gender: "Female" },
{ name: "Marilyn Henry", gender: "Female" },
{ name: "Johnny Tucker", gender: "Male" },
{ name: "Chris Jacobs", gender: "Male" },
{ name: "Benjamin James", gender: "Male" }]

       class Hello extends React.Component {
          render() {

                    return (
            <table>
                 <tbody>
                    <tr>
                        <td>
                            {users.map((el) => {
                                return <p>{el.name}</p>;
                            })}
                        </td>
                        <td>
                            {users.map((el) => {
                                return <p>{el.gender}</p>;
                            })}
                        </td>

                    </tr>
                </tbody>
            </table>

        );
                    
          }
        }
        ReactDOM.render(
            <Hello/>,
            document.getElementById("root")
        )

  