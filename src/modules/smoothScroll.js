/* eslint-disable strict */
const smoothScroll = () => {
	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('nav.top-menu')) {
			if (target.matches('a')) {
				event.preventDefault();
				const targetId = target.getAttribute('href');
				document.querySelector(targetId).scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		}

		if (target.closest('#totop')) {
			event.preventDefault();
			document.body.scrollIntoView({
				behavior: 'smooth',
				block: 'start'
			});
		}
	});
};

export default smoothScroll;
