'use strict'
function getStyle(obj,name)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[name];
	}
	else
	{
		return getComputedStyle(obj,false)[name];
	}
}

$(function(){
	//导航
	var oNav=document.getElementById('nav');
	var oNavW=getStyle(oNav,'width');
	window.onresize=function()
	{
		oNavW=getStyle(oNav,'width');
		$('.nav').stop().animate({'left':('-'+oNavW)});	
		$('.logo').stop().animate({'left':'0'});
		$('.click_pos').css('display','none');
	};
	$('.click_pos').height($(window).height());
	$('.nav').height($(window).height());
	//oNavW=getStyle(oNav,'width');
	$('.nav_icon').click(function(){
		$('.logo').stop().animate({'left':oNavW});
		$('.nav').stop().animate({'left':0});
		//$('.click_pos').css('display','block');
	});
	$('.nav').mouseout(function(ev){
		var oEvent=ev||event;
		var oTo = oEvent.toElement||oEvent.relatedTarget;
		if(this.contains(oTo))return;
		//$('.click_pos').css('display','none');
		$('.logo').css({'position':'fixed'});
		$('.logo').stop().animate({'left':'0'});
		$('.nav').stop().animate({'left':('-'+oNavW)});	
	});
	$('.play_video').hover(function(){
		$(this).addClass('active');
	},function(){
		$(this).removeClass('active');
	});



	//点击播放视频
	/*;(function(){
		$('.play_video').click(function(){
			$('.video_box').css('visibility','visible');
			$('iframe').attr('src',"http://v.qq.com/iframe/player.html?vid=k0194vgwmhe&amp;auto=1&amp;overflow=hidden'");
		});
		$('.close_btn').click(function(){
			$('.video_box').css('visibility','hidden');
			$('iframe').attr('src',"");
		});
	})();*/
	

	//公司介绍
	;(function(){
		$('.aboutus_bottom li').hover(function(){
			$(this).addClass('active').siblings().removeClass('active');
		},function(){
			$(this).removeClass('active');
		});
	})();

	//表单提交

	//email
	;(function(){
		var re=/^[\w\-]+\@[a-zA-Z0-9\-]+(\.[a-zA-z]{2,8}){1,2}$/;
		$('input[name=email]').blur(function(){
			if(!re.test($(this).val()))
			{
				$('.email .wrong').css('display','block');
			}
			else
			{
				$('.email .wrong').css('display','none');
			}
		});
	})();

	//phone
	;(function(){
		var re=/^1[34578][0-9]{9}$/;
		$('input[name=phone]').eq(1).blur(function(){
			if(!re.test($(this).val()))
			{
				$('.phone .wrong').css('display','block');
			}
			else
			{
				$('.phone .wrong').css('display','none');
			}
		});
	})();
	//company
	;(function(){
		$('input[name=company]').blur(function(){
			if(!$(this).val())
			{
				$('.company .wrong').css('display','block');
			}
			else
			{
				$('.company .wrong').css('display','none');
			}
		});
	})();
	
	//图片放大
	$('.bigimage_img li').hover(function(){
			$(this).addClass('active').siblings().removeClass('active');
		},function(){
			$(this).removeClass('active');
		});
	/*$('.top_middle').hover(function(){
			$('.top_middle img').css({'width':'914px','height':'550px','z-index':'9','margin-left':'-150px' })
		},function(){
			$('.top_middle img').css({'width':'639px','height':'384px','margin-left':'-0'})
		});*/

	//radio
	$('.radiobox').eq(1).css('color','red');
	$('.radiobox').each(function(){
		$(this).click(function(){
			$(this).css('color','red').siblings().css('color','#000');
		})
	});




	//IE7 IE8不支持 <link media="screen and (min-width: 1024px)"/>
	if(window.navigator.userAgent.indexOf('MSIE 8.0')!=-1||window.navigator.userAgent.indexOf('MSIE 7.0')!=-1){
		var width = $(window).width();
		var oLink=document.createElement('link');
		oLink.setAttribute("rel", "stylesheet");
		oLink.setAttribute("type", "text/css");
		oLink.setAttribute("id", "size-stylesheet");
		oLink.setAttribute("href", "css/index.css");

	    if (width < 1920 && width >= 1680) {
	    	oLink.setAttribute("href", "css/index1680.css");
	    }
	    else if (width < 1680 && width >= 1440) {
	    	oLink.setAttribute("href", "css/index1440.css");
	    }
	    else if (width < 1440 && width >= 1366) {
	    	oLink.setAttribute("href", "css/index1366.css");
	    }
	    else if (width < 1366 && width >= 1280) {
	    	oLink.setAttribute("href", "css/index1280.css");
	    }
	    else if(width < 1280 ) {
	    	oLink.setAttribute("href", "css/index1024.css");
	    }
	    else if(width >= 1920 ){
	    	oLink.setAttribute("href", "css/index.css");
	    } 
	    if(width<=900)
	    {
	    	oLink.setAttribute("href", "css/index1024.css");
	    	$('.page_box').css("width","1052px");
	    }
	    var oHead = document.getElementsByTagName("head")[0];
	    oHead.appendChild(oLink);	    
	};





});
























