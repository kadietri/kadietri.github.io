$(document).ready(function(){
	$(".slideshow_bar img:not(:first)").hide();
	$(".slideshow_bar img").css("position", "absolute");
	$(".slideshow_bar img").css("top, 272px");
	$(".slideshow_bar img").css("left", "360px");
	$(".slideshow_bar img").each(function(){
		var img = $(this);
		$("<img>").attr("src", $(this).attr("src")).load(function(){
			img.css("margin-left", -this.width / 2 + "px");
		});
	});
	var pause = false;
	function fadeNext(){
		$(".slideshow_bar img").first().fadeOut().appendTo($(".slideshow_bar"));
		$(".slideshow_bar img").first().fadeIn();
	}
	$(".slideshow_bar").hover(function(){
		pause = true;
	},function(){
		pause = false;
	});
	function doRotate(){
		if(!pause){
			fadeNext();
		}
	}
	var rotate = setInterval(doRotate, 2000);
});


//Photo Text
$(document).ready(function(){
	$(".slideshow_bar div:not(:first)").hide();
	$(".slideshow_bar div").css("position", "absolute");
	$(".slideshow_bar div").css("top, 502px");
	$(".slideshow_bar div").css("left", "370px");
	$(".slideshow_bar div").each(function(){
		var div = $(this);
		$("<div>").attr("src", $(this).attr("src")).load(function(){
			div.css("margin-left", -this.width / 2 + "px");
		});
	});
	var pause = false;
	function fadeNext(){
		$(".slideshow_bar div").first().fadeOut().appendTo($(".slideshow_bar"));
		$(".slideshow_bar div").first().fadeIn();
	}
	$(".slideshow_bar").hover(function(){
		pause = true;
	},function(){
		pause = false;
	});
	function doRotate(){
		if(!pause){
			fadeNext();
		}
	}
	var rotate = setInterval(doRotate, 2000);
});



/*$(document).ready(function(){
	$(".slideshow_bar img:not(:first)").hide();
	$(".slideshow_bar img").css("position", "absolute");
	$(".slideshow_bar img").css("top, 272px");
	$(".slideshow_bar img").css("left", "360px");
	$(".slideshow_bar img").each(function(){
		var img = $(this);
		$("<img>").attr("src", $(this).attr("src")).load(function(){
			img.css("margin-left", -this.width / 2 + "px");
		});
	});
	var pause = false;
	function fadeNext(){
		$(".slideshow_bar img").first().fadeOut().appendTo($(".slideshow_bar"));
		$(".slideshow_bar img").first().fadeIn();
	}
	$(".slideshow_bar").hover(function(){
		pause = true;
	},function(){
		pause = false;
	});
	function doRotate(){
		if(!pause){
			fadeNext();
		}
	}
	var rotate = setInterval(doRotate, 2000);
});
*/