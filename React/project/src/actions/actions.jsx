export const search = (id) => {
    return {
        type: 'SEARCH', 
        payload: id
    }
} 
export const change_stories = (id) => {
    return {
        type: 'STORIES', 
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

export function fetchUsers() {
    return function(dispatch) {
        dispatch(requestUsers());
        return fetch('data.json')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveUsers(json)))
    }
}