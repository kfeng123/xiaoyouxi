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
		this.enemy=new Array();
		//视角
		this.view={x:0,y:0};
		//地图宽高
		this.mapwh={width:1200,height:800};
}

game.prototype.init=function(){
	//平台数据，一个平台由4个值刻画：id:id,left:左端点；right：右端点；height：高度；
	this.station=[
		[1,0,1200,780],
		[2,300,600,650],
		[3,0,300,580],
		[4,0,300,710],
		[5,600,900,710],
		[6,900,1200,650]
		];
	//初始化主角
	this.zhujue=this.createzhujue();
	this.zhujueanimation();
	this.zhujue.img.src="./image/youyu.png";
	
	//初始化敌人
	for (var i=0;i<30;i++){
		this.enemy.push(this.createzhujue());
		this.enemy[this.enemy.length-1].id="enemy";
		this.enemyanimation(this.enemy.length-1); 
	}
	//开始渲染
	window.webkitRequestAnimationFrame(function(){GAME.render()});
}