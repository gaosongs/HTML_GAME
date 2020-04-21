// 方块处理 左移，右移，旋转，下落。
var Square = function(){
	//方块数据
	this.data = [
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0],
		[0,0,0,0]
	];
	//原点
	this.origin = {
		x : 0,
		y : 3
	};
	//旋转数组
	this.totates =function(data){
		var sArray=[	
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0],
			[0,0,0,0]
		];
        for(var i = 0;i < data.length; i++){
            var newIndex =3-i;
            for(var j =0; j <data[0].length; j++){
                sArray[j][newIndex] = data[i][j]
            }
        }
        return sArray;
   }
}
Square.prototype.canRotate = function(isValid){
/*	this.data = this.totates(this.data);*/
	return isValid(this.origin,this.totates(this.data));
}
Square.prototype.rotate = function(isValid){
	this.data = this.totates(this.data);
}
Square.prototype.canDown = function(isValid){
	var test = {};
	test.x = this.origin.x + 1;
	test.y = this.origin.y;
	return isValid(test,this.data);
}
Square.prototype.down = function(){
	this.origin.x = this.origin.x+1;
}
Square.prototype.canRight = function(isValid){
	var test = {};
	test.x = this.origin.x ;
	test.y = this.origin.y +1;
	return isValid(test,this.data);
}
Square.prototype.right = function(){
	this.origin.y = this.origin.y + 1;
}
Square.prototype.canLeft = function(isValid){
	var test = {};
	test.x = this.origin.x ;
	test.y = this.origin.y - 1;
	return isValid(test,this.data);
}
Square.prototype.left = function(){
	this.origin.y = this.origin.y - 1;
}
