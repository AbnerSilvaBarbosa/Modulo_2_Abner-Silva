

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


function create(){

    let nome = document.querySelector("#create1").value
    let curso = document.querySelector("#create2").value

    $.ajax({
        url:"http://localhost:3000/create",
        method:"POST",
        data:{
            nome:nome,
            curso:curso
        },
        success: function(res){

            let result = document.querySelector("#result").innerHTML = res.message
        }
        
    })

}


function read(){
    $.ajax({
        url:"http://localhost:3000/read",
        method:"GET",
        success:function(res){
            for(let i = 0; i < res.length; i++){
                let result = document.querySelector("#result").innerHTML += `<div>ID: (${res[i].id}) ${res[i].Nome} : ${res[i].curso}</div>`

            }
            
        }
    })
}

function update(){
    let id_chave = document.querySelector("#update1").value
    let curso = document.querySelector("#update2").value

    $.ajax({
        url:"http://localhost:3000/update",
        method:"PUT",
        data:{
            id_chave:id_chave,
            curso:curso
        },
        success:function(res){
            let result = document.querySelector("#result").innerHTML = res.message
        },
        error:function(res){
            
            let result = document.querySelector("#result").innerHTML = res.responseJSON.message
        },
    })
}

function deleteDB(){

    let id_chave = document.querySelector("#delete1").value

    $.ajax({
        url:"http://localhost:3000/delete",
        method:"DELETE",
        data:{
            id_chave:id_chave

        },
        success:function(res){
            let result = document.querySelector("#result").innerHTML = res.message
        },
        error:function(res){
            let result = document.querySelector("#result").innerHTML = res.responseJSON.message
        }
    })
}



