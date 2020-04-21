$(function(){
	initMenu();
	
});

// game parameters
var params = {
	scene: 'random',
	level: 1,
	player: 1
};

// home menu
function initMenu() {
	$('#star,#star2,#help,#exit,#option,#helpCont .back, .confirm, .cancel, .level_1, .level_2, .level_3').hover(function() {
		$(this).css('background-position','25%');
	}, function() {
		$(this).css('background-position','0%');
	});
	$('#star,#star2,#help,#exit,#option,#helpCont .back, .confirm, .cancel, .level_1, .level_2, .level_3').mousedown(function() {
		$(this).css('background-position','50%');
	});
	$('#star,#star2').mouseup(function() {
		setParams({ player: $(this).attr('class') });
		$('#home > div').hide();
		$('#home').slideUp();
		$('#levelWin').slideDown(function() {
			$('div', $(this)).show();
		});
	});
	$('#help').mouseup(function() {
		$('#home').fadeOut('fast', function() {
			$('#helpCont').fadeIn('fast');
		});
	});
	$('#helpCont .back').mouseup(function() {
		$('#helpCont').fadeOut('fast', function() {
			$('#home').fadeIn('fast');
		});
	});
	$('#option').mouseup(function() {
		$('#optionWin').animate({height: 403, width: 319, top: 190, left: 487},'1000').find('*').show();
		$('#optionWin #scene > div.'+ params.scene).siblings().removeClass('checked').end().addClass('checked');
	});
	$('#optionWin #scene > div').click(function() {
		$(this).siblings().removeClass('checked').end().addClass('checked');
	});
	$('#optionWin .confirm').click(function() {
		setParams({ scene: $('#scene > .checked').attr('class').split(' ').shift() });
		$('#optionWin').animate({height: 0, width: 0, top: 588, left: 800},'1000').find('*').hide();
	});
	$('#optionWin .cancel').click(function() {
		$('#optionWin').animate({height: 0, width: 0, top: 588, left: 800},'1000').find('*').hide();
	});
	$('#exit').click(function() {
		window.open('','_parent','');	     
		window.close(); 
	});
	// start game onclick
	$('#levelWin .iss').hover(function() {
		$('#levelWin .iss').removeClass('selected');
		$(this).addClass('selected');
	}).click(function() {
		setParams({ level: $(this).parent().attr('class').split('_')[1] });
		$('#levelWin').hide().find(' > div').hide();
		$('#container *').remove();
		$('#container').css('background','url(images/'+ getScene('bgrnd') +'.jpg) no-repeat');
		$('#startGame').show(function() {
			$('#related').show(function() {
				loadGame();
			});
			initInfo();
		});
	});
}

// info menu shows on key event or mouse event
function initInfo() {
	$('#goHome, #goMenu, #continue').hover(function() {
		$(this).css('background-position','25%');
	}, function() {
		$(this).css('background-position','0%');
	});
	$('#goHome, #goMenu, #continue').mousedown(function() {
		$(this).css('background-position','50%');
	});
	$('#goMenu, #continue').hover(function() {
		$('.select').removeClass('selected');
		$(this).find(' > .select').addClass('selected');
	});
	$('#goHome').mouseup(function() {
		showInfo('goMenu');
	});
	$('#goMenu, #continue').mouseup(function() {
 		processInfo();
 	});
 	$(document).keydown(function(e){
 		e = e || window.event;
 		var key = e.which || e.keyCode;
 		switch (key) {
 				case 27: showInfo('goMenu'); break;
        case 38: if ($('#info:visible').length == 1) $('#info .select').toggleClass('selected'); break;
        case 40: if ($('#info:visible').length == 1) $('#info .select').toggleClass('selected'); break;
        case 13: if ($('#info:visible').length == 1) processInfo(); break;
        default: break;
    }
 	});
 	// info menu shows on blur
 	$(window).blur(function() {
 		if(document.activeElement == document.body)
 			showInfo('continue');
 	});
}

// exit or pause
function showInfo(_s) {
	$('#info').show();
	$('#info .select').removeClass('selected');
	$('#'+ _s +' .select').addClass('selected');
	state.pause = true;
}

// continue or exit
function processInfo() {
	if ($('#info .selected').parent().attr('id') == 'continue') {
  	state.pause = false;
  	$('#info').hide(); 
  	$('#info .select').removeClass('selected');
  } else {
  	goMenu();
  }
}

// go home menu
function goMenu() {
	$('#info').hide();
	gameOver('back');
	$('#startGame').slideUp();
	$('#home').slideDown(function() {
		$('#home > div').show();
		initMenu();
	});
}

// set game parameters
function setParams(opt) {
	params = $.extend(params, opt || {});
}

// get game parameters
function getScene(param) {
	var _p;
	if (param == 'map')
		_p = 'map';
	else if (param == 'bgrnd')
		_p = 'bgrnd';
	switch (params.scene) {
      case 'lawn': return _p + '1'; break;
      case 'snowfield': return _p + '2'; break;
      case 'sandlot': return _p + '3'; break;
      case 'random': return _p + '1'; break;
      default: break;
  }
}

// get game parameters
function getLevel() {
	return params.level;
}

// get game parameters
function getPlayer() {
	return params.player;
}