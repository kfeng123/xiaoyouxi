game.prototype.attack=function(role1,role2){
	//role1攻击role2,如果role2==null，role1就是片伤
	if(role1.attack.ifattack)return;
	//动画
	this.startattackanimation(role1);
	
	//伤害方位,矩形区域，(x1,y1)为左上角坐标，（x2,y2）为右上角坐标
	var fanwei={x1:0,y1:0,x2:0,y2:0};
	if(role1.direction==-1){
		fanwei.x1=role1.x-this.renderlist[role1.whichrender].width*1.5;
		fanwei.y1=role1.y-this.renderlist[role1.whichrender].height;
		fanwei.x2=role1.x-this.renderlist[role1.whichrender].width*0.5;
		fanwei.y2=role1.y;
	}
	else{
		fanwei.x1=role1.x+this.renderlist[role1.whichrender].width*0.5;
		fanwei.y1=role1.y-this.renderlist[role1.whichrender].height;
		fanwei.x2=role1.x+this.renderlist[role1.whichrender].width*1.5;
		fanwei.y2=role1.y;
	}
	if(role2==null){
		if(role1.id=="zhujue"){
			for(var i=0;i<this.enemy.length;i++){
				if(this.enemy[i].x>=fanwei.x1&&this.enemy[i].x<=fanwei.x2&&this.enemy[i].y>=fanwei.y1&&this.enemy[i].y<=fanwei.y2){
					this.renderlist[this.enemy[i].whichrender].isempty=true;
					this.enemy.splice(i,1);
					i--;
				}
			}
		}
	
	return;
	}
}

game.prototype.startattackanimation=function(role){
	//攻击动画
	role.attack.ifattack=true;
	role.attack.attacktime=0;
	//加进渲染队列
	var temp=this.renderlist.push(this.renderobject('attack',role.attack.img,0,0,30,50,role.attack.x,role.attack.y,30,50));
	role.attack.whichrender=temp-1;
	
}
game.prototype.createattackobj=function(){
	
	var attack=new Object();
	//是否在发动攻击状态
	attack.ifattack=false;
	//攻击动画运行到第几秒了
	attack.attacktime=0;
	//
	attack.img=new Image();
	attack.img.src="./image/attack.BMP";
	attack.x=0;
	attack.y=0;
	attack.zuodonghua=[
		[0,0,60,100],
		[60,0,60,100],
		[120,0,60,100]
	];
	attack.youdonghua=[
		[0,100,60,76],
		[60,100,75,76],
		[135,100,85,76]
	]
	attack.whichrender=-1;
	return attack;
}