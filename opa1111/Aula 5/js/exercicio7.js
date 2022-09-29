
document.getElementById("botao").addEventListener("click",function(){
        let alt = Number(document.querySelector("#txtaltura").value);
        let pes = Number(document.querySelector("#txtpeso").value);
        let imc = pes / (alt *alt);
        let msg = "";

        if(document.querySelector("#sexM").checked){
            if(imc < 20.7){
                msg = "abaixo do peso";
            }else if (imc >= 20.7 && imc < 26.4){
                msg = "normal";
            }else if (imc >= 26.4 && imc < 27.8){
                msg = "marg acima do peso";
            }else if (imc >= 27.8 && imc < 31.1){
                msg = "acima do peso";
            }else{
                msg = "obeso"
            }

        }else if (document.querySelector("#sexF").checked){
            if(imc < 19.1){
                msg = "abaixo do peso";
            }else if (imc >= 19.1 && imc < 25.8){
                msg = "normal";
            }else if (imc >= 25.8 && imc < 27.3){
                msg = "marg acima do peso";
            }else if (imc >= 27.3 && imc < 32.3){
                msg = "acima do peso";
            }else{
                msg = "obeso"
            }
        }
        document.querySelector("#txtimc").value = imc;
        document.querySelector("#txtcondicao").value = msg
});

