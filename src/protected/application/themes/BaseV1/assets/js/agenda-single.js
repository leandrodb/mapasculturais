$(function() {
    $('.js-agenda-singles-dates').each(function() {
        var fieldSelector = '#' + $(this).attr('id');
        var altFieldSelector = $(this).data('alt-field') ? $(this).data('alt-field') : fieldSelector.replace('-visible', '');
        if ($(altFieldSelector).length == 0) {
            return;
        }
        $(this).datepicker({
            dateFormat: $(this).data('date-format') ? $(this).data('date-format') : 'dd/mm/yy',
            altFormat: $(this).data('alt-format') ? $(this).data('alt-format') : 'yy-mm-dd',
            altField: altFieldSelector,
            beforeShow: function() {
                setTimeout(function() {
                    $('.ui-datepicker').css('z-index', 99999999999999);
                }, 0);
            }
        });

        $(this).on('change', function(){
            $('img.spinner').show();
            var url = MapasCulturais.baseURL+MapasCulturais.request.controller+'/agendaSingle/'+MapasCulturais.entity.id;
            
            $.get(url, {from:$('#agenda-from').val(),to:$('#agenda-to').val()}, function(result){
                $('#agenda-content').html(result);
                setAgendaCount();
                $('img.spinner').hide();
            });
        });
    });

    function setAgendaCount(){
        var count = $('#agenda-count-hidden').val() || 'Nenhum';
        $('#agenda-count').text(count);
        $('#agenda-count-plural').css('display', count == 1 || count == 'Nenhum' ? 'none' : 'inline');
    }
    setAgendaCount();
});