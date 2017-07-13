
let data = ['{"id":1,"name":"Task1","complete":"not complete"}',
        '{"id":2,"name":"Task2","complete":"completed"}',
       '{"id":3,"name":"Task3","complete":"not complete"}',
        '{"id":4,"name":"Task4","complete":"completed"}',
        '{"id":5,"name":"Task5","complete":"not complete"}',
        '{"id":6,"name":"Task5","complete":"completed"}',
        '{"id":7,"name":"Task6","complete":"not complete"}',
        '{"id":8,"name":"Task7","complete":"completed"}',
        '{"id":9,"name":"Task8","complete":"not complete"}',
        '{"id":10,"name":"Task9","complete":"completed"}']; 

let tasks = []; 
for( let i = 0; i < data.length; i++) {
    tasks[i] = JSON.parse(data[i]) 
}; 

const tasksReducer = (state=tasks, action) => { 
    // обработка событий 
    switch (action.type) { 
     
        case 'CREATE_TASK': { 

            var newUser = action.payload; 
            if(action.payload.name!=="")
            var newState = state.concat(action.payload) 
        else {alert("Enter the name")
         newState=state;
         }

            return newState; 
            break; 
        } 
      
        case 'DELETE_TASK': {
            var id = action.payload 

            function matchesId(val) {
                if (val.id != id) {
                    return val
                }
            }
            var newData = state.filter(matchesId);

            return newData; 
            break;
        }
        default: {
            return state;
        }
    }
 
} 

module.exports = tasksReducer; 