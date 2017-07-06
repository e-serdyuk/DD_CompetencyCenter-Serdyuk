    var Form = React.createClass({
        getInitialState: function () {
            return {
            name: '',
            email: '',
            phone: '',
            message: ''
            };
        },
        Submit(e) {
            e.preventDefault();
             alert('Name: ' + this.state.name + '\n\r'
            + 'Email: ' + this.state.email + '\n\r'
            + 'Phone: ' + this.state.phone + '\n\r'
            + 'Message: ' + this.state.message);
        },
        NameChange(e) {
        const regExpName = /[A-Za-z]{3,}/;
        if(regExpName.test(e.target.value)) 
        {
        this.setState({ name: e.target.value })}
        else{
         console.log("Enter the valid name")
        this.setState({ name: ""})
        document.getElementsByName("name")[0].value="";

         }
        },

        PhoneChange(e) {
        const regExpNumber = /^[0-9\b]+$/;
        if(regExpNumber.test(e.target.value)) 
        {
        this.setState({ phone: e.target.value })

         }
        else{
         console.log("Enter the valid number")
        this.setState({ phone: ""})
        document.getElementsByName("number")[0].value="";

         }
        },
        EmailChange(e) {
        const regExpEmail = /^([a-z0-9_\.-])+@[a-z0-9-]+\.([a-z]{2,4}\.)?[a-z]{2,4}$/i;
        if(regExpEmail.test(e.target.value)) 
        {
        this.setState({ email: e.target.value })
         }
        else{
         console.log("Enter the valid email")
          this.setState({ email: ""})
        document.getElementsByName("email")[0].value="";
         }
        },
        MessageChange(e) {
        this.setState({ message: e.target.value })
        },
        render: function () {
            return (
                <form onSubmit={this.Submit}>
                    <div>
                        <label>Name</label><br/>
                        <input type="text" name="name" onBlur={this.NameChange} required/>
                        
                    </div>
                    <div>
                        <label>Email</label><br/>
                        <input type="email" name="email"  onBlur={this.EmailChange} required/>
                        
                    </div>
                    <div>
                        <label>Phone number</label><br/>
                        <input type="text" name="number" onBlur={this.PhoneChange} required/>
                   </div>
                    <div>
                        <label>Message</label><br/>
                        <input className="text" type="text" name="text" minLength="6" onBlur={this.MessageChange}  required/>
                    </div>
                    <input type="submit" value='submit'/>
                </form>

            )
        }
    });

    ReactDOM.render(
        <Form/>,
        document.getElementById('root')
    );




