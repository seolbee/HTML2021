window.onload=function(){
    $("#main > li").hover(function(){
        $(".sub").stop().slideDown();
        $(".back").stop().slideDown();
    }, function(){
        $(".sub").stop().slideUp();
        $(".back").stop().slideUp();
    });

    let imgs = $("#visual > img");
    let now = 0;
    let next = 0;
    setInterval(function(){
        next = now >= imgs.length-1 ? 0 : now + 1;
        imgs.eq(now).animate({"left" : "100%"}, 800);
        imgs.eq(next).css({"left" : "-100%"}).animate({"left" : 0}, 800);
        now = next;
    }, 3000);

    $("table > tbody > tr:nth-child(1)").on("click", function(){
        $(".popup").css({"display" : "block"});
    });

    $(".close").on("click", function(){
        $(".popup").css({"display" : "none"});
    })
}