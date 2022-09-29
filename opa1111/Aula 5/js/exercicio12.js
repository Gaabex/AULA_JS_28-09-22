"use strict";
let num_secreto;
let tentativas = 0;

num_secreto = sortearNum(100);

function sortearNum(n){
    return Math.round(Math.random() * n);
}

document.querySelector("#txtchute").addEventListener("keypress", function(event){
    if (event.keyCode == 13){
        validoJogada();
    }
});

function validoJogada(){
    let msg = document.querySelector("#msg");
    let dica = document.querySelector("#txtdica");
    tentativas++;
    let chute = Number(document.querySelector("#txtchute").value);

    if(chute > num_secreto){
        dica.value = "o num sorteado é menor";
    }else if (chute < num_secreto){
        dica.value = "o num sorteado é maior";
    }else{
        msg.innerHTML = `<h1> Parabens, vc acertou em ${tentativas} tentativas`;
    }



}