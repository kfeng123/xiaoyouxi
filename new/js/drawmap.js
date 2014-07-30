

game.prototype.drawmap=function(){
	//画平台
	
	for(var i=0;i<this.station.length;i++){
		this.ctx.beginPath();
		this.ctx.moveTo(this.station[i][1]-this.view.x,this.station[i][3]-this.view.y);
		this.ctx.lineTo(this.station[i][2]-this.view.x,this.station[i][3]-this.view.y);
		this.ctx.lineWidth=1;
		this.ctx.stroke();
		
	}
}
