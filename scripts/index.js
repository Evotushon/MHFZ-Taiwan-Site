
//================================================================
//news tab	
	$(function(){
		// 預設顯示第一個 Tab
		var _showTab = 0;
		var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
		$('.tab_content').eq($defaultLi.index()).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.tabs li.tab').mouseover(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_index = $this.index();
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$('.tab_content').eq(_index).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
//================================================================
//drop down	
	$(function(){
				//cache nav
				var nav = $("#gNavi");
				
				//add indicator and hovers to submenu parents
				nav.find("li").each(function() {
					if ($(this).find("ul").length > 0) {

						//show subnav on hover
						$(this).mouseenter(function() {
							$(this).find("ul").stop(true, true).slideDown();
						});
						
						//hide submenus on exit
						$(this).mouseleave(function() {
							$(this).find("ul").stop(true, true).slideUp();
						});
					}
				});
			});
//================================================================
//MAIN BANNER
//banner
$(function(){
		var $block = $('#fade_pic'), 
			$ad = $block.find('.ad'),
			showIndex = 0,			// 預設要先顯示那一張
			fadeOutSpeed = 1000,	// 淡出的速度
			fadeInSpeed = 1000,		// 淡入的速度
			defaultZ = 10,			// 預設的 z-index
			isHover = false,
			timer, speed = 3000;	// 計時器及輪播切換的速度
		
		// 先把其它圖片的變成透明
		$ad.css({
			opacity: 0,
			zIndex: defaultZ - 1
		}).eq(showIndex).css({
			opacity: 1,
			zIndex: defaultZ
		});
		
		// 組出右下的按鈕
		var str = '';
		for(var i=0;i<$ad.length;i++){
			str += '<a href="#"><span class="hidden">' + (i + 1) + '</span></a>';
		}
		var $controlA = $('#fade_pic').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');

		// 當按鈕被點選時
		// 若要變成滑鼠滑入來切換時, 可以把 click 換成 mouseover
		$controlA.click(function(){
			// 取得目前點擊的號碼
			showIndex = $(this).text() * 1 - 1;
			
			// 顯示相對應的區域並把其它區域變成透明
			$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
				if(!isHover){
					// 啟動計時器
					timer = setTimeout(autoClick, speed + fadeInSpeed);
				}
			}).css('zIndex', defaultZ).siblings('a').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
			// 讓 a 加上 .on
			$(this).addClass('on').siblings().removeClass('on');

			return false;
		}).focus(function(){
			$(this).blur();
		}).eq(showIndex).addClass('on');

		$block.hover(function(){
			isHover = true;
			// 停止計時器
			clearTimeout(timer);
		}, function(){
			isHover = false;
			// 啟動計時器
			timer = setTimeout(autoClick, speed);
		})
		
		// 自動點擊下一個
		function autoClick(){
			if(isHover) return;
			showIndex = (showIndex + 1) % $controlA.length;
			$controlA.eq(showIndex).click();
		}
		
		// 啟動計時器
		timer = setTimeout(autoClick, speed);
	});



//================================================================
//for all pages
    $(document).ready(function(){
    var gNavi = $("#gNavi-wrapper");
        // global navi
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 40) {
                   gNavi.addClass("fixed");
                } else {
                   gNavi.removeClass("fixed");
                }
            });
        });
    //});
	
	
//back to top btn
//$(document).ready(function(){
    
        // hide #back-top first
        $("#back-top").hide();
        
        // fade in #back-top
        $(function () {
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    $('#back-top').fadeIn();
                } else {
                    $('#back-top').fadeOut();
                }
            });
    
        // scroll body to 0px on click
        $('#back-top a').click(function () {
                $('body,html').animate({
                    scrollTop: 0
                }, 500);
                return false;
            });
        });
    
    });

// table color
$(function(){
 $('tr:odd').addClass('');//偶數行
 $('tr:even').addClass('tr-color');//單數行
});

$(function () {
 $('.info-list li:odd').addClass('');//偶數行
 $('.info-list li:even').addClass('even');//單數行
});

//================================================================
//PAGE TAB
$(function(){
		// 預設顯示第一個 Tab
		var _showTab = 0;
		var $defaultLi = $('ul.page-tab li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.page-tab li').click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
$(function(){
		// 預設顯示第一個 Tab
		var _showTab = 0;
		var $defaultLi = $('ul.cl-tab li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// 當 li 頁籤被點擊時...
		// 若要改成滑鼠移到 li 頁籤就切換時, 把 click 改成 mouseover
		$('ul.cl-tab li').click(function() {
			// 找出 li 中的超連結 href(#id)
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// 把目前點擊到的 li 頁籤加上 .active
			// 並把兄弟元素中有 .active 的都移除 class
			$this.addClass('active').siblings('.active').removeClass('active');
			// 淡入相對應的內容並隱藏兄弟元素
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});

//==============================================================
//roll over
	$(function(){
		var _img_over = $('img[src$="_o.gif"], img[src$="_o.jpg"], img[src$="_o.png"], input[type="image"]');
		//preload and current
		_img_over.each(function(){
			var _pre_hover = $(this).attr('src').replace(/_o(\.[a-zA-Z]+)$/, "_h"+"$1");
			var _imgobj = new Image();
			_imgobj.src = _pre_hover;
			if($(this).attr('class') == 'active'){
				var img_hover = $(this).attr('src').replace(/_o(\.[a-zA-Z]+)$/, "_h"+"$1");
				$(this).attr('src', img_hover);
			}
		});
		_img_over.mouseover(function(){
			var _img_hover = $(this).attr('src').replace(/_o(\.[a-zA-Z]+)$/, "_h"+"$1");
			$(this).attr('src', _img_hover);
		});
		_img_over.mouseout(function(){
			if($(this).attr('class') != 'active'){
				var _img_out = $(this).attr('src').replace(/_h(\.[a-zA-Z]+)$/, "_o"+"$1");
				$(this).attr('src', _img_out);
			}
		});
	});
