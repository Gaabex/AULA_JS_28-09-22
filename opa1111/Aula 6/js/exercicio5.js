let botao1 = document.querySelector("#btn1");
let botao2 = document.querySelector("#btn2");
let botao3 = document.querySelector("#btn3");

botao1.addEventListener("click", function(){exibirDiv("divCronometro");
});

botao2.addEventListener("click", function(){exibirDiv("divSlide");
});

botao3.addEventListener("click", function(){exibirDiv("divTabuada");
});

function exibirDIv(div){
    let tagsdiv = document.querySelector("div");
    for (let i=0; i < tagsdiv.length; i++){
        if (tagsdiv[i].id.indexOf("div") >= 0){
            if (tagsdiv[i].id == div){
                tagsdiv[i].style.display="block";
            }else{
                tagsdiv[i].style.display="none";
            }
        }
    }
}