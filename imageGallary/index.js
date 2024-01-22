$('.thumbnail').on('click',function(){
    var clicked=$(this);
    var newSelection=clicked.data('big')
    var $img=$('.image').css("background-image","url("+newSelection+")")
    clicked.parent().find('.thumbnail').removeClass('selected')
    clicked.addClass('selected')
    $('.image').empty().append($img.hide().fadeIn('slow'))
})