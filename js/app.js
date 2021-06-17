const menuItems = document.querySelectorAll('.menu a[href^="#"]');

menuItems.forEach(item => {
	item.addEventListener('click', scrollToIdOnClick);
})

function scrollToIdOnClick(event) {
	event.preventDefault();
	const to = getScrollTopByHref(event.target) - 80;
	scrollToPosition(to);

	



}

function scrollToPosition(to) {
	window.scroll({
		top: to - 100,
		behavior: "smooth"
	});

}

function getScrollTopByHref(element) {
	const id = element.getAttribute('href');
	return document.querySelector(id).offsetTop;

}