function calc1() {
    let input1 = document.querySelector("#in1").value
    let result = document.querySelector("#result1")

    let verifi = input1[0]

    if ((verifi % 2) == 0) {

        result.innerHTML = `a centena e par`
    } else {
        result.innerHTML = `a centena e impar`
    }
}


function calc2() {
    let input2 = document.querySelector("#in2").value
    let result2 = document.querySelector("#result2")


    let array1 = input2.split("")

    let array3 = []


    for (let i = 0; i < array1.length; i++) {
        array3.push(parseInt(array1[i]))
    }

    let teste = array3.reduce((a, b) => {
        return a + b
    })

    result2.innerHTML = `soma dos digitos ${teste}`
}


function calc3() {
    let input1 = document.querySelector("#in3").value
    let input2 = document.querySelector("#in33").value
    let input3 = document.querySelector("#in333").value
    let result = document.querySelector("#result3")

    let array = []
    array.push(input1, input2, input3)


    result.innerHTML = `nomes em ordem ${array.sort()}`


}

function calc4() {

    let termo = document.querySelector('#in4').value;
    let result = document.querySelector('#result4');
    let penultimo = 0, ultimo = 1;
    let numero;
    let array = [1]



    if (termo <= 2) {
        numero = termo - 1;
        array.push(numero)
    } else
        for (let count = 2; count <= termo; count++) {
            numero = ultimo + penultimo;
            penultimo = ultimo;
            ultimo = numero;
            array.push(numero)
        }

    result.innerHTML = array;
}

function calc5() {

    let input1 = parseInt(document.querySelector("#in5").value)
    let input2 = parseInt(document.querySelector("#in55").value)
    let result = document.querySelector("#result5")
    let meio
    let array = []
    let primos = []


    if (input1 < input2) {
        for (let i = 1; i < input2 - 1; i++) {
            meio = input1 + i
            array.push(meio)

        }
    } else {
        for (let i = 1; i < input1 - 1; i++) {
            meio = input1 - i
            array.push(meio)
        }
    }

    array.map((n) => {
        let divisores = 0
        for (let count = 1; count <= n; count++)
            if (n % count == 0)
                divisores++;

        if (divisores == 2) {
            console.log(`${n} é primo`)
            primos.push(n)
        } else
            console.log(`${n} não é primo`)

    })

    result.innerHTML = `numeros primos entre ${input1} e ${input2} são : ${primos}`



}








