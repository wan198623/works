$(function(){
	var t1=$("#a1").offset().top;
    var t2=$("#a2").offset().top;
	var t3=$("#a3").offset().top;
	var t4=$("#a4").offset().top;
	var t5=$("#a5").offset().top;
	$("body").mousedown(function(e){
		e.preventDefault();  //阻止浏览器的默认行为
	})
	$("body").mousemove(function(e){
		e.preventDefault();
	})
	$(window).scroll(function(){
//		//返回顶部
 	var tops=$(window).scrollTop();
		if(tops>=500){
		$(".fix_nav").fadeIn(1000);
 		$(".backtop").fadeIn(1000);
 	}else{
			$(".fix_nav").fadeOut(1000);
			$(".backtop").fadeOut(1000);
 	}
 	$(".backtop").click(function(){
 		var newobj={st:tops};
 		$(newobj).animate({st:0},{duration:1000,step:function(){
 			$(window).scrollTop(newobj.st)
 		}
 	})
	})
		var topss=tops+130
		if(topss>t1&&tops<t2){
			$(".listss").removeClass("active").eq(0).addClass("active");
			$(".wel h2").addClass("move1");
			$(".wel p").addClass("move2");
		}else{
			$(".wel h2").removeClass("move1");
			$(".wel p").removeClass("move2");
		}
		if(topss>t2&&tops<t3){
			$(".listss").removeClass("active").eq(1).addClass("active");
			$(".about .img_box").addClass("bounceIn");
	        $(".about .word").addClass("bounceIn");
		}else{
			$(".about .img_box").removeClass("bounceIn");
			$(".about .word").removeClass("bounceIn");
		}
		if(topss>t3&&tops<t4){
			$(".listss").removeClass("active").eq(2).addClass("active");
			$(".skills .con_con").addClass("bounceIn");
		}else{
			$(".skills .con_con").removeClass("bounceIn");
		}
		if(topss>t4&&tops<t5){
			$(".listss").removeClass("active").eq(3).addClass("active");
			$(".experence .project li").addClass("bounceIn");
		}else{
			$(".experence .project li").removeClass("bounceIn");
		}
		if(topss>t5){
			$(".listss").removeClass("active").eq(4).addClass("active");
			$(".contact .content   p").addClass("bounceIn");
			$(".contact .content .c_item").addClass("bounceIn");
		}else{
			$(".contact .content  p").removeClass("bounceIn");
			$(".contact .content  .c_item").removeClass("bounceIn");
		}
	})
	$(".scroll").click(function(){
		$('html,body').animate({scrollTop:t2}, 1000);
	})

    $(".lists").click(function(){
		var index=$(this).index();
	   $('html,body').animate({scrollTop:($('.floor').eq(index).offset().top)},1000);
   })
	$(".listss").click(function(){
		var index=$(this).index();
		$('html,body').animate({scrollTop:($('.floor').eq(index).offset().top)},1000);
		$(".listss").removeClass("active").eq(index).addClass("active");
	})


})

