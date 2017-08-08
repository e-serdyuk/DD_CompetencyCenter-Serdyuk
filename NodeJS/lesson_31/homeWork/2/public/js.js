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