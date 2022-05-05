function contaAlturaETempo(){ 
    const gravidade = 10;   // O valor da gravidade nunca vai mudar logo sera um valor contante
    var VelocidadeInicial = document.getElementById("velocidade").value;  // Pegando o valor do  elemento html pelo id

    var altura = (VelocidadeInicial*VelocidadeInicial) / (2*gravidade); // velocidade² dividido 2X gravidade

    var tempo = VelocidadeInicial / gravidade; // velocidade dividido por gravidade

    console.log(altura , tempo);  // teste de resultado para ver se todo o caminho está certo ou se teve algum erro 
    var ResultadoTela = document.getElementById("Result").innerHTML = "<p class='texto'>Altura máxima: " + altura + "<br>"+ " Tempo total: " + tempo +"</p>"; // escreve um html em um elemento no arquivo html
}