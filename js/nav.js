var oNav=document.getElementById('nav');
oNav.innerHTML='<ul>'+
					'<li>'+
						'<a href="Casehome.html">影像</a>'+
					'</li>'+
					'<li>'+
						'<a href="interact.html">VR</a>'+
					'</li>'+
					'<li>'+
						'<a href="numberindex.html">数字角色</a>'+
					'</li>'+
					'<li class="pad_bot">'+
						'<a href="staticimage.html">平面摄影</a>'+
					'</li>'+
					'<li class="border_top">'+
						'<a href="aboutus.html">公司介绍</a>'+
					'</li>'+
					'<li>'+
						'<a href="contact.html">联系方式</a>'+
					'</li>'+
					'<li>'+
						'<a href="joinus.html">加入我们</a>'+
					'</li>'+
				'</ul>';

	//中英文切换
	var address=window.location.href;
	var str=address.substring(address.lastIndexOf('/')+1);
	$('.en_icon').attr('href','bitoneen/'+str+'');