//点击播放视频
;(function(){
	var oVideo=document.getElementById('video');

	$('.play_video').click(function(){
		$('.video_box').css('visibility','visible');
        $('.play_video').css('visibility','hidden');
		oVideo.play();
	});
	/*$('.play_btn').toggle(function(){
		oVideo.pause();
	},function(){
		oVideo.play();
	});*/
	$('.close_btn').click(function(){
		$('.video_box').css('visibility','hidden');
        $('.play_video').css('visibility','visible');
		oVideo.pause();
		oVideo.currentTime=0;
	});
	//进入全屏
	/*function requestFullScreen() {
	    if (oVideo.requestFullscreen) {
	        oVideo.requestFullscreen();
	    } else if (oVideo.mozRequestFullScreen) {
	        oVideo.mozRequestFullScreen();
	    } else if (oVideo.webkitRequestFullScreen) {
	        oVideo.webkitRequestFullScreen();
	    }
	}
	oVideo.ontimeupdate=function()
	{
		var scale=oVideo.currentTime/oVideo.duration;
		oBar.style.width=scale*oBarbox.offsetWidth+'px';
		//oBarbtn.style.left=scale*oBarbox.offsetWidth-oBarbtn.offsetWidth/2+'px';
	};
	$('.big_btn').click(function(){
		requestFullScreen();
	});*/

	oVideo.onended=function(){
		setTimeout(function(){
			$('.video_box').css('visibility','hidden');
		},3000);
	};
})();
