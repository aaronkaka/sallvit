$(document).ready(function() {

    var slideAction = function () {
        $("#panel").slideToggle("slow");
        $(".btn-slide").toggleClass("active");
    };

    // Slide the notification into view immediately on page load
    slideAction();

	$(".btn-slide").click(function(){
        slideAction();
        return false;
	});
	 
});