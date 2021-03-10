window.onload = function(){
    $("#main > li").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(this).children(".sub").stop().slideUp();
    });

    let imgs = $("#visual > .img");
    let now = 0;
    setInterval(function(){
        let next = now >= imgs.length - 1 ? 0 : now + 1;
        $(imgs[now]).animate({left:"100%"}, 800);
        $(imgs[next]).css({left:"-100%"}).animate({left:0}, 800);
        now = next;
    }, 3000);

    $("table > tbody > tr:nth-child(1)").on("click", function(){
        $(".popup").css({display: "block"});
    });

    $(".close").on("click", function(){
        $(".popup").css({display: "none"});
    });
}