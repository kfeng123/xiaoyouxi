game.prototype.renderobject=function(id,img,sx,sy,swidth,sheight,x,y,width,height){
//构造渲染队列中的对象.参考drawImage方法。
	var a=new Object();
	a={id:id,img:img,sx:sx,sy:sy,swidth:swidth,sheight:sheight,x:x,y:y,width:width,height:height}
	return a;
}
game.prototype.addrenderlist=function(role){
	//在渲染队列中增加对象
	var flag=0;
	for(i=0;i<this.renderlist.length;i++){
			if(this.renderlist[i].id==role.id){
				this.renderlist[i].x=role.x;
				this.renderlist[i].y=role.y;
				flag=1;
			}
		}
		//如果在渲染队列里没有此角色对象，就创建一个此角色对象
		if (flag==0){
			var a=GAME.renderobject(role.id,role.img,0,0,100,100,role.x,role.y,100,100);
			this.renderlist.push(a);
		}
}

game.prototype.render=function(){
//渲染
	//游戏逻辑
	this.interval();
	//清空画布
	this.ctx.clearRect(0,0,600,400);
	//画地图
	this.drawmap();
	for (i=0;i<this.renderlist.length;i++){
		this.ctx.drawImage(this.renderlist[i].img,this.renderlist[i].sx,this.renderlist[i].sy,this.renderlist[i].swidth,this.renderlist[i].sheight,this.renderlist[i].x,this.renderlist[i].y,this.renderlist[i].width,this.renderlist[i].height);
	}
	window.webkitRequestAnimationFrame(function(){GAME.render()});
}

