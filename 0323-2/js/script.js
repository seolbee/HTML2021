$(function(){
    $("#main > div").hover(function(){
        $(this).children('.sub').stop().slideDown();
    }, function(){
        $(this).children('.sub').stop().slideUp();
    });

    let imgs = $("#visual > img");
    let now = 0;
    let next = 0;
    setInterval(function(){
        next = now >= imgs.length-1 ? 0:now+1;
        $(imgs[now]).animate({'opacity' : 0}, 800);
        $(imgs[next]).animate({'opacity' : 1}, 800);
        now = next;
    }, 3000);

    $(".tabs > span").on("click", function(){
        $(".tabs > span").removeClass("active");
        $(this).addClass("active");
        let class_name = $(this).attr("class").split(" ")[0];
        $('.content_box > div').removeClass("active");
        $(`.${class_name}_box`).addClass("active");
    });

    $(".close").on("click", function(){
        $(".popup_box").css({display:'none'});
    });
    
    $("table > tbody > tr:nth-child(1)").on("click", function(){
        $(".popup_box").css({display:'block'});
    });
});