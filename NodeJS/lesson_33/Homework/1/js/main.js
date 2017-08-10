var todos = [
    {id: 1, name: 'Work', description: 'Stuff to do'}, {
        id: 2,
        name: 'Walk the dog',
        description: 'Need to get up early'
    },
    {id: 3, name: 'Finish project', description: 'An important task'}, {
        id: 4,
        name: 'Earn a lot of money',
        description: 'As soon as possible'
    },
    {id: 5, name: 'Go to sleep', description: 'late at night'}
];
function addItem(name, description) {
    
    var maxId = todos.reduce ((previouse, current)=> {
        return Math.max (previouse, current.id);
    }, 0);
    var id = maxId + 1;
    var obj = JSON.parse ('{ "id":' + id + ', "name":"' + name + '", "description": "' + description + '" }');

    todos.push (obj);

}
function getObj() {
    return todos;
}

function deleteItem(id) {

    var arr = todos.map ((item, index)=> {
        if ( +item.id === +id ) {
            todos.splice (index, 1)
        }
        return true
    });
    return true;
}

function checkId(id) {
    var arr = todos.filter ((item)=> {
        return (
        +item.id === +id
        )
    });

    return arr;
}

function changeItem(name, description, id) {
    todos.map ((item)=> {
        if (+item.id === +id) {
            item.name = name;
            item.description = description;
        }
        return item;
    });
}

module.exports = {
    getObj: getObj,
    deleteItem: deleteItem,
    addItem: addItem,
    checkId: checkId,
    changeItem: changeItem
};