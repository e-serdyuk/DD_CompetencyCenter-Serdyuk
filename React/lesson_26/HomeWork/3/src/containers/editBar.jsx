var React = require('react');  

var bindActionCreators = require('redux').bindActionCreators;  
var connect = require('react-redux').connect;  
var actions = require('../actions/actions.jsx'); 
var Link = require('react-router-dom').Link;
var ListView = require('../components/itemList.jsx');
var ItemTable = require('../components/itemTable.jsx');

class EditBar extends React.Component {
    constructor(){
        super();
        this.choose =  this.choose.bind(this)
        this.choose =  this.choose.bind(this)
            this.state = {
            ch: "", id:""
         
        } 
        }
        choose(e) { 
          this.setState({
            ch: e.currentTarget.value
        });
     }
                 clickHandler(e) { 
        this.props.deleteTask(e.target.dataset.id); 
    }
                     clickHandlerEdit(e) { 
   //     this.props.editTask(e.target.dataset.id);
   console.log(e.target.dataset.id) 
            this.setState({
            ch: e.currentTarget.value,id:e.target.dataset.id-1
        });
    document.getElementById("inputedit").value=this.props.stateNew.users[e.target.dataset.id-1].name

    if(this.props.stateNew.users[e.target.dataset.id-1].complete=="completed")
    {document.getElementById("completed_edit").checked = true;}
    else {document.getElementById("nocompleted_edit").checked=true;}
    }

    
    render() {
       
    let chooseHandler = this.choose.bind(this);
    let boundHandler = this.clickHandler.bind(this);
    let boundHandler2 = this.clickHandlerEdit.bind(this);
        let getTaskData = (flag) => {
       
            function getComplete() {
               if(flag==1){var checkedOption = document.querySelector('input[name="complete_edit"]:checked') }
                else var checkedOption = document.querySelector('input[name="complete"]:checked') 
                
                if (checkedOption) {
                    switch (checkedOption.value) {
                        case 'true': {
                            return 'completed'
                            break;
                        }
                        case 'false': {
                            return 'not complete' 
                            break; 
                        } 
                    }
                } 
                else {
                    return 'not specified'
                }
            }

        var complete = getComplete(); 
        if(flag==1){ var newTask = {
            id: this.state.id+1,
            name: document.getElementById('inputedit').value,  
            complete: complete
  
        } }
         else{
        var newTask = {
            id: `${this.props.stateNew.users.length+1}`,
            name: document.getElementById('input').value,  
            complete: complete
  
        } }
        return newTask; 

        } 



        return (

        <div className="form-group panel well"> 
              <Link to="/" replace><button>List</button></Link>
            <Link to="/about" replace><button>About</button></Link>
                      <div className="panel well">
                <h2>Choose table or list</h2>
           </div>
           <select onChange={chooseHandler}>
           <option value="table">table</option>
           <option value="list">list</option>
           </select>
            <div className="panel well">
           <h2>Tasks List</h2>
            </div>
                   <div>
                          {this.state.ch=="list" ? <ListView items={this.props.stateNew.users} handler={boundHandler} handler2={boundHandler2}/> :          <ItemTable items={this.props.stateNew.users} handler={boundHandler} handler2={boundHandler2}/>}
            </div>
  
               <div className="input-group">
                        <label> Task name </label>
                        <input id="input" type="text" className="form-control input-md" placeholder="name"/>
                        <span className="input-group-btn"> 
                            <button className="btn-md btn-warning btn" onClick={() => this.props.createTask(getTaskData(0))}>Add task</button> 
                        </span> 
              </div>               
              <div className="form-group">
                    <label> completed &nbsp; <input type="radio" name="complete" value="true"/></label>
                    <label> not complete &nbsp; <input type="radio" name="complete" value="false"/> </label>
              </div>

              <div className="editclass">
                        <div className="input-group">
                        <label> Task name </label>
                        <input id="inputedit" type="text" className="form-control input-md" placeholder="name"/>
                        <span className="input-group-btn"> 
                            <button className="btn-md btn-warning btn" onClick={() => this.props.editTask(getTaskData(1))}>Edit task</button> 
                        </span> 
              </div>               
              <div className="form-group">
                    <label> completed &nbsp; <input type="radio" id="completed_edit" name="complete_edit" value="true"/></label>
                    <label> not complete &nbsp; <input type="radio" id="nocompleted_edit" name="complete_edit" value="false"/> </label>
              </div>


              </div>




        </div>
    )}
}

// связать состояние приложения и состояние компонента
function mapStateToProps(state) {
console.log(state)
    return {
        stateNew: state
    }
} 
// связать actions с компонентом 
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createTask: actions.createTask,
        deleteTask: actions.deleteTask,
        editTask: actions.editTask,
    }, dispatch)
} 

module.exports = connect(mapStateToProps, matchDispatchToProps)(EditBar); 