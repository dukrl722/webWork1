/*
fetch('./users.json')
    .then(resposta => resposta.json())
    .then(console.log)
*/
//<button onclick="setNewUser()">Cadastrar</button>

var users = `{"users":[
    {
        "name":"Admin",
        "senha":666
    }
]}`
var usuarios = JSON.parse(users)
//console.log(usuarios)
function setNewUser(){
    var n = document.getElementById("signup_name").value;
    var s = document.getElementById("signup_pass").value;
    var rs = document.getElementById("signup_re_pass").value;
    var vetor = usuarios.users;
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].name == n){
            alert("Username já cadastrado")
            return;
        }
    }
    if(s != rs){
        alert("Repetição de senha incorreta");
        return;
    }
    var cont = `{"name":"${n}","senha":${s}}`
    let new_user = JSON.parse(cont)
    let tam = usuarios.users.length;
    usuarios.users[tam] = new_user;
}

function checkLogin(){
    var n = document.getElementById("login_name").value;
    var s = document.getElementById("login_pass").value;
    var vetor = usuarios.users;
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].name == n && vetor[i].senha == s){
            //document.getElementById("home_div").innerHTML = `<p>This is ${n}'s page</p>`;
            window.location.href = '../pages/home.html'
            return;
        }
    }
}