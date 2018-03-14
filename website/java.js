
const jsonFunc = new XMLHttpRequest();

jsonFunc.open('GET', 'https://jsonplaceholder.typicode.com/users');
jsonFunc.onload = function () {
    if(jsonFunc.status === 200) {
        let y = JSON.parse(jsonFunc.response)
        let emailArr = [];
        let x = '';
        for(let i = 0; i < y.length; i++) {
            x = y[i].email; 
            emailArr.push(' ' + x);
        } 
        let emailList = emailArr.sort();
        document.getElementById('expJSON').innerHTML = '[' + emailList + ']';
    } else {
        alert('Not A Success');
    }
};
jsonFunc.onerror = function() {
    console.log('Network Error')
};
jsonFunc.send();


fetch('https://jsonplaceholder.typicode.com/users', {method: 'GET'})
    .then(function(response) {
        return response.json();
    })
    .then(function(getResponse) {
        listNames(getResponse)
    })
    .catch(error => alert('Oh no!'));
function listNames(getResponse) {
    let usernameArr = [];
    let userName = '';
    for(let i = 0; i < getResponse.length; i++) {
        userName = getResponse[i].username
        usernameArr.push(' ' + userName);
    }
    usernameArr.sort(function(short, long) {
        return short.length - long.length;
    });
    document.getElementById('expJSON2').innerHTML = '[' + usernameArr + ']'
}
