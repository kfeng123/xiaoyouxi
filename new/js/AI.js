game.prototype.AI=function(role){
	//不多解释了嘿嘿
	if(role.jump)role.jump=false;
	else if((!((timecounter+Math.round(role.rndnum*70))%70))&&Math.random()<0.5){role.jump=true;}
	if(!((timecounter+Math.round(role.rndnum*50))%50)){
		switch(Math.round(Math.random()*3)){
		case 0:
			role.left=false;
			role.right=false;
			break;
		case 1:
			role.left=false;
			role.right=true;
			break;
		case 2:
			role.left=true;
			role.right=false;
			break;
		}
		
		
		
	}
}