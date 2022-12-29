/*
    TODO:
        Validate:
            email, tel and full Addres
*/
$(document).ready(function () {

    //-------------Mascaras para Campos----------------------------
    $('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'})
    $('#cpf').mask('000.000.000-00', {placeholder: '___.___.___-__'})
    $('#cep').mask('00000-000', {placeholder: '12345-123'})

    //-------------Validação dos campos----------------------------
    $('form').validate({
        rules: {
            cpf: {
                cpf: true,
                required: true
            }
        }
    })

})

//-------------------Validar CPF----------------------------------
jQuery.validator.addMethod("cpf", function(value, element) {
    value = jQuery.trim(value)

    //-----Remover mask-----------
    value = value.replace('.','')
    value = value.replace('.','')
    let cpf = value.replace('-','')

    while(cpf.length < 11) cpf = "0"+ cpf;
    //------Primeiro Digito-------
    let cpfArray = [];
    let contDigito = new Number;
    let modInvertido = 11;

    for (i=0; i<11; i++){
        cpfArray[i] = cpf.charAt(i);
         if (i < 9) contDigito += (cpfArray[i] * --modInvertido);
    }
    if ((x = contDigito % 11) < 2) { cpfArray[9] = 0 } else { cpfArray[9] = 11-x }
    //--------Segundo Digito--------
    contDigito = 0;
    modInvertido = 11;

    for (y=0; y<10; y++) contDigito += (cpfArray[y] * modInvertido--);
    if ((x = contDigito % 11) < 2) { cpfArray[10] = 0; } else { cpfArray[10] = 11-x; }
    //------Validar Digitos---------
    let retorno = true;

    if ((cpf.charAt(9) != cpfArray[9]) || (cpf.charAt(10) != cpfArray[10])) retorno = false;

    return this.optional(element) || retorno;

}, "Informe um CPF válido");