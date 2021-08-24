function determinaUsuario(num){
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var tipo = document.getElementById("tipo");
    var placa = document.getElementById("carro");

    var x,y,z;
    x = nome.innerHTML;
    y = senha.innerHTML;
    z = tipo.innerHTML;
    w = placa.innerHTML;
    if(num == 1){
        nome.innerHTML = x + 'Josivaldo';
        senha.innerHTML =  y +'mingaucomleite';
        tipo.innerHTML = z + 'servidor';
        placa.innerHTML = w + 'ASS-6924';
        return;
    }
    if(num == 2){
        nome.innerHTML = x + 'Lucas';
        senha.innerHTML =  y +'1234';
        tipo.innerHTML = z + 'aluno';
        placa.innerHTML = w + 'BRG-2334';
        return;
    }
    if(num == 3){
        nome.innerHTML = x + 'visitante';
        senha.innerHTML =  y +'6924';
        tipo.innerHTML = z + 'visitante';
        placa.innerHTML = w + 'SMO-0989';
        return;
    }
}

function carregarNovoDado(){
    var nome = document.getElementById("nome");
    var senha = document.getElementById("senha");
    var dados = document.getElementById("new_data").value;
    var tipo_data = document.getElementById("chose_data").value;
    if(tipo_data == 'nome'){
        nome.innerHTML = 'Nome: ' + dados;
        alert("Modificação realizada com sucesso");
    }
    else if(tipo_data == 'senha'){
        senha.innerHTML = 'Senha: ' + dados;
        alert("Modificação realizada com sucesso");
    }
    else{
        alert("Tipo de dado inexistente");
    }
}

function contestarMulta(){
    var objecao = prompt("Insira uma objeção a contestação","");
    if(objecao != '' && objecao != null){
        alert('Objeção enviada');
    }else{
        alert("É necessário uma objeção para contestar uma multa");
    }
}
function recontestaMulta(){
    alert("Sua contestação foi reenviada para avaliação");
}