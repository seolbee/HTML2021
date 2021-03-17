window.onload = function(){
    $("#main > div").hover(function(){
        $(this).children(".sub").stop().slideDown();
    }, function(){
        $(this).children(".sub").stop().slideUp();
    });

    let imgs = $("#visual > img");
    let now = 0;
    let next = 0;
    setInterval(function(){
        $(imgs[now]).animate({"opacity" : 0}, 800);
        next = now >= imgs.length -1 ? 0 : now+1;
        $(imgs[next]).animate({"opacity" : 1}, 800);
        now = next;
    }, 3000);

    $(".tabs > span").on("click", function(){
        let class_name = $(this).attr("class");
        $(".tabs > span").removeClass("active");
        $(".tabs > ."+class_name).addClass("active");
        $(".box > div").css({"display" : "none"});
        $(".box > ."+class_name).css({"display":"block"});
    });

    $("table > tbody > tr:nth-child(1)").on("click", function(){
        $(".popup_box").css({'display':"block"});
    });

    $(".close").on("click", function(){
        $(".popup_box").css({"display":"none"});
    })
}