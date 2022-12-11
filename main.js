const form = document.getElementById('formNumeros');
const finalMessageField = document.querySelector('.final-message');
let validForm = false;

form.addEventListener('submit', function(e){    
    e.preventDefault();
    const numeroA = parseInt(document.getElementById('numero-a').value);
    const numeroB = parseInt(document.getElementById('numero-b').value);

    if (numeroA < numeroB) {

        const mensagemBMA = "Numero B é maior que  numero A.";
        finalMessageField.innerHTML = mensagemBMA;
        finalMessageField.style.display = 'block';
        finalMessageField.classList.add('success');
        finalMessageField.classList.remove('error', 'equal');
    } else if(numeroB < numeroA) {
        const mensagemAMB = "Numero A é maior que numero B.";
        finalMessageField.classList.add('error');
        finalMessageField.classList.remove('success', 'equal');
        finalMessageField.innerHTML = mensagemAMB;
        finalMessageField.style.display = 'block';
    } else {
        const mensagemAIB = "Numeros A e B são iguais.";
        finalMessageField.classList.add('equal');
        finalMessageField.classList.remove('success', 'error');
        finalMessageField.innerHTML = mensagemAIB;
        finalMessageField.style.display = 'block';
    }
});