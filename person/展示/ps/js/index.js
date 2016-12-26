$(function(){
	var t1=$("#a1").offset().top;
    var t2=$("#a2").offset().top;
	var t3=$("#a3").offset().top;
	var t4=$("#a4").offset().top;
	var t5=$("#a5").offset().top;
	$(window).scroll(function(){
		//返回顶部
 	var tops=$(window).scrollTop();
		if(tops>=300){
 		$(".backtop").fadeIn(1000);
 	}else{
       $(".backtop").fadeOut(1000);
 	}
 	$(".backtop").click(function(){
 		var newobj={st:tops};
 		$(newobj).animate({st:0},{duration:1000,step:function(){
 			$(window).scrollTop(newobj.st)
 		}
 	   })
 	})
 	//animation
 	if(tops-150>t1&&tops<t2){
$(".wel h2").addClass("move1");
$(".wel p").addClass("move2");
}
if(tops-150>t2&&tops<t3){
$(".about .img_box").addClass("top");
$(".about .word").addClass("top1");
}
if(tops-150>t3&&tops<t4){
$(".skills .con_con").addClass("tada");
}
if(tops-150>t4&&tops<t5){
$(".experence .project li").addClass("tiao");
}
if(tops>t5+150){
$(".contact .content ul li  p").addClass("bounceIn");
$(".contact .content ul li .c_item").addClass("bounceIn");
}
//$(".scroll").click(function(){
//	var newobj={st:t2};
// 		$(newobj).animate({st:t2},{duration:5000,step:function(){
// 			$(window).scrollTop(newobj.st)
// 		}
// 	   })
//})


 })
})


