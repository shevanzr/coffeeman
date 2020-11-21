window.onload = function () {
	$('.preloader').addClass('loaded_hiding');
	$('.before_loading').removeClass('before_loading');
	window.setTimeout(function () {
		$('.preloader').removeClass('loaded_hiding');
		$('.preloader').addClass('loaded');
	}, 600);
}

function change_menu() {
	$('.menu_btn').toggleClass('menu_active');
}