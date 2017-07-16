const reducer = (state={users: null,rating: [1,2,3,4,2,5,5,3,5,2,1,3,4,5,4,1,2]}, action) => {

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
        case 'EDIT_TASK': {
        if(action.payload.name==""){
        alert("Enter the name")
        return {...state, users: state.users} 
        }
        else{
        var id = action.payload.id
            function matchesId(val) {
                if (val.id == id) {
                val.name=action.payload.name
                val.complete=action.payload.complete
                    
                }
                return val
            }
            var newData = state.users.filter(matchesId);

            return {...state, users: newData} }
  
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
             case 'RATED': {
            let RateData = state.rating;
            RateData.push(action.payload);
            let s = 0;
            for(let i = 0; i < RateData.length; i++){
                s = s + Number(RateData[i]);

            }
            let avr = (Number(s) / Number(RateData.length));

            return {...state, chosenRate: !state.chosenRate, averageRate: avr.toFixed(2)}
 
            break;
        }

        default: {
            return state;
        }
    }
};

module.exports = reducer;