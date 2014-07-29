var GAME=null;
var timecounter=0;
window.onload=function(){
	GAME=new game();
	GAME.init();
	//增加键盘鼠标监听
	document.addEventListener('keydown',function(ev){GAME.keydown(ev);})
	document.addEventListener('keyup',function(ev){GAME.keyup(ev);})
	document.addEventListener('click',function(ev){GAME.click(ev);})
	//丢帧太严重，舍弃了setInterval
	//GAME.timer=window.setInterval(function(){GAME.interval();},10);
}
function game(){
		this.canvas=document.getElementById("canvas1");
		this.ctx=this.canvas.getContext("2d");
		//渲染队列
		this.renderlist=new Array();
		//状态，0开始画面，1游戏中，10结束
		this.state=0;
		//平台队列
		this.station=new Array();
		//计时器,舍弃了
		//this.timer=null;
		//主角
		this.zhujue=null;
		//敌人队列
		this.enemy={};
}

game.prototype.init=function(){
	//平台数据，一个平台由4个值刻画：id:id,left:左端点；right：右端点；height：高度；
	this.station=[
		[1,0,600,380],
		[2,300,600,250],
		[3,0,300,180],
		[4,0,300,310]
		];
	//初始化主角
	this.createzhujue();
	
	//开始渲染
	//var a=GAME.renderobject("背景",haha,0,0,100,100,0,0,600,400);
	//GAME.renderlist.push(a);
	//var b=GAME.renderobject("忍者",renzhe,0,0,100,100,0,0,300,200);
	//GAME.renderlist.push(b);
	window.webkitRequestAnimationFrame(function(){GAME.render()});
}