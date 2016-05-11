$(document).ready(function(){
	$("h1").click(function(){
		$(this).hide();
	});

	$("#PSM").click(function(){
		if($(this).attr("src") == "public/images/psm_off.png"){
			$(this).attr("src", "public/images/psm_on.png");
		} else {
			$(this).attr("src", "public/images/psm_off.png");
		}
	});
});