const headSlider = () => {
	const slider = document.querySelector('.main-slider'),
		slide = slider.querySelectorAll('.slide');

	let currentSlide = 0;

	const nextSlide = (slides, index) => {
		slides.forEach(slide => {
			slide.style.display = 'none';
		});
		slides[index].style.display = 'flex';
	};

	const autoPlaySlide = () => {
		currentSlide++;
		if (currentSlide === slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide);

	};

	const startSlide = (time = 1500) => {
		setInterval(autoPlaySlide, time);
	};

	startSlide(4000);
};

export default headSlider;
