function carDados(){
    $.get("http://localhost:3000/infos",(resultado)=>{
        console.log(resultado)

        $("#nomeJson").append(resultado.Nome)
        $("#cursoJson").append(resultado.curso)
        $("#btnDB").attr("class","hiddenstext")
    })

    console.log("ajshdjahdj")
}

function showText() {

    let divhidden = $("#nameHidden")
   console.log(divhidden.attr("class"))

   if(divhidden.attr("class") == "normal"){
       divhidden.attr("class","hiddenstext")
   }else{
    divhidden.attr("class","normal")

   }
    
}
