const form = document.getElementById('formDeposito');
const nomeBeneficiario = document.getElementById('nome-beneficiario');
let validForm = false;

function validaNome(nomeCompleto) {
    const nomeArray = nomeCompleto.split(' ');
    return nomeArray.length >= 2;
}


form.addEventListener('submit', function(e){
    
    e.preventDefault();

    const numeroContaBeneficiario = document.getElementById('numero-conta');
    const valorDeposito = document.getElementById('valor');
    const mensagemSucesso = `Montante de: <b>${valorDeposito.value}</b> depositado para o cliente: <b>${nomeBeneficiario.value}</b> - conta: <b>${numeroContaBeneficiario.value}</b>`;
    const mensagemErro = 'Nome incompleto.';

    validForm = validaNome(nomeBeneficiario.value);
    if (validForm) {
        const successField = document.querySelector('.success-message');
        successField.innerHTML = mensagemSucesso;
        successField.style.display = 'block';

        nomeBeneficiario.value = '';
        numeroContaBeneficiario.value = '';
        valorDeposito.value = '';
    } else {
        document.querySelector('.error-message').style.display = 'block';
        nomeBeneficiario.style.border = '1px solid red';
    }
})

nomeBeneficiario.addEventListener('keyup', function(e){
    validForm = validaNome(e.target.value);
    if (!validForm) {
        nomeBeneficiario.classList.add('error');
        document.querySelector('.error-message').style.display = 'block';
    } else {
        nomeBeneficiario.classList.remove('error');
        document.querySelector('.error-message').style.display = 'none';
    }
})