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
    pc = document.getElementById("placadocarro").value;
    obs = document.getElementById("observacao").value;
    fv = document.getElementById("fotoveiculo").value;
    mo = document.getElementById("momentoocorr").value;
    if(pc == ''){
        alert("Por favor, insira uma placa de carro");
        return;
    }
    if(fv == ''){
        alert("Por favor, insira uma foto do veículo");
        return;
    }

    alert("Ocorrencia enviada");
    return;
}