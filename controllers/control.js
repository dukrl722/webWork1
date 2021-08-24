/*
  User's Types
1 - Servidor
2 - Aluno
3 - Visitante
*/
var users = `{"users":[
    {
        "name":"Admin",
        "senha":666,
        "type":0
    },
    {
        "name":"Josivaldo",
        "senha":"mingaucomleite",
        "type":1
    },
    {
        "name":"Lucas",
        "senha":1234,
        "type":2
    },
    {
        "name":"visitante1",
        "senha":6924,
        "type":3
    }
]}`

var veicles = `{"veiculos":[
    {
        "tipo":"carro",
        "modelo":"Strada",
        "fabricante":"Shing-Ling Enterprise",
        "placa":"12345",
        "cor":"preto"
    }
]}`

//-----------------------------------------------

function userTypeCheck(cbox){
    let x = -1;
    for(let i=0; i<3; i++){
        if(cbox.children[i].checked == true){
            x = i+1;
        }
    }
    return x;
}

function setNewUser(){
    var usuarios = JSON.parse(users);
    var n = document.getElementById("signup_name").value;
    var s = document.getElementById("signup_pass").value;
    var rs = document.getElementById("signup_re_pass").value;
    var tipo = document.getElementById("user_type");
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
    var tipo_usuario = userTypeCheck(tipo);
    var cont = `{"name":"${n}","senha":${s},"type":${tipo_usuario}}`
    let new_user = JSON.parse(cont)
    let tam = usuarios.users.length;
    usuarios.users[tam] = new_user;
    alert(`Usuário cadastrado com sucesso`);
}

function checkLogin(){
    var usuarios = JSON.parse(users);
    var n = document.getElementById("login_name").value;
    var s = document.getElementById("login_pass").value;
    var vetor = usuarios.users;
    for(let i=0; i<vetor.length; i++){
        if(vetor[i].name == n && vetor[i].senha == s){
            return vetor[i].type;
        }
    }
    alert("Usuário não registrado");
    return null;
}

function verificaCadastroAdmin(){
    const tipos_cadastros = ["veiculo","servidor","aluno","visitante","estacionamento"];
    var infos = document.getElementById("entrada_dados").value;
    var tipo_info = document.getElementById("tipo_de_cadastro").value;
    for(let i=0; i<tipos_cadastros.length; i++){
        if(tipos_cadastros[i] == tipo_info){
            cadastrarAdmin(tipo_info,infos);
        }
    }
}

function cadastrarAdmin(tipo,infos){
    var words = infos.split(",").length;
    var veiculos = JSON.parse(veicles);
    switch(tipo){
        case "veiculo":
            var novo_dado_cadastro = `{`
            var campos = ['tipo','modelo','fabricante','placa','cor'];
            for(let j=0; j<words.length; j++){
                novo_dado_cadastro += `"${campos[j]}":"${words[j]}"`;
            }
            novo_dado_cadastro += '}'
            new_dado_cadastro = JSON.parse(novo_dado_cadastro);
            tam = veiculos.veiculos.lenght;
            veiculos.veiculos[tam] = new_dado_cadastro;
            break
        case "servidor":
            var novo_dado_cadastro = `{`
            var campos = ['nome','telefone','ramal','sala','cargo','email'];
            for(let j=0; j<words.length; j++){
                novo_dado_cadastro += `"${campos[j]}":"${words[j]}"`;
            }
            novo_dado_cadastro += '}'
            new_dado_cadastro = JSON.parse(novo_dado_cadastro);
            tam = veiculos.veiculos.lenght;
            veiculos.veiculos[tam] = new_dado_cadastro;
            break
        case "aluno":
            var novo_dado_cadastro = `{`
            var campos = ['nome','curso','ra','telefone','email'];
            for(let j=0; j<words.length; j++){
                novo_dado_cadastro += `"${campos[j]}":"${words[j]}"`;
            }
            novo_dado_cadastro += '}'
            new_dado_cadastro = JSON.parse(novo_dado_cadastro);
            tam = veiculos.veiculos.lenght;
            veiculos.veiculos[tam] = new_dado_cadastro;
            break
        case "visitante":
            var novo_dado_cadastro = `{`
            var campos = ['nome','cpf','telefone','email'];
            for(let j=0; j<words.length; j++){
                novo_dado_cadastro += `"${campos[j]}":"${words[j]}"`;
            }
            novo_dado_cadastro += '}'
            new_dado_cadastro = JSON.parse(novo_dado_cadastro);
            tam = veiculos.veiculos.lenght;
            veiculos.veiculos[tam] = new_dado_cadastro;
            break
        case "estacionamento":
            var novo_dado_cadastro = `{`
            var campos = ['id','descricao'];
            for(let j=0; j<words.length; j++){
                novo_dado_cadastro += `"${campos[j]}":"${words[j]}"`;
            }
            novo_dado_cadastro += '}'
            new_dado_cadastro = JSON.parse(novo_dado_cadastro);
            tam = veiculos.veiculos.lenght;
            veiculos.veiculos[tam] = new_dado_cadastro;
            break
    }
}

function aprovarContestacao(num){
    var confirma = confirm("Aprovar a contestação?");
    var ths = 'const' + num;
    if(confirma){
        var r = document.getElementById(ths);
        r.innerHTML = 'YES';
    }else{
        var r = document.getElementById(ths);
        r.innerHTML = 'NO';
    }
}