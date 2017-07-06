 class Person  {
        constructor(firstName = 'John', lastName = 'Doe', age = 0, gender = 'Male') {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.gender = gender;
        }

        fullName() {
            return this.firstName + ' ' + this.lastName;
        };
        sayHi() {
            alert('Hello, my name is ' + this.fullName()+'<br/>') ;
        };
    }
    var person = new Person();




class User extends Person{
    constructor(firstName, lastName, age, gender, signUpDate = 0, id){
        super(firstName, lastName, age, gender);
        this.signUpDate = signUpDate;
        this.id = id;
    }
}

var anna = new User('Anna','Ivanova');


var ivan,petr,aleksandr,aleksandra,svetlana
var users = [
    ivan = new User('Ivan','Ivanov',44, 'Male','19/05/17',1),
    petr = new User('Petr','Petrov',43, 'Male', '19/06/17',2),
    aleksandr = new User('Aleksandr', 'Kirichenko',28, 'Male', '04/07/17',3),
    aleksandra = new User('Aleksandra', 'Omelchenko',34, 'Female', '02/07/17',4),
    svetlana = new User('Svetlana', 'Oleynik',20, 'Female', '24/03/17',5)
];

class Table extends React.Component {
    render() {
        return (
            <table>
                {
                    users.map(function(el) {

                        return (
                                <tr key={el.id} onClick={el.sayHi.bind(el)}>
                                <td>{el.firstName}</td>
                                <td>{el.lastName}</td>
                                <td>{el.age}</td>
                                <td>{el.gender}</td>
                                <td>{el.signUpDate}</td>
                                <td>{el.id}</td>
                                </tr>
                               )
                    })
                }

            </table>
        );
    }
}

ReactDOM.render(
    <Table/>,
    document.getElementById('root')
);