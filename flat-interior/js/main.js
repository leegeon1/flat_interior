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
    var sidebtn = $('.menu_Box_01 h2');


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
        $('html').on('mousewheel', function(event){
        event.stopPropagation();
        });
    });
    cls.click(function(){
        bg.removeClass('on');
        md.removeClass('on');
        $('html').off('mousewheel');
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
    sidebtn.click(function(){
        var cls = $(this).attr('class');
        var atr = $(this).attr('data-num');
        cnt = atr;
        if(cls){
            alert('서비스 준비 중 입니다.');
        }
        if(!cls){
            bg.removeClass('on');
            md.removeClass('on');
            btn.removeClass('on');
            btn.eq(atr).addClass('on');
            $('html').off('mousewheel');
            $('html').animate({
                scrollTop : num1[atr]
            });
        }
    });
    function blink(){
        $('.typing').toggleClass('active');
    }
    setInterval(blink, 500);
    flag = false;
});
history.scrollRestoration = "manual";
