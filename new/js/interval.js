game.prototype.interval=function(){
	//游戏主逻辑
	//行走
	this.move(this.zhujue);
	//跳跃
	this.jump(this.zhujue);
	
	//更新主角属性
	this.addrenderlist(this.zhujue);
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