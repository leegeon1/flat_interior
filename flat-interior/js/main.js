$(function(){
    var num1 = [];
    var x = 0;
    var cnt = 0;
    var flag = false;
    var btn = $('.sidebar .image');
    for(var i = 0; i < $('.cntWrap .content').length; i++){
        num1[i] = $('.cntWrap .content').eq(i).offset().top;
    }
    $(window).on('mousewheel',function(eve){
        x = eve.originalEvent.wheelDelta;
        if(!flag){
            if(x < 0){
                cnt++;
                flag = true;
                if(cnt>=4){cnt=4;}
            }else{
                cnt--;
                flag = true;
                if(cnt<=0){cnt=0}
            }
            $('html').animate({
                scrollTop:num1[cnt]
            },1000,function(){
                flag = false;
            });
        }
    });
    btn.click(function(){
        var ind = $(this).index();
        btn.removeClass('on')
        btn.eq(ind).addClass('on');
        $('html').animate({
            scrollTop : num1[ind]
        });
    });
});