const countReducer = (state="", action) => { 

	// обработка actions 
    switch(action.type) {
        case 'SHOWTEXT': {
   
            return action.payload; 
            break;
        }
        default: {
            return state; 
        }
    } 

} 

module.exports = countReducer; 