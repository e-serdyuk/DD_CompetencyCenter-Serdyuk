const reducer = (state={users: null}, action) => {

    switch(action.type) {
        case 'CREATE_TASK': { 

            var newUser = action.payload; 
            if(action.payload.name!=="")
            var newState = state.users.concat(action.payload) 
        else {alert("Enter the name")
         newState=state.users;
         }

            return {...state, users:newState} 
            break; 
        } 
      
        case 'DELETE_TASK': {
            var id = action.payload 

            function matchesId(val) {
                if (val.id != id) {
                    return val
                }
            }
            var newData = state.users.filter(matchesId);

            return {...state, users: newData} 
            break;
        }
        case 'FETCH_USERS_START': {
            return {...state, fetching: true, users: []}
            break;
        }
        case 'FETCH_USERS_ERROR': {
            return {...state, fetching: false, error: action.payloads, users: []}
            break;
        }
        case 'RECEIVE_USERS': {
            return {
                ...state,
                fetching: false,
                fetched: true,
                users: action.payload
            }
            break;
        }

        default: {
            return state;
        }
    }
};

module.exports = reducer;