
//Desafio 1

function Soma() {
    let num1 = parseInt($("#num1").val())
    let num2 = parseInt($("#num2").val())
    let rSum = num1 + num2
    let p = $("#resultado").html(`<h2>Soma de ${num1} e      ${num2}  = ${rSum} </h2> <br> `)

}

function Subs() {
    let num1 = parseInt($("#num1").val())
    let num2 = parseInt($("#num2").val())
    let rMinus = num1 - num2
    let p = $("#resultado").html(`<h2>Subtração de ${num1} e      ${num2}  = ${rMinus} </h2> <br> `)

}


function Mult() {
    let num1 = parseInt($("#num1").val())
    let num2 = parseInt($("#num2").val())
    let rMult = num1 * num2
    let p = $("#resultado").html(`<h2>Multiplicação de ${num1} e ${num2}  = ${rMult} </h2> <br> `)

}


function Divi() {
    let num1 = parseInt($("#num1").val())
    let num2 = parseInt($("#num2").val())

    let rDive = num1 / num2
    let p = $("#resultado").html(`<h2>Divisão de ${num1} e      ${num2}  = ${rDive} </h2> <br> `)

}

function DivisãoInt() {
    let num1 = parseInt($("#num1").val())
    let num2 = parseInt($("#num2").val())
    let rDivint = Math.floor(num1/num2)
    let p = $("#resultado").html(`<h2>Divisão inteira de ${num1} e ${num2}  = ${rDivint} </h2> <br> `)

}


function Rest() {
    let num1 = parseInt($("#num1").val())
    let num2 = parseInt($("#num2").val())
    let rRest = num1 / num2
    let p = $("#resultado").html(`<h2>Resto de ${num1} e      ${num2}  = ${rRest} </h2> <br> `)

}

function All(){
    let num1 = parseInt($("#num1").val())
    let num2 = parseInt($("#num2").val())

    let rSum = num1 + num2
    let rMinus = num1 - num2
    let rMult = num1 * num2
    let rDive = num1 / num2
    let rDivint = Math.floor(num1/num2)
    let rRest = num1 / num2

    let p = $("#resultado").html(`<h2>Soma de ${num1} e      ${num2}  = ${rSum} </h2> <br> <h2>Subtração de ${num1} e      ${num2}  = ${rMinus} </h2> <br><h2>Multiplicação de ${num1} e ${num2}  = ${rMult} </h2> <br> <h2>Divisão de ${num1} e      ${num2}  = ${rDive} </h2> <br> <h2>Divisão inteira de ${num1} e ${num2}  = ${rDivint} </h2> <br> <h2>Resto de ${num1} e      ${num2}  = ${rRest} </h2> <br>  `)

}


//Desafio 2

// tentei fazer sem For e While

function cedulas(){
    var valorCompras = parseInt($("#Valor").val())

    var cem = 0
    var cin = 0
    var vin = 0
    var dez = 0
    var cinc = 0
    var dois = 0
    var um = 0


    if(valorCompras >= 100){
        
        
        var cem = parseInt(valorCompras/100)
        valorCompras -= (cem * 100)
        
    }
    if(valorCompras >= 50){
        var cin = parseInt(valorCompras/50)
        valorCompras -= cin * 50
       
        
    }
    if(valorCompras >= 20){
        var vin = parseInt(valorCompras/20)
        valorCompras -= vin * 20
       
    }
    if(valorCompras >= 10){
        var dez = parseInt(valorCompras/10)
        valorCompras -= dez * 10
       
        
    }
    if(valorCompras >= 5){
        var cinc = parseInt(valorCompras/5)
        valorCompras -= cinc * 5
       
    }
    if(valorCompras >= 2){
        var dois = parseInt(valorCompras/2)
        valorCompras -= dois * 2
        
    }
    if(valorCompras >= 1){
        var um = parseInt(valorCompras/1)
        valorCompras -= um * 1
        
    }


    

    let p = $("#resultado2").html(`${cem} notas de 100 <br> ${cin} notas de 50 <br> ${vin} notas de 20 <br> ${dez} notas de 10 <br> ${cinc} notas de 5 <br> ${dois} notas de 2 <br> ${um} notas de 1 <br> `)

}



// Desafio 3

function ordenação(){

    let input = $("#array").val()
    let foco = $("#valor-foco").val()
    
    console.log(input)

    input = input.split(",")

    // input.map((val)=>{
    //     array.push(Number(val))
    // })


    input.sort()





    console.log(input)
    let focoResult =input.indexOf(foco) + 1

    if(focoResult == 0){
        focoResult = "Esse valor não existe na sua sequência"
    }

    let p = $("#resultado3").html(`Ordenados de forma crescente ${input} <br> O numero de ${foco} está na ${focoResult} º`)

    
    
    

}