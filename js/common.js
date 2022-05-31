$(function(){
    $('.hdr').load('./inc/header.html', function(){
        var nav = $('.hdrWrap header nav h4');
        var nums = [];
        var btn = $('.sidebar .image');
        for(var i = 0; i < $('.cntWrap .content').length; i++){
            nums[i] = $('.cntWrap .content').eq(i).offset().top;
        }
        nav.click(function(){
            var ind = $(this).index();
            btn.removeClass('on');
            btn.eq(ind).addClass('on');
            $('html').animate({
                scrollTop : nums[ind]
            });
        });
    });
});