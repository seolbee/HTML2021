$(function(){
    $("#main > li").hover(function(e){
        $(e.target).children('#sub').stop().slideDown();
    }, function(e){
        $(e.target).children('#sub').stop().slideUp();
    })
    let imgs = $('.img_box > img');
    let now = 0;
    let next;
    setInterval(function(e){
        $(imgs[now]).animate({top: '100%'}, 800);
        next = now >= 2 ? 0: now + 1;
        $(imgs[next]).css({top: '-100%'}).animate({top:'0'}, 800);
        now = next;
    }, 3000);
})