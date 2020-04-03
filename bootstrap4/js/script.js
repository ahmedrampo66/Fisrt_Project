$(function(){
    //Adjust slider height

    var windowHeight=$(window).height();
    
    $('.slider, .carousel-item').height(windowHeight - ($('.upper-bar').innerHeight() + $('.navbar').innerHeight()));

    $('.featureed-work ul li').on("click",function(){
        $(this).addClass("active").siblings().removeClass('active');
        if($(this).data("class")=== 'all'){
            $('.featureed-work .work').css('opacity',1);
        }else{
            $('.featureed-work .work').css('opacity','.06');
            $($(this).data("class")).parent().css('opacity',1);
        }
    });
    


});