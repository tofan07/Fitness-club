const gallerySlider = () => {
	const slider = document.querySelector('.gallery-slider'),
		slide = slider.querySelectorAll('.slide');

	let currentSlide = 0,
		interval;

	const createDotsWrap = () => {
		const dotsWrap = document.createElement('ul');

		dotsWrap.classList.add('dots-wrapper');

		slider.append(dotsWrap);

		return dotsWrap;
	};

	const createBtns = () => {
		const btnPrev = document.createElement('button');
		const btnNext = btnPrev.cloneNode();

		btnPrev.classList.add('btn-prev', 'gallery-slider-btn');
		btnNext.classList.add('btn-next', 'gallery-slider-btn');

		slider.append(btnPrev, btnNext);

	};
	createBtns();

	const prevSlide = (elem, index, strClass) => {
		elem[index].classList.remove(strClass);
	};

	const nextSlide = (elem, index, strClass) => {
		elem[index].classList.add(strClass);
	};

	const addDots = () => {
		const dotsWrap = createDotsWrap();
		slide.forEach(() => {
			const dot = document.createElement('li');
			dot.classList.add('dot');
			dotsWrap.append(dot);
		});
		dotsWrap.querySelector('.dot').classList.add('dot-active');
	};

	addDots();

	const dot = document.querySelectorAll('.dot');

	const applyStyle = () => {

		const style = document.createElement('style');

		style.id = 'gallery-slider-style';

		style.textContent = `
			.gallery-slider {
				position: relative;
				height: 401px;
			}
			.gallery-slider .slide {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				opacity: 0;
				transition: opacity 0.5s;
			}
			.gallery-slider .slide-active {
				opacity: 1;
				transition: opacity 0.5s;
			}
			.btn-next {
				position: absolute;
				background: #ffd11a url('./images/arrow-right.png') no-repeat center;
				width: 35px;
				height: 35px;
				z-index: 10;
				top: 133px;
				right: 0px;
				border-radius: 50%;
				border: none;
				outline: none;
				cursor: pointer;
			}

			.btn-prev {
				position: absolute;
				background: #ffd11a url('./images/arrow-left.png') no-repeat center;
				width: 35px;
				height: 35px;
				z-index: 10;
				top: 133px;
				left: 0;
				border-radius: 50%;
				border: none;
				outline: none;
				cursor: pointer;
			}
			.gallery-slider-btn {
				top: 50%;
				transform: translateY(-50%)
			}
			.dots-wrapper {
				position: absolute;
				bottom: 20px;
				left: 0;
				right: 0;
				display: flex;
				justify-content: center;
			}
			.dot {
				width: 25px;
				height: 5px;
				z-index: 10;
				background-color: #ffffff;
				margin: 0 3px 0 3px;
				cursor: pointer;
				border-radius: 2px;
			}
			.dot-active {
				background-color: #ffd11a;
			}
		`;

		document.head.append(style);
	};

	applyStyle();

	const autoPlaySlide = () => {

		prevSlide(slide, currentSlide, 'slide-active');
		prevSlide(dot, currentSlide, 'dot-active');
		currentSlide++;

		if (currentSlide === slide.length) {
			currentSlide = 0;
		}
		nextSlide(slide, currentSlide, 'slide-active');
		nextSlide(dot, currentSlide, 'dot-active');

	};

	const startSlide = (time = 1500) => {
		interval = setInterval(autoPlaySlide, time);
	};

	const stopSlide = () => {
		clearInterval(interval);
	};


	slider.addEventListener('click', event => {
		event.preventDefault();

		const target = event.target;

		if (!target.matches('.gallery-slider-btn, .dot')) {
			return;
		}

		prevSlide(slide, currentSlide, 'slide-active');
		prevSlide(dot, currentSlide, 'dot-active');

		if (target.matches('.btn-next')) {
			currentSlide++;
		} else if (target.matches('.btn-prev')) {
			currentSlide--;
		} else if (target.matches('.dot')) {
			dot.forEach((elem, index) => {
				if (elem === target) {
					currentSlide = index;
				}
			});
		}

		if (currentSlide >= slide.length) {
			currentSlide = 0;
		}

		if (currentSlide < 0) {
			currentSlide = slide.length - 1;
		}

		nextSlide(slide, currentSlide, 'slide-active');
		nextSlide(dot, currentSlide, 'dot-active');

	});

	slider.addEventListener('mouseover', event => {
		const target = event.target;
		if (target.matches('.gallery-slider-btn') ||
		target.matches('.dot')) {
			stopSlide();
		}
	});

	slider.addEventListener('mouseout', event => {
		const target = event.target;
		if (target.matches('.gallery-slider-btn') ||
		target.matches('.dot')) {
			startSlide();
		}
	});

	slide[0].classList.add('slide-active');
	startSlide(3000);
};

export default gallerySlider;
