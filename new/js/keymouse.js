game.prototype.keydown=function(ev){
	switch(ev.keyCode){
		//a
		case 65:
			this.zhujue.left=true;
			this.zhujue.direction=-1;
		break;
		//d
		case 68:
			this.zhujue.right=true;
			this.zhujue.direction=1;
		break;
		//k
		case 75:
			this.zhujue.jump=true;
		break;
		case 74:
			this.zhujue.pressattack=true;
		break;
	}
}
game.prototype.keyup=function(ev){
	switch(ev.keyCode){
		//a
		case 65:
			this.zhujue.left=false;
		break;
		//d
		case 68:
			this.zhujue.right=false;
		break;
		//k
		case 75:
			this.zhujue.jump=false;
		break;
		case 74:
			this.zhujue.pressattack=false;
	}
}

game.prototype.click=function(ev){

}