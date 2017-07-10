import React from 'react';


export let Users = React.createClass({
    getInitialState: function () {
        return {
            users: [{name:"user1",age:"55"},
                {name:"user2",age:"44"},
                {name:"user3",age:"33"},
                {name:"user4",age:"77"},
                {name:"user5",age:"14"},
                {name:"user6",age:"77"},
                {name:"user7",age:"33"},
                {name:"user8",age:"11"}]
        };
    },
    Clicked: function () {
    var one=document.getElementById("name").value;
    var two=document.getElementById("age").value;
    if(one!=""&&two !=""){
    var arr=this.state.users;
    arr[arr.length]={ name: one, age: two };
 
    this.setState({ users: arr
             });
             console.log(JSON.stringify(this.state.users))
             }
             else alert("The fields is empty")

    },
    render: function () {
        return (
            <div>
                <table>
                       <thead>
                        <tr>
                            <th>Username</th>
                            <th>Age</th>
     
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map((el,i)=> {
                                return (
                                    <tr key={i}>
                                        <td>{el.name}</td>
                                        <td>{el.age}</td>
                                    </tr>
                                )
                        } )
                    }
                    </tbody>
                </table>
                <input type="text" id="name" placeholder="name"/>
                <input type="text" id="age" placeholder="age"/>
                  <input type="button" value="Add User" onClick={this.Clicked}/>
            </div>

        )
    }
});


