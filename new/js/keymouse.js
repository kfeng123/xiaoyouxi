game.prototype.keydown=function(ev){
	switch(ev.keyCode){
		//a
		case 65:
			this.zhujue.left=true;
		break;
		//d
		case 68:
			this.zhujue.right=true;
		break;
		//k
		case 75:
			this.zhujue.jump=true;
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
	}
}

game.prototype.click=function(ev){

}