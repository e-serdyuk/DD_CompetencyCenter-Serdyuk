var React = require('react');  

var bindActionCreators = require('redux').bindActionCreators;  
var connect = require('react-redux').connect;  
var actions = require('../actions/actions'); 

class EditBar extends React.Component {
    
    render() {
       
       
        let getTaskData = () => {
       
            function getComplete() {
                
                var checkedOption = document.querySelector('input[name="complete"]:checked') 
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
 
        var newTask = {
            id: `${Date.now()}`,
            name: document.getElementById('input').value,  
            complete: complete
  
        } 
        return newTask; 

        } 

        return (

        <div className="form-group panel well"> 
               <div className="input-group">
                        <label> Task name </label>
                        <input id="input" type="text" className="form-control input-md" placeholder="name"/>
                        <span className="input-group-btn"> 
                            <button className="btn-md btn-warning btn" onClick={() => this.props.createTask(getTaskData())}>Add task</button> 
                        </span> 
              </div>               
              <div className="form-group">
                    <label> completed &nbsp; <input type="radio" name="complete" value="true"/></label>
                    <label> not complete &nbsp; <input type="radio" name="complete" value="false"/> </label>
              </div>
        </div>
    )}
}

// связать состояние приложения и состояние компонента
function mapStateToProps(state) {
    return {
        tasks: state
    }
} 
// связать actions с компонентом 
function matchDispatchToProps(dispatch) {
    return bindActionCreators({
        createTask: actions.createTask
    }, dispatch)
} 

module.exports = connect(mapStateToProps, matchDispatchToProps)(EditBar); 