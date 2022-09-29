"use strict";

document.querySelector("#botao").addEventListener("click",function(){
        let elem_valor = document.querySelector("txtvalor");
        let elem_parc = document.querySelector("txtparcelas");
        let elem_res = document.querySelector("txtresult");
        let valor_compra = parseFloat(elem_valor.value);
        let qtd_p = parseInt(elem_parc.value);
        let msg = ""
        let cor = ""
        let valor_final;
        if (qtd_p == 1){
            valor_final = valor_compra;
            msg = `1x R$ ${valor_final}`;
            cor = "#00ddff";
        }else if (qtd_p == 2){
            valor_final = valor_compra * 1.03;
            msg = `2x R$ ${valor_final/2}`;
            cor = "#ffff00";
        }else{
            valor_final = valor_compra * 1.07;
            msg = `4x R$ ${valor_final/4}`;
            cor = "#ff0000";
        }
        elem_res.value =msg;
        elem_res.style.backgroundColor = cor;
    });