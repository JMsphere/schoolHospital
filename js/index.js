var  time = "";
var index = 1;
function showing(num) {
	index = num;
	$("#imgNum").find("li")
		.removeClass("onSelect")
		.eq(index - 1)
		.addClass("onSelect");
	$("#showPic").find("img")
		.hide()
		.stop(true, true)
		.eq(index - 1)
		.fadeIn("slow");
	index = index + 1 > 5 ? 1 : index + 1;
	time = setTimeout("showing(" + index + ")" , 3000);
}
$(document).ready(function($) {
	showing(index);
	$("#imgNum").find("li").hover(function(){
		clearTimeout(time);
		var icon = +$(this).text();
		$("#imgNum").find("li").removeClass("onSelect")
			.eq(icon - 1)
			.addClass("onSelect");
		$("#showPic").find("img")
		.hide()
		.stop(true, true)
		.eq(icon - 1)
		.fadeIn("slow");
	}, function(){
		index = +$(this).text() > 4 ? 1 : parseInt($(this).text()) + 1;
		time = setTimeout("showing(" + index + ")", 3000);
	});
});


$(function(){
			var page = 1;
			var i = 3;
			$("span.RButton").click(function(){
				var $parent = $(this).parents("div#EIPic");
				
				var $show = $parent.find("div.picContList");
				var $picCont = $parent.find("div.picCont");
				var vWidth = $picCont.width();
				console.log(vWidth);
				var len = $show.find("li").length;
				console.log();
				if(	!$show.is(":animated")	){
					if(	page == i	){
						$show.animate({left: '0px'}, "fast");
						page = 1;
					}	else	{
						$show.animate({left: '-=' + vWidth / 5}, "slow");
						page++;
					}
				}
			});
			$("span.LButton").click(function(){
				var $parent = $(this).parents("div#EIPic");
				var $show = $parent.find("div.picContList");
				var $picCont = $parent.find("div.picCont");
				var vWidth = $picCont.width();
				var len = $show.find("li").length;
				if(	!$show.is(":animated")	){
					if(	 page == 1	){
						$show.animate({left: '-=' + (vWidth / 5) * 2}, "fast");
						page = i;
					}	else	{
						$show.animate({left: '+=' + vWidth / 5}, "slow");
						page--;
					}
				}
			});
		});