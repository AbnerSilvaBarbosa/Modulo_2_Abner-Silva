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

    let pessoaD = 200
    let PessoaN = 100


    console.log(checkRadio.value)
    if(checkRadio == "Diurno"){
        let result = inp * pessoaD
        

        res.innerText =`R$ ${result}` 

        if(inp > 50){
           result = inp * 120
           res.innerText =`R$ ${result}`
        }

    }else if(checkRadio == "Noturno"){
        let result = inp * PessoaN
        

        res.innerText =`R$ ${result}`

        if(inp > 50){
           result = inp * 80
           res.innerText =`R$ ${result}`
        }



    }else{

        res.innerHTML = "Selecione alguma das opções"

    }
    
}

//--------------------------------------------------------------------------------

let Ninputs 
function alunos(){

    
    let div1 = document.getElementById("ex55")

    Ninputs = document.getElementById("ex5").value

    for(let i = 0; i < Ninputs; i++){

        div1.innerHTML += `<p>aluno ${i+1} <input type="number" placeholder="prova" id="${i+1}"><input type="number" placeholder="trabalho" id="${"tr" + (i +1)}"> </p>`

  

        
    }



}

let prova
let trabalho
let result1
let etapa2 = []
let somaMedias
let mediasGerais

let etapa3 = []
let result3
let gProva
let geralProva


let etapa4 = []
let gTrabalho
let getalTrabalho

let etapa5
let etapa51

let etapa6
let etapa61

function calc5(){

   for(let i = 0; i < Ninputs; i++ ){
        provaInput = document.getElementById(`${i+1}`).value
        trabalhoInput = document.getElementById(`${"tr" + (i+1)}`).value
        result1 = document.getElementById("ex555")
        mediasGerais = document.getElementById("ex5555")
        geralProva = document.getElementById("etapa3")
        getalTrabalho = document.getElementById("etapa4")
        etapa5 = document.getElementById("etapa5")
        etapa51 = document.getElementById("etapa51")
        etapa6 = document.getElementById("etapa6")
        etapa61 = document.getElementById("etapa61")

        let prova = Number(provaInput)
        let trabalho = Number(trabalhoInput)

        let result1A = (prova * 2) + (trabalho * 3)
        let Media = result1A/5



        result1.innerHTML += `Media aluno ${i+1} = ${Media} <br>`

        etapa2.push(Media)
        somaMedias = etapa2.reduce((por,a)=> por + a,0)
        mediasGerais.innerHTML = `Media da turma = ${somaMedias/ Ninputs}`



        etapa3.push(prova)
        gProva = etapa3.reduce((por2,b)=> por2 + b,0)
        geralProva.innerHTML = `Media aritmetica das provas = ${gProva/Ninputs}`
        


        etapa4.push(trabalho)
        gTrabalho = etapa4.reduce((por3,c)=> por3 + c,0)
        getalTrabalho.innerHTML = `Media aritmetica dos trabalhos = ${gTrabalho/Ninputs}`


        etapa5.innerHTML = `Menor nota de prova: ${Math.min(...etapa3)}`
        etapa51.innerHTML = `Maior nota de prova: ${Math.max(...etapa3)}`
        etapa6.innerHTML = `Menor nota de trabalho: ${Math.min(...etapa4)}`
        etapa61.innerHTML = `Maior nota de trabalho: ${Math.max(...etapa4)}`

        


        
        
        





        
    }

}