game.prototype.role=function(){
//角色，包括主角和敌人,left和right代表行走状态,jump代表是否按下跳键,jumpstate代表目前在哪个平台上，-1代表在空中
	var role=new Object();
	role.id=null;
	role.life=null;
	role.x=null;
	role.y=null;
	role.img=null;
	role.speed=null;
	role.acc=null;
	role.left=false;
	role.right=false;
	role.jump=false;
	role.jumpstate=-1;
	//竖直的速度
	role.hspeed=null;
	//在下落时为真
	role.xialuo=false;
	//平台是否在角色下面，在的话为1
	role.under=new Array();
	for(var i=0;i<this.station.length;i++){
		role.under[i]=0;
	}
	return role;
	
	//在渲染队列中的位置,-1代表还没放入渲染队列
	role.whichrender=-1;
	//不用json了
	//return{id:id,life:life,x:x,y:y,img:img,speed:speed,left:false,right:false,jump:false,jumpstate:false,understation:[]};
}

game.prototype.createzhujue=function(){
	this.zhujue=this.role();
	this.zhujue.id="zhujue";
	this.zhujue.life=100;
	this.zhujue.x=100;
	this.zhujue.y=0;
	this.zhujue.img=renzhe;
	this.zhujue.speed=5;
	this.zhujue.acc=1;
	//一开始在空中
	this.zhujue.jumpstate=-1;
	//初始化哪块平台在主角下面
	for(var i=0;i<this.station.length;i++){
		if(this.station[i][3]>=this.zhujue.y)this.zhujue.under[i]=1;
		else this.zhujue.under[i]=0;
	}
}


game.prototype.move=function(role){
	//让一个角色走
	if(role.left)role.x-=role.speed;
	if(role.right)role.x+=role.speed;
	//如果在平台两边走出去，状态就是下落
	if(role.jumpstate!=-1)if(role.x>this.station[role.jumpstate][2]||role.x<this.station[role.jumpstate][1])role.jumpstate=-1;
	
	
}
game.prototype.jump=function(role){	
			//如果在空中，那么就自由下落
	if(role.jumpstate==-1){
		//下降
		role.hspeed+=role.acc;
		//给速度一个上线
		if(role.hspeed>5)role.hspeed=10;
		role.y+=role.hspeed;
		//碰撞检测，如果已经落地，更新现在所在的平台
		role.jumpstate=this.pengzhuang(role);
		if(role.jumpstate!=-1){role.hspeed=0;role.y=this.station[role.jumpstate][3];}
	}
	
	//如果平地上，按了跳跃键
	if(role.jumpstate!=-1)if(role.jump){
		//变为空中状态
		role.jumpstate=-1;
		role.hspeed=-15;
	
	}
}