$(function(){
    var num1 = [];
    var x = 0;
    var cnt = 0;
    var flag = false;
    var btn = $('.sidebar .image');
    var bg = $('.Modal_menubar_bg');
    var md = $('.Modal_menubar');
    var cls = $('.Modal_menubar .menuHdr a');
    var menu = $('.menu span');
    for(var i = 0; i < $('.cntWrap .content').length; i++){
        num1[i] = $('.cntWrap .content').eq(i).offset().top;
    }
    $(window).on('mousewheel',function(eve){
        x = eve.originalEvent.wheelDelta;
        if(!flag){
            if(x < 0){
                cnt++;
                flag = true;
                if(cnt>=3){cnt=3;}
                btn.removeClass('on');
                btn.eq(cnt).addClass('on');
            }else{
                cnt--;
                flag = true;
                if(cnt<=0){cnt=0}
                btn.removeClass('on');
                btn.eq(cnt).addClass('on');
            }
            $('html').animate({
                scrollTop:num1[cnt]
            },1000,function(){
                flag = false;
            });
        }
    });
    menu.click(function(){
        bg.addClass('on');
        md.addClass('on');
    });
    cls.click(function(){
        bg.removeClass('on');
        md.removeClass('on');
    });
    btn.click(function(){
        var ind = $(this).index();
        cnt = ind;
        btn.removeClass('on');
        btn.eq(ind).addClass('on');
        $('html').animate({
            scrollTop : num1[ind]
        });
    });
    btn.eq(0).addClass('on');
});
history.scrollRestoration = "manual";