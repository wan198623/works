function person(canvas,cobj,run,jump,hurt){
	this.canvas=canvas;
	this.cobj=cobj;
	this.run=run;
	this.jump=jump;
	this.hurt=hurt;
	this.x=canvas.width/3;
	this.y=0;
	this.width=240;
	this.height=300;
    this.status="run";
    this.state=0;
    this.speedy=5;
    this.g=10;
}
person.prototype={
	draw:function(){
		this.cobj.save();
		this.cobj.translate(this.x,this.y);
		this.cobj.drawImage(this[this.status][this.state],0,0,240,300,0,0,this.width,this.height);
		this.cobj.restore();
	}
}
//创建障碍物
function  hinder(canvas,cobj,hinders){
	this.canvas=canvas;
	this.cobj=cobj;
	this.hinders=hinders;
	this.state=0;
	this.x=canvas.width-20;
	this.y=600;
	this.width=56;
	this.height=40;
	this.speedx=6
}
hinder.prototype={
	draw:function(){
		this.cobj.save();
		this.cobj.translate(this.x,this.y);
		this.cobj.drawImage(this.hinders[this.state],0,0,56,40,0,0,this.width,this.height);
		this.cobj.restore();
	}
}
//游戏主类
function game(canvas,cobj,run,jump,hinders,runm,hurtm){
    this.canvas=canvas;
	this.runm=runm;
	this.hurtm=hurtm;
    this.w=canvas.width;
    this.h=canvas.height;
	this.cobj=cobj;
	this.speed = 8;
	this.person=new person(canvas,cobj,run,jump);
	this.hinders=hinders;
	this.hinderArr=[];
	this.score=0;
	this.life=3;
}
game.prototype={
    play:function(mask){
		var that=this;	
        var number=0;
		var top=0;
		var num=0;
		var back=0;
		var rand=(5+Math.ceil(5*Math.random()))*1000;
		that.key();
		setInterval(function(){
			num++;
			back-= that.speed;
			that.cobj.clearRect(0,0,that.w,that.h);
			that.cobj.clearRect(0, 0, that.w, that.h);
			if(that.person.status=="run"){
				that.person.state=num%8;
			}else{
				that.person.state=0;
			}
		  that.person.speedy+=that.person.g;
		  top+=that.person.speedy;
		  if (top>=380) {
		  	top=380;
		  }
            that.person.draw();
			that.person.y=top;
			that.canvas.style.backgroundPositionX=back+"px";
			//判断障碍物
			if(number%rand==0){
				mumber=0;
				 rand=(5+Math.ceil(5*Math.random()))*1000;
				var obj=new hinder(that.canvas,that.cobj,that.hinders);
			     obj.state=Math.floor(that.hinders.length*Math.random());
				that.hinderArr.push(obj);
				if(that.hinderArr.length>5){
					that.hinderArr.shift();
				}
			}
			number+=50;
			for(var i=0;i<that.hinderArr.length;i++){
				that.hinderArr[i].x-=that.speed;
				that.hinderArr[i].draw();
				if(hitPix(that.canvas,that.cobj,that.person,that.hinderArr[i])){
			            if(!that.hinderArr[i].flag){
							that.life--;
						}
					if(that.life==0){
						that.person.status="hurt";
						that.runm.pause();
						that.hurtm.play();
						that.canvas.style.backgroundPositionX="0px";
						 mask.css({display:"block",animation:"mask 0.5s ease forwards"});
					}
					that.hinderArr[i].flag=true;

				}
				if(that.person.x>that.hinderArr[i].x+that.hinders.w){
					if(!that.hinderArr[i].flag&&!that.hinderArr[i].flag1){
						that.score++;
						 document.title=that.score;
						that.hinderArr[i].flag=true;
					}

				}
			}

               
		},50)

	},
	key:function () {
		var that=this;
		var flag=true;
		document.onkeydown=function(e){
			if(!flag){
				return;
			}
			flag=false;
			if(e.keyCode==32){
				that.person.status="jump";
				var inita=0;
				var speeda=10;
				var r=100;
				var initY =that.person.y;
			  var t=setInterval(function(){
					inita+=speeda;
				if(inita>=180){
					clearInterval(t);
					that.person.y=initY ;
					that.person.status="run";
					flag=true;
				}else{
					var top=Math.sin(inita*Math.PI/180)*r;
					that.person.y=initY -top;
				}
				},50)
			}
		}
	}

}