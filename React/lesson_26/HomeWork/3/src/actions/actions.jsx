export const createTask = (task) => {
    return {
        type: 'CREATE_TASK', 
        payload: task
    }
} 

export const deleteTask = (id) => {
    return {
        type: 'DELETE_TASK', 
        payload: id
    }
} 
export const editTask = (id) => {
    return {
        type: 'EDIT_TASK', 
        payload: id
    }
} 
export const requestUsers = (state) => {
    return {
        type: 'FETCH_USERS_START',
        payload: 'loading...'
    }
}


export const fetchError = (state) => {
    return {
        type: 'FETCH_USERS_ERROR',
        payload: 'error'
    }
}

export const receiveUsers = (users) => {
    return {
        type: 'RECEIVE_USERS',
        payload: users
    }
}
export const rated = (rate) => {
    return {
        type: 'RATED',
        payload: rate
    }
};

export function fetchUsers() {
    return function(dispatch) {
        dispatch(requestUsers());
        return fetch('data.json')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveUsers(json)))
    }
}