
//================================================================
//news tab	
	$(function(){
		// Preset to display the first Tab
		var _showTab = 0;
		var $defaultLi = $('ul.tabs li').eq(_showTab).addClass('active');
		$('.tab_content').eq($defaultLi.index()).siblings().hide();
		
		// When the li tab is clicked...
		// If you want to change it to switch when the li tab is clicked, change click to mouseover
		$('ul.tabs li.tab').mouseover(function() {
			// Find the hyperlink href(#id) in li
			var $this = $(this),
				_index = $this.index();
			// Add .active to the currently clicked li tab
			// and remove all sibling elements that have .active in them
			$this.addClass('active').siblings('.active').removeClass('active');
			// Fade in the corresponding content and hide the sibling element
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
			showIndex = 0,			// Preset to show that one first
			fadeOutSpeed = 1000,	// Fade out speed
			fadeInSpeed = 1000,		// Fade in speed
			defaultZ = 10,			// Preset z-index
			isHover = false,
			timer, speed = 3000;	// Timer and rotation switching speed
		
		// Turn the other images transparent first
		$ad.css({
			opacity: 0,
			zIndex: defaultZ - 1
		}).eq(showIndex).css({
			opacity: 1,
			zIndex: defaultZ
		});
		
		// Group out the lower right button
		var str = '';
		for(var i=0;i<$ad.length;i++){
			str += '<a href="#"><span class="hidden">' + (i + 1) + '</span></a>';
		}
		var $controlA = $('#fade_pic').append($('<div class="control">' + str + '</div>').css('zIndex', defaultZ + 1)).find('.control a');

		// When the button is clicked
		// If you want to switch to mouseover, you can replace click with mouseover.
		$controlA.click(function(){
			// Get the current click number
			showIndex = $(this).text() * 1 - 1;
			
			// Show the corresponding area and make the other areas transparent
			$ad.eq(showIndex).stop().fadeTo(fadeInSpeed, 1, function(){
				if(!isHover){
					// Start the timer
					timer = setTimeout(autoClick, speed + fadeInSpeed);
				}
			}).css('zIndex', defaultZ).siblings('a').stop().fadeTo(fadeOutSpeed, 0).css('zIndex', defaultZ - 1);
			// Let a add .on
			$(this).addClass('on').siblings().removeClass('on');

			return false;
		}).focus(function(){
			$(this).blur();
		}).eq(showIndex).addClass('on');

		$block.hover(function(){
			isHover = true;
			// Stop timer
			clearTimeout(timer);
		}, function(){
			isHover = false;
			// Start the timer
			timer = setTimeout(autoClick, speed);
		})
		
		// Auto-click next
		function autoClick(){
			if(isHover) return;
			showIndex = (showIndex + 1) % $controlA.length;
			$controlA.eq(showIndex).click();
		}
		
		// Start the timer
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
 $('tr:odd').addClass('');//Odd rows
 $('tr:even').addClass('tr-color');//Even rows
});

$(function () {
 $('.info-list li:odd').addClass('');//Odd Rows
 $('.info-list li:even').addClass('even');//Odd Rows
});

//================================================================
//PAGE TAB
$(function(){
		// Default shows the first Tab
		var _showTab = 0;
		var $defaultLi = $('ul.page-tab li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// When the li tab is clicked...
		// If you want to change it to switch when you mouse over the li tab, change click to mouseover
		$('ul.page-tab li').click(function() {
			// Find the hyperlink href(#id) in li
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// Add .active to the currently clicked li tabs
			// and remove all sibling elements that have .active in the class
			$this.addClass('active').siblings('.active').removeClass('active');
			// Fade in the corresponding content and hide the brother element
			$(_clickTab).stop(false, true).fadeIn().siblings().hide();

			return false;
		}).find('a').focus(function(){
			this.blur();
		});
	});
$(function(){
		// Default display of the first Tab
		var _showTab = 0;
		var $defaultLi = $('ul.cl-tab li').eq(_showTab).addClass('active');
		$($defaultLi.find('a').attr('href')).siblings().hide();
		
		// When the li tab is clicked...
		// If you want to change it to switch when you mouse over the li tab, change click to mouseover
		$('ul.cl-tab li').click(function() {
			// Find the hyperlink href(#id) in li
			var $this = $(this),
				_clickTab = $this.find('a').attr('href');
			// Add .active to the currently clicked li tabs
			// and remove all sibling elements that have .active in the class
			$this.addClass('active').siblings('.active').removeClass('active');
			// Fade in the corresponding content and hide the brother element
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
