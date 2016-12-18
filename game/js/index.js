$(function(){
    var cx=document.documentElement.clientWidth;
    var cy=document.documentElement.clientHeight;
    //var arr=
    var canvas=document.getElementsByTagName("canvas")[0];
    canvas.width=cx;
    canvas.height=cy;
    var cobj=canvas.getContext("2d");
    var run=document.querySelectorAll(".run");
    var hurt=document.querySelector(".hurt");
    var jump=document.querySelectorAll(".jump");
    var runm=document.querySelector(".runm");
    var hurtm=document.querySelector(".hurtm");
      runm.play();
    //选项卡
    var start=$(".start");
    var mask=$(".mask");
    var hinders=$(".hinder");
    //开始按钮
    var startbutton=$(".btn");
    startbutton.one("click",function(){
        // start.css("animation","start1 0.5s ease forwards");
        // mask.css("animation","mask1 0.5s ease forwards");
        $(".btn").css("display","none");
        $(".score").css("display","block");
        $(".life").css("display","block");
        $("canvas").css({background:"url(img/back.jpg) repeat-x",
         backgroundSize:"100% 100%"
        });
         var gamePlay=new game(canvas,cobj,run,jump,hinders,runm,hurtm);
        gamePlay.play(mask);
       
    })
  $(".back").click(function(){
      location.reload();
  })
    $(".wen").click(function(){
        $(".start").css({display:"block",animation:"start 0.5s ease forwards"});
    })
    $(".close").click(function(){
        $(".start").css({display:"block",animation:"start1 0.5s ease forwards"});
    })
//一件事件只执行一次
    $(".active").show();
    $(".onactive").hide();
  $(".active").click(function(){
      $(".active").hide();
      $(".onactive").show();
      runm.pause();
  })
    $(".onactive").click(function(){
        $(".active").show();
        $(".onactive").hide();
        runm.play();
    })
})


	

