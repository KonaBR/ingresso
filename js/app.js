function comprar() {
    
let quantidadeIngressosComprados = parseInt(document.getElementById('qtd').value);
let quantidadeIngressosPista = parseInt(document.getElementById('qtd-pista').textContent);
let quantidadeIngressosSup = parseInt(document.getElementById('qtd-superior').textContent);
let quantidadeIngressosInf = parseInt(document.getElementById('qtd-inferior').textContent);
let tipoDoIngresso = document.getElementById('tipo-ingresso').value;

    if (tipoDoIngresso === 'superior') {
        if (quantidadeIngressosSup >= quantidadeIngressosComprados) {
            quantidadeIngressosSup -= quantidadeIngressosComprados;
            document.getElementById('qtd-superior').textContent = quantidadeIngressosSup;
    } else {
        alert("Quantidade insuficiente de ingressos disponíveis");
    } }
    
    else if (tipoDoIngresso === 'inferior') { 
        if (quantidadeIngressosInf >= quantidadeIngressosComprados) {
            quantidadeIngressosInf -= quantidadeIngressosComprados;
            document.getElementById('qtd-inferior').textContent = quantidadeIngressosInf;
    } else {
        alert("Quantidade insuficiente de ingressos disponíveis");
    } }

    else if (tipoDoIngresso === 'pista') {
        if (quantidadeIngressosPista >= quantidadeIngressosComprados) {
            quantidadeIngressosPista -= quantidadeIngressosComprados;
            document.getElementById('qtd-pista').textContent = quantidadeIngressosPista;
    } else {
        alert("Quantidade insuficiente de ingressos disponíveis");
    } }

    document.getElementById('qtd').value = '';
}