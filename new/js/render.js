game.prototype.renderobject=function(id,img,sx,sy,swidth,sheight,x,y,width,height){
//构造渲染队列中的渲染对象.参考drawImage方法。
//加入一个逻辑变量，判断这个对象是否已经为空了，（用于达到删除渲染对象的目的）
	var a=new Object();
	a={id:id,img:img,sx:sx,sy:sy,swidth:swidth,sheight:sheight,x:x,y:y,width:width,height:height,isempty:false}
	return a;
}
/* game.prototype.addrenderlist=function(){
	//在渲染队列中增加渲染对象
	var flag=0;
	for(var i=0;i<this.renderlist.length;i++){
			if(this.renderlist[i].id==role.id){
				this.renderlist[i].x=role.x;
				this.renderlist[i].y=role.y;
				flag=1;
			}
		} 
		//如果在渲染队列里没有此渲染对象，就创建一个渲染对象
		
	var a=GAME.renderobject(role.id,role.img,0,0,100,100,role.x,role.y,100,100);
	this.renderlist.push(a);
	
} */

game.prototype.render=function(){
	timecounter++;
//渲染
	//游戏逻辑
	this.interval();
	//转换视角
	this.changeview();
	//清空画布
	this.ctx.clearRect(0,0,600,400);
	//画地图
	this.drawmap();
	//渲染
	for (i=0;i<this.renderlist.length;i++){
		if(!this.renderlist[i].isempty){
			this.ctx.drawImage(this.renderlist[i].img,this.renderlist[i].sx,this.renderlist[i].sy,this.renderlist[i].swidth,this.renderlist[i].sheight,this.renderlist[i].x-this.view.x,this.renderlist[i].y-this.view.y,this.renderlist[i].width,this.renderlist[i].height);
		}
	}
	window.webkitRequestAnimationFrame(function(){GAME.render()});
}

game.prototype.changeview=function(){
	this.view.x=this.zhujue.x-300;
	if(this.view.x<0){
		this.view.x=0;
	}
	else if(this.view.x>this.mapwh.width-600){
		this.view.x=this.mapwh.width-600;
	}
	this.view.y=this.zhujue.y-300;
	if(this.view.y<0){
		this.view.y=0;
	}
	else if(this.view.y>this.mapwh.height-100){
		this.view.y=this.mapwh.width-100;
	}
	
}