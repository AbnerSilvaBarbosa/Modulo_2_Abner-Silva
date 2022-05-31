function sum() {
    let input = Number(document.getElementById("ex1").value)

    let result = input + 1
    console.log(result)

    document.getElementById("ex1").value = result


}


function less() {
    let input = Number(document.getElementById("ex1").value)

    let result = input - 1

    document.getElementById("ex1").value = result

}


//---------------------------------------------------------------------

function trocar() {
    let input1 = document.getElementById("ex2").value
    let input2 = document.getElementById("ex22").value

    let save = input1

    document.getElementById("ex2").value = input2
    document.getElementById("ex22").value = save
}

//----------------------------------------------------------------------

function mascaraDeTelefone() {
    const input = document.getElementById('ex3');
    const formatado = formatacao(input.value);
    input.value = formatado;
}


function formatacao(num) {
    const phoneNumber = num.replace(/[^\d]/g, '');
    const length = phoneNumber.length;
    if (length < 3) return phoneNumber;
    if (length < 8) {
        return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(2)}`;
    }
    return `(${phoneNumber.slice(0, 2)}) ${phoneNumber.slice(
        2,
        7
    )}-${phoneNumber.slice(7, 10)}`;

}

//----------------------------------------------------------

function calc(){
    let inp = document.getElementById("ex4").value
    let checkRadio = document.querySelector(`input[name ="a"]:checked`).value
    
    let res = document.getElementById("resultado")


    console.log(checkRadio.value)
    if(checkRadio == "Diurno"){
        let result = inp * 200
        

        res.innerText =`R$ ${result}` 

        if(inp > 50){
           result = result*0.4
           res.innerText =`R$ ${result}`
        }

    }else if(checkRadio == "Noturno"){
        let result = inp * 100
        

        res.innerText =`R$ ${result}`

        if(inp > 50){
           result = result*0.2
           res.innerText =`R$ ${result}`
        }



    }else{

        res.innerHTML = "Selecione alguma das opções"

    }
    
}