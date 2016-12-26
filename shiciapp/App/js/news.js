$(function(){
    function resize(originSize,type){
        var type = type || "x";
        if(type == "x"){
            var widths=document.documentElement.clientWidth;
            var scale=widths/originSize*100;
        }else if(type == "y"){
            var heights=document.documentElement.clientHeight;
            var scale=heights/originSize*100;
        }
        document.getElementsByTagName("html")[0].style.fontSize=scale+"px";
    }

    window.onload=function(){
        resize(750,"x");
    }



    var Nflag=true;
    $(".nav").click(function(){
        if(Nflag){
            $(this).find("span:nth-child(1)").css({
                transform:"translateY(0.2rem) rotate(-45deg)"
            })
            $(this).find("span:nth-child(2)").css({
                transform:"rotate(45deg)"
            })
            $(this).find("span:nth-child(3)").css({
                transform:"scale(0)"
            });

            $(".min-menu").show();
            Nflag=false;
        }else{
            $(this).find("span:nth-child(1)").css({
                transform:"none"
            })
            $(this).find("span:nth-child(2)").css({
                transform:"none"
            })
            $(this).find("span:nth-child(3)").css({
                transform:"scale(1)"
            });
            Nflag=true;
        }
    })
    // $("footer>a").click(function(){
    //     $("footer>a").removeClass('mui-active');
    //     $(this).addClass('mui-active');
    // });
    //$("footer>a").click(function(e){
    //    e.preventDefault();
    //})
})