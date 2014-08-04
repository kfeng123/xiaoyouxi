game.prototype.interval=function(){
	//游戏主逻辑
	//敌人AI
	for(var i=0;i<this.enemy.length;i++)this.AI(this.enemy[i]);
	//行走
	this.move(this.zhujue);
	for(var i=0;i<this.enemy.length;i++)this.move(this.enemy[i]);
	//跳跃
	this.jump(this.zhujue);
	for(var i=0;i<this.enemy.length;i++)this.jump(this.enemy[i]);

	//如果按着攻击键并且目前并不是在攻击状态,那么攻击
	if(this.zhujue.pressattack&&(!this.zhujue.attack.ifattack))this.attack(this.zhujue);
	
	//更新角色渲染属性
	this.refreshrender(this.zhujue);
	
	
	
	
	for(var i=0;i<this.enemy.length;i++)this.refreshrender(this.enemy[i]);
	
}

game.prototype.refreshrender=function(role){
	//如果在攻击状态
	if(role.attack.ifattack){
		if(role.direction==-1){
			role.attack.x=role.x-this.renderlist[role.whichrender].width*1.5;
			role.attack.y=role.y-this.renderlist[role.whichrender].height;
			this.renderlist[role.attack.whichrender].x=role.attack.x;
			this.renderlist[role.attack.whichrender].y=role.attack.y;
			
			this.renderlist[role.attack.whichrender].sx=role.attack.zuodonghua[Math.floor(role.attack.attacktime/5)%role.attack.zuodonghua.length][0];
			this.renderlist[role.attack.whichrender].sy=role.attack.zuodonghua[Math.floor(role.attack.attacktime/5)%role.attack.zuodonghua.length][1];
			this.renderlist[role.attack.whichrender].swidth=role.attack.zuodonghua[Math.floor(role.attack.attacktime/5)%role.attack.zuodonghua.length][2];
			this.renderlist[role.attack.whichrender].sheight=role.attack.zuodonghua[Math.floor(role.attack.attacktime/5)%role.attack.zuodonghua.length][3];
			role.attack.attacktime++;
			if(role.attack.attacktime==(5*role.attack.zuodonghua.length)){
				role.attack.attacktime=0;
				role.attack.ifattack=false;
				this.renderlist.splice(role.attack.whichrender,1);
			}
		}
		else{
			role.attack.x=role.x+this.renderlist[role.whichrender].width*0.5;
			role.attack.y=role.y-this.renderlist[role.whichrender].height;
			this.renderlist[role.attack.whichrender].x=role.attack.x;
			this.renderlist[role.attack.whichrender].y=role.attack.y;
			this.renderlist[role.attack.whichrender].sx=role.attack.youdonghua[Math.floor(role.attack.attacktime/5)%role.attack.youdonghua.length][0];
			this.renderlist[role.attack.whichrender].sy=role.attack.youdonghua[Math.floor(role.attack.attacktime/5)%role.attack.youdonghua.length][1];
			this.renderlist[role.attack.whichrender].swidth=role.attack.youdonghua[Math.floor(role.attack.attacktime/5)%role.attack.youdonghua.length][2];
			this.renderlist[role.attack.whichrender].sheight=role.attack.youdonghua[Math.floor(role.attack.attacktime/5)%role.attack.youdonghua.length][3];
			role.attack.attacktime++;
			if(role.attack.attacktime==(5*role.attack.youdonghua.length)){
				role.attack.attacktime=0;
				role.attack.ifattack=false;
				this.renderlist.splice(role.attack.whichrender,1);
			}
		}
	}
	//更新角色渲染属性
	var donghua=null;
	if(role.left){
		donghua=role.leftdonghua;
	}
	else if(role.right){
		donghua=role.rightdonghua;
	}
	else if(role.direction==1){
		donghua=role.jingzhiyou;
	}
	else if(role.direction==-1){
		donghua=role.jingzhizuo;
	}
	//设置切片
	this.renderlist[role.whichrender].sx=donghua[Math.floor(timecounter/15)%donghua.length][0];
	this.renderlist[role.whichrender].sy=donghua[Math.floor(timecounter/15)%donghua.length][1];
	this.renderlist[role.whichrender].swidth=donghua[Math.floor(timecounter/15)%donghua.length][2];
	this.renderlist[role.whichrender].sheight=donghua[Math.floor(timecounter/15)%donghua.length][3];
	//位置
	this.renderlist[role.whichrender].x=role.x-this.renderlist[role.whichrender].width/2;
	this.renderlist[role.whichrender].y=role.y-this.renderlist[role.whichrender].height;

}


game.prototype.pengzhuang=function(role){
	//碰撞检测
	var k=-1;
	for(var i=0;i<role.under.length;i++){
		//如果平台在角色上方
		if(this.station[i][3]<=role.y){
			if(role.under[i]==1&&this.station[i][1]<=role.x&&this.station[i][2]>=role.x){
				k=i;
			}
			else{
				role.under[i]=0;
			}
		}
		//如果平台在角色下方
		else{
			role.under[i]=1;
		}
	}
	return k;
}