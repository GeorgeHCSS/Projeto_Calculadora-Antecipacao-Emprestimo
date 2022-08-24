const parcelasPagas = document.querySelector("#parcelasPagas");
const valorDaParcela = document.querySelector("#valorDaParcela");
const taxa = document.querySelector("#taxa");
const parcelaAntecipada = document.querySelector("#parcelaAntecipada");
const resultado = document.querySelector("#resultado");

const calcParcelaAntecipada = () => {
if (parcelaAntecipada.value !== '' && valorDaParcela.value !== '' && taxa.value !== '' && parcelasPagas.value !== ''){
    const antecipacaoEmprestimo = (valorDaParcela.value/ (1 + (taxa.value / 100))**(parcelaAntecipada.value - parcelasPagas.value)).toFixed(2)
    
    resultado.innerHTML = `O valor da Parcela Antecipada é de: <br><br>
    R$  ${antecipacaoEmprestimo}`
}
    else{
        resultado.innerHTML = 'Preencha os Campos' 
    }
}
