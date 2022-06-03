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
    var cursor = $('.cursor');
    var posX = 0, posY = 0;


    // 풀스크린 액션
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

    // 왼쪽 사이드바 액션
    menu.click(function(){
        // 메뉴 눌렀을 때 사이드바 나오게 하는 액션
        bg.addClass('on');
        md.addClass('on');
        $('html').on('mousewheel', function(event){
        // 사이드바 나오면 풀스크린 액션 중지
        event.stopPropagation();
        });
    });
    cls.click(function(){
        bg.removeClass('on');
        md.removeClass('on');
        // 사이드바 닫았을 때 풀스크린 액션 다시 활성화
        $('html').off('mousewheel');
    });
    btn.eq(0).addClass('on');
    // 사이드바 요소 눌렀을 때 액션
    sidebtn.click(function(){
        var cls = $(this).attr('class');
        var atr = $(this).attr('data-num');
        cnt = atr;
        // 비활성화 버튼
        if(cls){
            alert('서비스 준비 중 입니다.');
        }
        // 활성화 버튼 액션
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
    // 오른쪽 사이드 버튼 액션
    btn.click(function(){
        var ind = $(this).index();
        cnt = ind;
        btn.removeClass('on');
        btn.eq(ind).addClass('on');
        $('html').animate({
            scrollTop : num1[ind]
        });
    });

    // 타이핑 반짝임
    function blink(){
        $('.typing').toggleClass('active');
    }
    setInterval(blink, 500);
    
    // 마우스 이벤트
    $(window).mousemove(function(c){
        posX = c.clientX
        posY = c.clientY
        cursor.css({
            top: posY,
            left: posX
        })
    });
    flag = false;
});
history.scrollRestoration = "manual";
