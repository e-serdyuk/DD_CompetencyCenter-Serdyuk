function getData( func) {
    var xhr = new XMLHttpRequest ();
    xhr.onload = function (data) {
        return func(xhr.responseText);
    };
    xhr.open ('GET', '/get-data', true);
    xhr.send ();
}
function showTable() {
     getData(function (data) {
         var users = JSON.parse(data);
          var tableElem = document.createElement ('table');
          
        for (var n = 0; n < users.length; n++) {
            tr = document.createElement ('tr');
            elem1 = document.createElement ('td');
            elem2 = document.createElement ('td');
            elem3 = document.createElement ('td');
            elem1.innerHTML = users[n].id;
            elem2.innerHTML = users[n].name;
            elem3.innerHTML = users[n].info;
            tr.appendChild (elem1)
            tr.appendChild (elem2)
            tr.appendChild (elem3);
            tableElem.appendChild (tr)
        }
      var tableElemTable = document.getElementById('table_show');
      tableElemTable.appendChild (tableElem)
     console.log(data)
    });
}


function addItem() {
    var nameElem = document.getElementById ('inputname');
    var infoElem = document.getElementById ('inputinfo');
    if (nameElem.value && infoElem.value) {
    var obj = JSON.parse ('{"name":"' + nameElem.value + '", "info":"' + infoElem.value + '"}');
    console.log('post sending');
    let xhr = new XMLHttpRequest ();
    xhr.open ('POST', '/newItem', true);
    xhr.setRequestHeader ('Content-type', 'application/json');
    xhr.send (JSON.stringify (obj));
    }
}
function xhrDeleteItem(id, func) {
    var xhr = new XMLHttpRequest ();
    xhr.open ('DELETE', '/deleteItem', true);
    xhr.setRequestHeader ('Content-type', 'application/json');
    xhr.send ('{"id":"' + id + '"}');
    xhr.onload = function () {
        return func (xhr.status, xhr.responseText);
    }
}

function deleteItem() {
    var elem = document.getElementById ('IDinput');
    if (elem.value) {
        xhrDeleteItem (elem.value, function (status, result) {
            if (status === 200 && result) {
                window.location.href = '/';
            } else {
                console.log ('Error during delete');
            }
        })
    } else {

    }
}
function xhrCheck(id, func) {
    var xhr = new XMLHttpRequest ();
    var path = '/checkId/' + id;
    xhr.open ('GET', path, true);
    xhr.setRequestHeader ('Content-type', 'application/json');
    xhr.send ('{"id":"' + id + '"}');
    xhr.onload = function () {
        if (xhr.status === 200 && +xhr.responseText) {
            return func (true);
        } else {
            return func (false);
        }
    }
}
function edititem() {
    var e = document.getElementById ('IDinput');
     var id = e.value;
    if (id) {
        xhrCheck(id, function (isIdExist) {
            if (isIdExist) {
                window.location.href = '/editItem/' + id;
            } else {
              console.log('the item with this id can not found');
            }
        });
    } else {
     alert("enter id")
    }

}
function xhrChangeItem(data, func) {
    let xhttp = new XMLHttpRequest ();
    xhttp.open ('PUT', '/changeItem', true);
    xhttp.setRequestHeader ('Content-type', 'application/json');
    xhttp.send (JSON.stringify (data));
    xhttp.onload = function () {
        return func (xhttp.status);
    }
}
function changeItem(id) {
    var el1 = document.getElementById ('editname');
    var el2 = document.getElementById ('editinfo');
    if (el1.value && el2.value) {
    var obj = JSON.parse ('{"name":"' + el1.value + '", "info":"' + el2.value + '", "id":"' + id + '"}');
    xhrChangeItem (obj, function (status) {
     if (status === 200) {
             window.location.href = '/';
            }
        })

    } 
}


