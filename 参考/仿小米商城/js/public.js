$(function(){
/*您的购物车*/	
$(".dy5").mouseenter(function(){
	$(".dy6").stop().slideDown()
	})
$(".dy6").mouseenter(function(){
	$(".dy6").stop().slideDown()
	})		
$(".dy5").mouseleave(function(){
	$(".dy6").stop().slideUp()
	})	
$(".dy6").mouseleave(function(){
	$(".dy6").stop().slideUp()
	})		
/*帝云商城APP*/	
$("#diyunapp").mouseenter(function(){
	$(".dy9").stop().slideDown()
	})	
$("#diyunapp").mouseleave(function(){
	$(".dy9").stop().slideUp()
	})	
/*推荐商品轮播	*/
var i=0
	var clone=$(".lunbobanner .lunboimg li").first().clone();
	$(".lunbobanner .lunboimg").append(clone)
	var size=$(".lunbobanner .lunboimg li").size()
	/*自动轮播*/
	var t=setInterval(moveL,2000)
	/*定时器的关闭与开启*/
	$(".kongzhianniu").hover(function(){
		clearInterval(t);
		
		},function(){
		t=setInterval(moveL,2000)	
			
		})
	
	$(".btnr").click(function(){
		moveL()
		})
	function moveL(){
		i++
		if(i==size){
			$(".lunboimg").css({left:0})
			i=1;
			}
		$(".lunboimg").stop().animate({left:-i*1225},500)
		
		}	
		
	$(".btnl").click(function(){
		moveR()
		})
	function moveR(){
		i--
		if(i==-1){
			$(".lunboimg").css({left:-(size-1)*1225})
			i=size-2;
			}
		$(".lunboimg").stop().animate({left:-i*1225},500)
		}
///////////////////////////导航出现消失	
$(function(){
	function rightBar() {
        $(window).scroll(function () {
            var scroll_top = $(document).scrollTop();
            if (scroll_top >960) {
                $(".dy19").show();}
              else
                   {$(".dy19").hide();}           
        });
        $("#to_top").click(function () {
            location.hash = "top";
            $(".float_right li:last").hide();
        });
    }
        rightBar();
	})	
//////////////////////////一大群的js控制个个对应的地区
$('a[href*=#fzxba],area[href*=#fzxba]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
////////////////////////////////
$('a[href*=#ghmza],area[href*=#ghmza]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
///////////////////////////////
$('a[href*=#sjtxa],area[href*=#sjtxa]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
///////////////////////////////
$('a[href*=#jydq],area[href*=#jydq]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
///////////////////////////////
$('a[href*=#dnsma],area[href*=#dnsma]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
///////////////////////////////
$('a[href*=#ydjsa],area[href*=#ydjsa]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
//////////////////////////////
$('a[href*=#jjsha],area[href*=#jjsha]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
////////////////////////////////
$('a[href*=#mywja],area[href*=#mywja]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
//////////////////////////////
$('a[href*=#spbj],area[href*=#spbj]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
/////////////////////////////
$('a[href*=#tsyx],area[href*=#tsyx]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
//////////////////////////////
$('a[href*=#zcypa],area[href*=#zcypa]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
///////////////////////////////
$('a[href*=#shfwa],area[href*=#shfwa]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
//////////////////////////////	
$('a[href*=#tttja],area[href*=#tttja]').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var $target = $(this.hash);
            $target = $target.length && $target || $('[name=' + this.hash.slice(1) + ']');
            if ($target.length) {
                var targetOffset = $target.offset().top;
                $('html,body').animate({
                    scrollTop: targetOffset
                },
                1000);
                return false;
            }
        }
    });	
//////////////////////////////给滑动导航添加class标记
$(".dy19 a").click(function(){
	$(this).addClass("danb").siblings().removeClass("danb")
	})	
////////////////////////////控制多个商品的出现或消失	
$(".cate").mouseenter(function(){
	var fr=$(this).attr("mt-floor");
	var cat=$(this).attr("mt-ct");
	$(".b-"+fr+"-"+cat+"").show().siblings().hide();
	})
///////////////////////////给控制商品出现或消失的导航块添加区分样式	
$(".cate").mouseenter(function(){
	var fr=$(this).attr("mt-floor");
	var cat=$(this).attr("mt-ct");
	$(".a-"+fr+"-"+cat+"").css({color:"#f00"}).siblings().css({color:"#000"})
	})	

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	})