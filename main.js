/*
TODO:
    when adicionar + is pressed:
        validate fields title and description
        add new title, description and done=false to task list array
        render table with new information
*/
//$('tr').children('.descricao').hide();
$(document).ready(function () {
    //---------Registrar Valores no formulario
    $('form').on('submit', function(e){
        e.preventDefault();
    });

    //---------Detectar click para expandir ou retrair Descrição---------
    $('[data-toggle="mostrar-descricao"]').click(function () {
        if($(this).attr('rowspan') == 1){
            expandirDescricao($(this));
        } else {
            retrairDescricao($(this));
        }
        
    })
    //--------Riscar valores da tarefa-------------------------------------
    $('[data-toggle="clica-titulo"]').click(function () {
        $(this).addClass('terminada');
        $(this).parent().next().children('.descricao').addClass('terminada');
    })
    $('[data-toggle="clica-tarefa"]').click(function () {
        $(this).addClass('terminada');
        $(this).parent().prev().children('.nome-tarefa').addClass('terminada');
    })
    $('[data-toggle="deletar-tarefa"]').click(function() {
        $(this).parent().next().remove();
        $(this).parent().remove();
    });

});
//------------Func Expandir Desc Tabela----------------------------------
function expandirDescricao(item) {
    item.parent().next().children('.descricao').slideDown(50);
    item.parent().next().children('.descricao').attr('colspan', 1);
    item.attr('rowspan', 2);
    item.parent().children('.delete-tarefa').attr('rowspan', 2);
    item.children('i').removeClass('fa-plus');
    item.children('i').addClass('fa-minus');
}
//------------Func Retrair Desc Tabela----------------------------------
function retrairDescricao(item) {
    item.attr('rowspan', 1);
    item.parent().children('.delete-tarefa').attr('rowspan', 1);
    item.parent().next().children('.descricao').attr('colspan', 3);
    item.parent().next().children('.descricao').slideUp(50);
    item.children('i').removeClass('fa-minus');
    item.children('i').addClass('fa-plus');
}