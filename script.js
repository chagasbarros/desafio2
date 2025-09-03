
function calcularJuros() {
    let capitalInicial = parseFloat(document.getElementById('valorInvestimento').value);
    let tempo = parseInt(document.getElementById('tempoMeses').value);
    let taxa = parseFloat(document.getElementById('taxaJuros').value); 

    if (isNaN(capitalInicial) || isNaN(tempo) || isNaN(taxa)) {
        document.getElementById('valorFinal').innerHTML = "Por favor, preencha todos os campos corretamente.";
        return;
    }

    let i = taxa / 100; 

    let montanteFinal = capitalInicial * Math.pow((1 + i), tempo);

    document.getElementById('valorFinal').innerHTML = `O valor total após ${tempo} meses é: R$ ${montanteFinal.toFixed(2)}`;
}
