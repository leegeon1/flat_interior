$(function(){
    $('.hdr').load('./inc/header.html', function(){
        var nav = $('.hdrWrap header nav h4');
        var nums = [];
        for(var i = 0; i < $('.cntWrap .content').length; i++){
            nums[i] = $('.cntWrap .content').eq(i).offset().top;
        }
        nav.click(function(){
            var ind = $(this).index();
            console.log(ind);
            $('html').animate({
                scrollTop : nums[ind]
            });
        });
    });
});