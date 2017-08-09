function register() {
    var el1 = document.getElementById ('loginInput');
    var el2 = document.getElementById ('passInput');
    if (el1.value && el2.value) {
        var obj = JSON.parse ('{"userName":"' + el1.value + '","pass":"' + el2.value + '"}');
        registration (obj, function (result) {
            if (result.message === "success") {
                alert('User ' + el1.value + ' was successfully registered')
            } else if (result.message === "duplicate") {
                alert('User ' + el1.value + ' has been registered in database.')
            } else {
                console.log ('Error');
            }
            el1.value = '';
            el2.value = '';
        })

    } else {
        alert('Please enter login and password')
    }
}

function registration(obj, func) {
    const xhr = new XMLHttpRequest ();
    xhr.open ('POST', '/registerUser', true);
    xhr.setRequestHeader ('Content-type', 'application/json');
    xhr.send (JSON.stringify (obj));
    xhr.onload = function () {
        var objReceived = JSON.parse (xhr.responseText);
        if (xhr.status === 200) {
            return func (objReceived);
        }
    }
}



