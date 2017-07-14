const reducer = (state="", action) => {

    switch(action.type) {
        case 'BUTTON_CLICK': {
            return state = !action.payload;
            break;
        }
        default: {
            return state;
        }
    }
};

module.exports = reducer;