$(function(){
    $(".main > div").hover(function(){
        $(this).children('.sub').stop().slideDown('slow');
    }, function(){
        $(this).children('.sub').stop().slideUp('fast');
    });
})