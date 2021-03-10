window.onload = function(){
    console.log();
    $("#main > li").hover(function(){
        $(".sub").stop().slideDown();
        $(".back").eq(0).stop().slideDown();
        
    }, function(){
        $(".sub").stop().slideUp();
        $(".back").stop().slideUp();
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