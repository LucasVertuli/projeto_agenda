const form = document.getElementById('agenda-telefonica')
const nomes = []
const area = []
const numero = []

let linhas = ''

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizatabela();

})

function adicionaLinha(){
    const inputNomes = document.getElementById('nomeContato');
    const inputArea = document.getElementById('codigoArea');
    const inputNumero = document.getElementById('numeroContato');

    if(numero.includes(inputNumero.value)){
        alert(`O número ${inputNumero.value} já foi adicionado.`);
    } else {
        nomes.push(inputNomes.value);
        area.push(inputArea.value);
        numero.push(inputNumero.value);

        let linha = `<tr>`;
        linha += `<td>${inputNomes.value}</td>`;
        linha += `<td>${inputArea.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += `</tr>`;

        linhas += linha;
    }

    inputNomes.value = ''
    inputArea.value = ''
    inputNumero.value = ''

}

function atualizatabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

