$(document).ready(function(){
	// Parallax spacer
	parallax = new parallax();
    // Smooth Scrolling
	smoothScroll = new smoothScroll();
});

function parallax (obj) {
	// set our vars
	var $window = $(window),
		spacer = obj || $('.spacer'),
		lasCall = 0,
		lastYPos = spacer.offset().top,
		startXPos = $window.width(),
		offsetDiff = 0,
		offsetX;


	// set up our events
	var _updateY = function () {
		var viewTop = $window.scrollTop()
			viewable = viewTop + $window.height();
			

		if (viewable > spacer.offset().top + 25 && viewTop < spacer.offset().top + 25 + spacer.height() ) {
			diffY = viewable - lastYPos;
			lastYPos = viewable;

			var	position = spacer.css('background-position').split(' '),
				offsetX = parseInt(position[0]),
				offsetY = parseInt(position[1]);
				modifyY = (diffY * 0.3) * -1,

				direction = (diffY > 0) ? 'down' : 'up';

				if (direction == 'up' && offsetY + modifyY < 0 || direction == 'down' && offsetY + modifyY > -780) {
					spacer.css('background-position', offsetX + 'px ' + (offsetY + modifyY) + 'px');
					
				}
				
			
		}

	};

	var _updateX = function () {
		var viewableWidth = $window.width(),
			position = spacer.css('background-position').split(' '),
			offsetX = parseInt(position[0]),
			offsetY = parseInt(position[1]),
			diffX = viewableWidth - 1920;

		if (diffX < 0 && diffX > -1190) {
			spacer.css('background-position', diffX + 'px ' + offsetY + 'px');
		}

	};

	var _throttle = function(func, interval) {
	    var lastCall = 0;

	    return function() {
	        var now = Date.now();
	        if (lastCall + interval < now) {
	            lastCall = now;
	            return func.apply(this, arguments);
	        }
	    };
	};

	var _listener = function () {
		$window.on('scroll', _throttle(_updateY, 75));
		$window.on('resize', _throttle(_updateX, 150));
	}

	// Hook in and reset the css
	var _construct = function () {
		var _initX = $window.width() - 1920,
			xPos = (_initX > -1175) ? _initX : -1175;

		spacer.css({
			'background-attachment': 'scroll',
			'background-size': '1920px 1280px',
			'background-position': xPos + 'px ' + '-300px'
		});

		_listener();

	};
	
	_construct();
}

function smoothScroll() {
	var $window = $(window),
		$doc = $(document),
		wheel = false,
    	$scrollTop = $(window).scrollTop();

    var _initialize = function () {
	    $(window).on('scroll', function() {
		    if (wheel === false) {
		        $scrollTop = $(this).scrollTop();
		    }
		});

		$doc.on('DOMMouseScroll mousewheel resize', function(e, direction) {
			docHeight = $(document).height() - $(window).height(),
		    direction = direction || -e.originalEvent.detail / 3 || e.originalEvent.wheelDelta / 120;
		    wheel = true;
		    $scrollTop = Math.min(docHeight, Math.max(0, parseInt($scrollTop - direction * 50)));

		    $($.browser.webkit ? 'body' : 'html').stop().animate({
		        scrollTop: $scrollTop + 'px'
		    }, {
		    	duration: 750,
		    	easing: 'easeOutQuint',
		    	complete: function() {
		        	wheel = false;
		    	}
		    });
		    return false;
		});
    }

    _initialize();

}