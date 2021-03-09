$(function(){
    $("#main > li").hover(function(e){
        $(e.target).children('.sub').stop().slideDown();
    }, function(e){
        $(e.target).children('.sub').stop().slideUp();
    })
    let imgs = $('.img_box > img');
    let now = 0;
    let next;
    setInterval(function(e){
        $(imgs[now]).animate({top: '-100%'}, 800);
        next = now >= 2 ? 0: now + 1;
        $(imgs[next]).css({top: '100%'}).animate({top:'0'}, 800);
        now = next;
    }, 3000);

    $(".tab > ul > li").click(function(e){
        $(".tab > ul > li").removeClass("activity");
        $(e.target).addClass("activity");
        let idx = $(e.target).data("idx");
        $(".box > *").removeClass("on")
        $(".box > *").eq(idx).addClass("on");
    });

    $("table > tbody > tr:nth-child(1) > td").eq(0).click(function(e){
        $(".popup").css({display:"block"});
    });

    $(".close").click(function(e){
        $(".popup").css({display:"none"});
    })
})