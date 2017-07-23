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

export const changeBlogs = () => {
    return {
        type: 'CHANGEBLOGS'
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
   
        return fetch('data.json')
            .then(response => response.json())
            .then(json =>
                dispatch(receiveUsers(json)))
    }
}

