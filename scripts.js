window.onload = function () {
	$('.preloader').addClass('loaded_hiding');
	$('.before_loading').removeClass('before_loading');
	window.setTimeout(function () {
		$('.preloader').removeClass('loaded_hiding');
		$('.preloader').addClass('loaded');
		$('.mobile_menu').addClass('mobile_transition');
	}, 1000);
}

function change_menu() {
	$('.menu_btn').toggleClass('menu_active');
	$('.mobile_menu').toggleClass('mobile_menu_active');
}
