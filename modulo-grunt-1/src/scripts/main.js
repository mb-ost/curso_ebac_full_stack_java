document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('form-sorteador').addEventListener('submit', function(e) {
        e.preventDefault();
        let numeroMaximo = document.getElementById('numero-maximo').value;
        numeroMaximo = parseInt(numeroMaximo);

        let randomNum = Math.random() * numeroMaximo;
        document.getElementById('res-valor').innerText = Math.floor(randomNum+1);
        document.querySelector('.resultado').style.display = 'block';
    })
})