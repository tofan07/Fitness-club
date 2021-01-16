/* eslint-disable strict */
const smoothScroll = () => {
	const toTop = document.getElementById('totop');

	toTop.style.display = 'none';

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.closest('nav')) {
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

	window.addEventListener('scroll', () => {
		if (document.documentElement.scrollTop >= 740) {
			toTop.style.display = 'block';
		} else {
			toTop.style.display = 'none';
		}

	});
};

export default smoothScroll;
