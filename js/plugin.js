// JavaScript Document
+(function($){
	//Plugin For Pic
	//============================
	var Pic=function(){
		$(".pic").mouseenter(function(){
			$(this).css("background","#3B3B3B");
		});	
		$(".pic").mouseleave()(function(){
			$(this).css("background","#f1f1f1");
		});	
	}
	
	//返回顶部
	var backButton=$('#mybtn');			
			backButton.on('click',function(){
				$('html,body').animate({scrollTop:0},300);
			});			
			$(window).on('scroll',function(){
				if($(window).scrollTop()>200){
					backButton.fadeIn();
				}else{
					backButton.fadeOut();
				}
			});
	
	var homeButton=$('#homebutton');
			homeButton.on('click',function(){			
				$('html,body').animate({scrollTop:$('#menudown').offset().top},300);				
			});
})(jQuery);