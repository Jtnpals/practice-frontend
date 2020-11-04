$('input[type="button"]').click( function(e) {
    var $this = $(e.target);
    switch($this.attr('id')) {
        case 'fadeout':
            $('#target').fadeOut('slow');
            break;
        case 'fadein':
            $('#target').fadeIn('slow');
            break;
        case 'hide':
            $('#target').hide();
            break;
        case 'show':
            $('#target').show();
            break;
        case 'slidedown':
            $('#target').hide().slideDown('slow');
            break;
        case 'slideup':
            $('#target').slideUp('slow');
            break;
        case 'mix':
            $('#target').fadeOut('slow').fadeIn('slow').delay(1000).slideUp().slideDown('slow', function(){alert('end')});
            break;
    }
}) 