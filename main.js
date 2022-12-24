/*
TODO:
    when adicionar + is pressed:
        validate fields title and description
        add new title, description and done=false to task list array
        render table with new information
*/
$(document).ready(function () {
    //---------Registrar Valores no formulario----------------------------
    $('form').on('submit', function(e){
        e.preventDefault();

        const nomeTarefa = $('#nome-tarefa');
        const descricaoTarefa = $('#descricao-tarefa');
        $(`
        <tr>
            <td class="descricao-controle" rowspan="2">
                <i class="fa-solid fa-minus"></i>
            </td>
            <td class="nome-tarefa">${nomeTarefa.val()}</td>
            <td class="delete-tarefa" rowspan="2">
                <i class="fa-solid fa-trash-can"></i>
            </td>
        </tr>
        <tr>
            <td class="descricao">${descricaoTarefa.val()}</td>
        </tr>
        `).appendTo('tbody');
        nomeTarefa.val('');
        descricaoTarefa.val('');
    })
    //---------Detectar click para expandir ou retrair Descrição---------
    $(document).on('click', '.descricao-controle', function () {
        if($(this).attr('rowspan') == 1){
            expandirDescricao($(this));
        } else {
            retrairDescricao($(this));
        }
        
    })
    //--------Riscar valores da tarefa-------------------------------------
    $(document).on('click', 'tbody .nome-tarefa', function () {
        const descricaoTd = $(this).parent().next().children('.descricao');
        $(this).addClass('terminada');
        descricaoTd.addClass('terminada');
    })
    $(document).on('click', 'tbody .descricao', function () {
        const tituloTd = $(this).parent().prev().children('.nome-tarefa');
        $(this).addClass('terminada');
        tituloTd.addClass('terminada');
    })
    //--------Remover tarefa-------------------------------------------------
    $(document).on('click', 'tbody .delete-tarefa', function () {
        const linhaTabela = $(this).parent();
        const proximaLinha = linhaTabela.next();
        proximaLinha.remove();
        linhaTabela.remove();
    });
});
//------------Func Expandir Desc Tabela----------------------------------
function expandirDescricao(item) {
    const descricaoTd = item.parent().next().children('.descricao');
    const deleteTd = item.parent().children('.delete-tarefa');
    const iconeControle = item.children('i');

    descricaoTd.slideDown(50);
    descricaoTd.attr('colspan', 1);
    item.attr('rowspan', 2);
    deleteTd.attr('rowspan', 2);
    iconeControle.removeClass('fa-plus');
    iconeControle.addClass('fa-minus');
}
//------------Func Retrair Desc Tabela----------------------------------
function retrairDescricao(item) {
    const descricaoTd = item.parent().next().children('.descricao');
    const deleteTd = item.parent().children('.delete-tarefa');
    const iconeControle = item.children('i');

    item.attr('rowspan', 1);
    deleteTd.attr('rowspan', 1);
    descricaoTd.attr('colspan', 3);
    descricaoTd.slideUp(50);
    iconeControle.removeClass('fa-minus');
    iconeControle.addClass('fa-plus');
}