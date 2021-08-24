function encontraPerfilPlaca(){
    var numero_placa = document.getElementById("placa_num").value;

    if(numero_placa == 'ASS-6924'){
        alert("Nice!");
        return;
    }
    if(numero_placa == 'BRG-2334'){
        alert("Alá, o viadão do Bruno fazendo bosta denovo");
        return;
    }
    if(numero_placa == 'SMO-0989'){
        alert("Visitante1")
        return;
    }

    alert("Not nice ;-;");
    return;
}

function avaliarOcorrencia(){
    var pc, obs, fv, mo;
    var form = document.getElementById("formCadastro");
    pc = document.getElementById("placadocarro").value;
    obs = document.getElementById("observacao").value;
    fv = document.getElementById("fotoveiculo").value;
    mo = document.getElementById("momentoocorr").value;
    if(pc == ''){
        form.addEventListener('submit', function(e) {
            alert("Por favor, insira uma placa de carro");
            e.preventDefault();
        });
        return false;
    }
    if(fv == ''){
        form.addEventListener('submit', function(e) {
            alert("Por favor, insira uma foto do veículo");
            e.preventDefault();
        });
        return false;
    }

    alert("Ocorrencia enviada");
    return true;
}