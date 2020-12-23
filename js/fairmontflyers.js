var hash = window.location.hash;
var home_div = "about";

$(document).ready(load_random_header_image());
$(document).ready(hide_divs());

if (hash) {
	hash = hash.substring(1);
	// console.log(hash);
	$(document).ready(change_div(hash));
}
else {
	$(document).ready(show_home_div());
}

$(function() {
	$(document)
		.on('click',  '.local_link',  hide_divs)
		.on('click',  '.local_link',  show_div)
		.on('click',  '.home_link',   show_home_div)

		// .on('click',  '.cancelReservation',   handler_deleteReservation)
		// .on('click',  '#calUpdateFormSubmit', handler_getCalendarJSON)
		// .on('change', '#listBuildingSelect',  handler_listBuildingSelect)
		// .on('click',  '.pagerLink',           handler_pager)
		// .on('change', '#openEvent',           handler_openEvent)
});

function load_random_header_image() {

	number = Math.floor(Math.random() * (6 - 1 + 1)) + 1;

	$(".intro-header").css("background-image", "url(img/backgrounds/bg"+number+".jpg)");

}

function hide_divs() {
	$(".page_div").hide();
}

function show_home_div() {
	change_div(home_div);
}

function show_div() {
	change_div($(this).attr("data-link"));
}

function change_div(location) {

	$(".local_"+location+"_div").show();

}