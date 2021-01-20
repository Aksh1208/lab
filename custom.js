$(document).ready(function(){
	 
});

$(document).on("click",".arrow-mobile",function(){
	if($(this).hasClass("active")){
		$(this).removeClass("active");
		$(".page-navigation").removeClass("open");
		$(this).find(".downarrow").removeClass("hidegroup");
		$(this).find(".closemobilenav").addClass("hidegroup");
	}else{
		$(this).addClass("active");
		$(".page-navigation").addClass("open");
		$(this).find(".downarrow").addClass("hidegroup");
		$(this).find(".closemobilenav").removeClass("hidegroup");
		$(this).parents(".page-navigation").find(".js-sections a").first().addClass("active");
	}

});