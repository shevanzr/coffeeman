window.onload = function () {
	$('.preloader').addClass('loaded_hiding');
	$('.before_loading').removeClass('before_loading');
	window.setTimeout(function () {
		$('.preloader').removeClass('loaded_hiding');
		$('.preloader').addClass('loaded');
		$('.mobile_menu').addClass('mobile_transition');
	}, 1000);
}

function change_menu(e) {
	event.preventDefault()
	$('.menu_btn').toggleClass('menu_active');
	$('.mobile_menu').toggleClass('mobile_menu_active');
}

function open_slider_1() {
	if( $('.slider_item-1').hasClass('slider_item-active') == false ) {
		$('.slider_item-1').html('<span>Архів пройдених ігор</span> <span class="slider_text">Для того, щоб спростити пошук відео (стрімів) з проходженням тієї чи іншої гри, я зробив цей розділ. Просто натискайте "перейти" і матимете список ігор з активним переходом одразу на цілий список відтворення на Youtube.</span> <a href="archive" class="a_slider_button"><div class="slider_button">Перейти</div></a>');
		$('.slider_item-2').html('<span>Команди NightBot\'а</span>');
		$('.slider_item-3').html('<span>Що таке Patreon?</span>');
		$('.slider_item-4').html('<span>Де дивитись стріми?</span>');
		$('.slider_item-1').addClass('slider_item-active');
		$('.slider_item-2').removeClass('slider_item-active');
		$('.slider_item-3').removeClass('slider_item-active');
		$('.slider_item-4').removeClass('slider_item-active');
	}
}

function open_slider_2() {
	if( $('.slider_item-2').hasClass('slider_item-active') == false ) {
		$('.slider_item-1').html('<span>Архів пройдених ігор</span>');
		$('.slider_item-2').html('<span>Команди NightBot\'а</span> <span class="slider_text">Тут зібрані усі команди для NightBot на каналі COFFEEMAN_UNC_UA!</span> <a href="nightbot" class="a_slider_button"><div class="slider_button">Перейти</div></a>');
		$('.slider_item-3').html('<span>Що таке Patreon?</span>');
		$('.slider_item-4').html('<span>Де дивитись стріми?</span>');
		$('.slider_item-2').addClass('slider_item-active');
		$('.slider_item-1').removeClass('slider_item-active');
		$('.slider_item-3').removeClass('slider_item-active');
		$('.slider_item-4').removeClass('slider_item-active');
	}
}

function open_slider_3() {
	if( $('.slider_item-3').hasClass('slider_item-active') == false ) {
		$('.slider_item-1').html('<span>Архів пройдених ігор</span>');
		$('.slider_item-2').html('<span>Команди NightBot\'а</span>');
		$('.slider_item-3').html('<span>Що таке Patreon?</span> <span class="slider_text">PATREON - це місце де можна більш "тісно" спілкуватися зі справжніми фанами моєї творчості на Youtube та Twitch. Я дуже хочу розробити дизайн для "мерчу" (друкована та сувенірна продукція). Також хочу дарувати ігри своїм підписникам та глядачам. Для цього всього потрібні фінанси.</span> <a href="https://www.patreon.com/coffeeman_unc_ua" class="a_slider_button"><div class="slider_button">Перейти</div></a>');
		$('.slider_item-4').html('<span>Де дивитись стріми?</span>');
		$('.slider_item-3').addClass('slider_item-active');
		$('.slider_item-2').removeClass('slider_item-active');
		$('.slider_item-1').removeClass('slider_item-active');
		$('.slider_item-4').removeClass('slider_item-active');
	}
}

function open_slider_4() {
	if( $('.slider_item-4').hasClass('slider_item-active') == false ) {
		$('.slider_item-1').html('<span>Архів пройдених ігор</span>');
		$('.slider_item-2').html('<span>Команди NightBot\'а</span>');
		$('.slider_item-3').html('<span>Що таке Patreon?</span>');
		$('.slider_item-4').html('<span>Де дивитись стріми?</span> <span class="slider_text">З першого червня COFFEEMAN перейшов на стрімінгову платформу "Twitch", тож Ви можете дивитись стрім, клацнувши на кнопку нижче!</span> <a href="https://www.twitch.tv/coffeeman_unc_ua" class="a_slider_button"><div class="slider_button">Перейти</div></a>');
		$('.slider_item-4').addClass('slider_item-active');
		$('.slider_item-2').removeClass('slider_item-active');
		$('.slider_item-3').removeClass('slider_item-active');
		$('.slider_item-1').removeClass('slider_item-active');
	}
}

$('.slider').mouseleave(function() {
	$('.slider_item-1').html('<span>Архів пройдених ігор</span>');
	$('.slider_item-2').html('<span>Команди NightBot\'а</span>');
	$('.slider_item-3').html('<span>Що таке Patreon?</span>');
	$('.slider_item-4').html('<span>Де дивитись стріми?</span>');
	$('.slider_item-active').removeClass('slider_item-active');
});
