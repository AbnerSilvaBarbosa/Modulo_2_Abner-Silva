

function showText() {

    let divhidden = $("#nameHidden")
   console.log(divhidden.attr("class"))

   if(divhidden.attr("class") == "normal"){
       divhidden.attr("class","hiddenstext")
   }else{
    divhidden.attr("class","normal")

   }
    
}
