var editBtnStatus = true;

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
            elem3.innerHTML = users[n].description;
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

function addItem() {
    var nameElem = document.getElementById ('inputname');
    var infoElem = document.getElementById ('inputinfo');
    if (nameElem.value && infoElem.value) {
    var obj = JSON.parse ('{"name":"' + nameElem.value + '", "description":"' + infoElem.value + '"}');
    console.log('post sending');
    let xhr = new XMLHttpRequest ();
    xhr.open ('POST', '/addItem', true);
    xhr.setRequestHeader ('Content-type', 'application/json');
    xhr.send (JSON.stringify (obj));
    window.location.href = '/';
    }
}
function edititem() {
    var e = document.getElementById('IDinput');
    var val = e.value;
    if (!editBtnStatus) {
        changeItem(val);
    } else {
        if (val) {
            xhrCheck(val, function(rows) {
                if (rows.length) {
                    var nameElem = document.getElementById('inputname');
                    var infoElem = document.getElementById('inputinfo');

                    nameElem.value = rows[0].name;
                    infoElem.value = rows[0].description;
                    var btnElem = document.getElementById('edit-btn');

                    if (editBtnStatus) {
                        editBtnStatus = false;
                        btnElem.innerHTML = 'Apply';
                    } else {
                        editBtnStatus = true;
                        btnElem.innerHTML = 'Edit item';
                    }
                }
            });
        }
    }

}

function changeItem(id) {
    var el1 = document.getElementById ('inputname');
    var el2 = document.getElementById ('inputinfo');
    if (el1.value && el2.value) {
    var obj = JSON.parse ('{"name":"' + el1.value + '", "description":"' + el2.value + '", "id":"' + id + '"}');
    xhrChangeItem (obj, function (status) {
     if (status === 200) {
             window.location.href = '/';
            }
        })

    } 
}
function xhtGetItems(func) {
    var xhr = new XMLHttpRequest ();
    xhr.onload = function () {
        return func (xhr.responseText)
    };
    xhr.open ('GET', '/get-data', true);
    xhr.send ()
}


function xhrDeleteItem(id, func) {
    var xhr = new XMLHttpRequest ();
    var path = '/delete/' + id;
    xhr.open ('DELETE', path, true);
    xhr.send ();
    xhr.onload = function () {
        return func (xhr.status, xhr.responseText);
    }
}


function xhrCheck(id, func) {
    var xhr = new XMLHttpRequest ();
    var path = '/check-id/' + id;
    xhr.open ('GET', path, true);
    xhr.setRequestHeader ('Content-type', 'application/json');
    xhr.send ('{"id":"' + id + '"}');
    xhr.onload = function () {

        return func (JSON.parse(xhr.responseText));

    }
}

function xhrChangeItem(data, func) {
    let xhr = new XMLHttpRequest ();
    xhr.open ('PUT', '/changeItem', true);
    xhr.setRequestHeader ('Content-type', 'application/json');
    xhr.send (JSON.stringify (data));
    xhr.onload = function () {
        return func (xhr.status);
    }
}


