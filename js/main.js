/*
    TODO:
        Validate:
            full Addres
*/
$(document).ready(function () {

    //-------------Mascaras para Campos----------------------------
    $('#telefone').mask('(00) 00000-0000', {placeholder: '(__) _____-____'})
    $('#cpf').mask('000.000.000-00', {placeholder: '___.___.___-__'})
    $('#cep').mask('00000-000', {placeholder: '12345-123'})

    //-------------Validação dos campos----------------------------
    $('form').validate({
        rules: {
            nome: {
                nomeCompleto: true,
                required: true
            },
            email: {
                email: true,
                required: true
            },
            telefone: {
                tel: true,
                required: true
            },
            cpf: {
                cpf: true,
                required: true
            },
            rua: {
                required: true
            },
            complemento: {
                required: true
            },
            bairro: {
                required: true
            },
            cidade: {
                required: true
            },
            cep: {
                cep: true,
                required: true
            }
        },
        messages: {
            nome: 'Por favor, insira o seu nome completo.',
            email: 'Por favor, Insira o seu E-Mail.',
            telefone: 'Por favor, Insira o seu telefone.',
            cpf: 'Por favor, Insira o seu CPF.',
            rua: 'Por favor, Insira o nome da sua rua.',
            complemento: 'Incompleto.',
            bairro: 'Por favor, Insira o nome do bairro que você mora.',
            cidade: 'Por favor, Insira o nome da cidade que você mora.'
        }
    })

})
//-------------Validar Nome Completo------------------------------
jQuery.validator.addMethod("nomeCompleto", function(value, element) {
    let nomeArray = []
    nomeArray = value.split(' ')
    let isValid = false

    if (nomeArray.length > 1) isValid = true

    return this.optional(element) || isValid
}, 'O nome deve estar completo')

//----------------Validar Telefone--------------------------------
jQuery.validator.addMethod("tel", function(value, element) {

    value = value.replace('(', '')
    value = value.replace(')', '')
    value = value.replace(' ', '')
    let tel = value.replace('-', '')
    let isComplete = false

    if (tel.length > 10) isComplete = true

    return this.optional(element) || isComplete
}, "Por favor, forneça um número de telefone válido.")

//-------------------Validar CPF----------------------------------
jQuery.validator.addMethod("cpf", function(value, element) {
    value = jQuery.trim(value)

    //-----Remover mask-----------
    value = value.replace('.','')
    value = value.replace('.','')
    let cpf = value.replace('-','')

    while(cpf.length < 11) cpf = "0"+ cpf

    //------Primeiro Digito-------
    let cpfArray = []
    let contDigito = new Number
    let modInvertido = 11

    for (i=0; i<11; i++){
        cpfArray[i] = cpf.charAt(i)
         if (i < 9) contDigito += (cpfArray[i] * --modInvertido)
    }
    if ((x = contDigito % 11) < 2) { cpfArray[9] = 0 } else { cpfArray[9] = 11-x }
    
    //--------Segundo Digito--------
    contDigito = 0;
    modInvertido = 11;

    for (y=0; y<10; y++) contDigito += (cpfArray[y] * modInvertido--)
    if ((x = contDigito % 11) < 2) { cpfArray[10] = 0; } else { cpfArray[10] = 11-x; }
    
    //------Validar Digitos---------
    let retorno = true

    if ((cpf.charAt(9) != cpfArray[9]) || (cpf.charAt(10) != cpfArray[10])) retorno = false

    return this.optional(element) || retorno

}, "Por favor, informe um CPF válido")

jQuery.validator.addMethod("cep", function(value, element) {

    let cep = value.replace('-', '')
    let isComplete = false
    if (cep.length > 7) isComplete = true
    return this.optional(element) || isComplete
}, "Por favor, forneça um CEP válido.")