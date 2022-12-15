const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/aprovado.png" alt="emoji celebrando">'
const imgReprovado = '<img src="./images/reprovado.png" alt="emoji decepcionado">'
const media = parseFloat(prompt("Digite a nota minima; ", _default='7'));
let linhas = '';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
spanReprovado = '<span class="resultado reprovado">Reprovado</span>';


form.addEventListener('submit', function (e) {
    e.preventDefault();
    addLinha();
    updateTable();
    console.log(updateAvg());
});

function addLinha () {
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)) {
        alert(`A atividade ${inputNomeAtividade.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));

        let linha ='<tr>';
        linha += `<td>${inputNomeAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value}</td>`;
        linha += `<td>${inputNotaAtividade.value >= media ? imgAprovado : imgReprovado}</td>`
        linha += '</tr>';
        linhas += linha;
    }

    
    inputNomeAtividade.value = inputNotaAtividade.value = '';
}

function updateTable() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

    const mediaFinal = updateAvg();
    document.getElementById('media-final-valor').innerHTML = mediaFinal.toFixed(2);
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= media ? spanAprovado : spanReprovado;
}

function updateAvg() {
    let cont = 0;
    for(i in notas) {
        cont += notas[i];
    }
    const avg = cont / notas.length;
    return avg;
}