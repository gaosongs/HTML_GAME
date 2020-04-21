//负责生成方块，代码生成工厂
//七种不同类型的方块
	/**
	 * 口
	 * 口
	 * 口
	 * 口*/
	var Square1 = function(){
		Square.call(this)
		//方块数据
		this.data = [
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0],
			[0,2,0,0]
		];
	}
	Square1.prototype = Square.prototype;
	/*var square1 = [
		[0,2,0,0],
		[0,2,0,0],
		[0,2,0,0],
		[0,2,0,0]
	];*/
	/**
	 * 	口 
	 * 口口口*/
	/*var square2 = [
		[0,2,0,0],
		[2,2,2,0],
		[0,0,0,0],
		[0,0,0,0]
	];*/
	var Square2 = function(){
		Square.call(this)
		//方块数据
		this.data = [
			[0,2,0,0],
			[2,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		];
	}
	Square2.prototype = Square.prototype;
	
	/**
	 * 口口
	 * 口口*/
	/*var square3 = [
		[0,0,0,0],
		[0,2,2,0],
		[0,2,2,0],
		[0,0,0,0]
	];*/
	var Square3 = function(){
		Square.call(this)
		//方块数据
		this.data = [
			[0,0,0,0],
			[0,2,2,0],
			[0,2,2,0],
			[0,0,0,0]
		];
	}
	Square3.prototype = Square.prototype;
	
	/**
	 *    口
	 * 口口口*/
	/*var square4 = [
		[0,0,2,0],
		[2,2,2,0],
		[0,0,0,0],
		[0,0,0,0]
	];*/
	var Square4 = function(){
		Square.call(this)
		//方块数据
		this.data = [
			[0,0,2,0],
			[2,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		];
	}
	Square4.prototype = Square.prototype;
	
	/**
	 * 口口
	 * 口
	 * 口*/
	/*var square5 = [
		[2,2,0,0],
		[2,0,0,0],
		[2,0,0,0],
		[0,0,0,0]
	];*/
	var Square5 = function(){
		Square.call(this)
		//方块数据
		this.data = [
			[2,2,0,0],
			[2,0,0,0],
			[2,0,0,0],
			[0,0,0,0]
		];
	}
	Square5.prototype = Square.prototype;
	
	/**
	 * 口口
	 *  口口*/
	/*var square6 = [
		[0,2,2,0],
		[0,0,2,2],
		[0,0,0,0],
		[0,0,0,0]
	];*/
	var Square6 = function(){
		Square.call(this)
		//方块数据
		this.data = [
			[0,2,2,0],
			[0,0,2,2],
			[0,0,0,0],
			[0,0,0,0]
		];
	}
	Square6.prototype = Square.prototype;
	
	/**
	 *  口口
	 * 口口*/
	/*var square7 = [
		[0,0,2,2],
		[0,2,2,0],
		[0,0,0,0],
		[0,0,0,0]
	];*/
	var Square7 = function(){
		Square.call(this)
		//方块数据
		this.data = [
			[0,0,2,2],
			[0,2,2,0],
			[0,0,0,0],
			[0,0,0,0]
		];
	}
	Square7.prototype = Square.prototype;
	
	var SquareFactory = function(){}
	SquareFactory.prototype.make = function(){
		var index = Math.ceil(Math.random()*7);
		var s;
		switch(index){
			case 1:
				s = new Square1();
				break;
			case 2:
				s = new Square2();
				break;
			case 3:
				s = new Square3();
				break;
			case 4:
				s = new Square4();
				break;
			case 5:
				s = new Square5();
				break;
			case 6:
				s = new Square6();
				break;
			case 7:
				s = new Square7();
				break;
			default :
				break;
		}
		return s;
	}
