game.prototype.interval=function(){
	//游戏主逻辑
	//行走
	this.move(this.zhujue);
	//跳跃
	this.jump(this.zhujue);
	
	//更新主角渲染属性
	this.refreshrender(this.zhujue);
	
}

game.prototype.refreshrender=function(role){
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