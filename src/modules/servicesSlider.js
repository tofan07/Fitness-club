const servicesSlider = () => {
	const slider = document.querySelector('.services-slider'),
		services = document.getElementById('services'),
		servicesWrap = services.querySelector('.wrapper'),
		slides = services.querySelectorAll('.slide'),
		itemWidth = 234,
		slidesToShow = 5,
		itemsCount = slides.length;

	let position = 0,
		wrapWidth = itemWidth * 5;

	const createBtns = () => {
		const btnPrev = document.createElement('button');
		const btnNext = btnPrev.cloneNode();

		btnPrev.classList.add('btn-prev');
		btnNext.classList.add('btn-next');

		servicesWrap.append(btnPrev, btnNext);

		return { btnNext, btnPrev };
	};

	const btns = createBtns(),
		btnNext = btns.btnNext,
		btnPrev = btns.btnPrev;

	const applyStyles = (slideWidth, wrapWidth) => {
		servicesWrap.style.cssText = `
			overflow: hidden;
			padding-left: 0;
			padding-right: 0;
			position: relative;
			max-width: ${wrapWidth}px;
		`;
		slider.style.cssText = `
			padding-left: 0;
			padding-right: 0;
			transition: transform 0.3s;
			will-change: transform;
		`;
		slides.forEach(slide => {
			slide.style.cssText = `
			min-width: ${slideWidth}px;
			margin: 0;
		`;
		});

		btns.btnNext.style.cssText = `
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
		`;

		btns.btnPrev.style.cssText = `
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
		`;
	};

	const sliderAdaptive = (...mediaQuery) => {
		const docWidth = document.documentElement.clientWidth;
		mediaQuery.forEach(query => {

			if (query.media === "(max-width: 500px)") {
				wrapWidth = query.matches ? itemWidth * 1 : itemWidth * 2;

			} else if (query.media === "(max-width: 768px)" && docWidth > 500) {
				wrapWidth = query.matches ? itemWidth * 2 : itemWidth * 3;

			} else if (query.media === "(max-width: 992px)" && docWidth > 768) {
				wrapWidth = query.matches ? itemWidth * 3 : itemWidth * 4;

			} else if (query.media === "(max-width: 1200px)" && docWidth > 992) {
				wrapWidth = query.matches ? itemWidth * 4 : itemWidth * 5;

			} else if (query.matches && query.media === "(min-width: 1201px)") {
				wrapWidth = itemWidth * 5;
			}
		});

		applyStyles(itemWidth, wrapWidth);
	};

	const checkWidth = () => {
		const media1200 = window.matchMedia("(max-width: 1200px)");
		const media992 = window.matchMedia("(max-width: 992px)");
		const media768 = window.matchMedia("(max-width: 768px)");
		const media500 = window.matchMedia("(max-width: 500px)");
		const media = window.matchMedia("(min-width: 1201px)");

		sliderAdaptive(media500, media768, media992, media1200, media);

		media1200.addEventListener('change', sliderAdaptive);
		media992.addEventListener('change', sliderAdaptive);
		media768.addEventListener('change', sliderAdaptive);
		media500.addEventListener('change', sliderAdaptive);
	};

	checkWidth();

	const checkBtns = () => {
		btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
		btnNext.style.opacity = btnNext.disabled ? 0.5 : 1;

		btnPrev.disabled = position === 0;
		btnPrev.style.opacity = btnPrev.disabled ? 0.5 : 1;
	};

	checkBtns();

	services.addEventListener('click', event => {
		const target = event.target;
		if (target) {
			if (target.matches('.btn-next')) {
				position -= itemWidth;
			}
			if (target.matches('.btn-prev')) {
				position += itemWidth;
			}

			slider.style.transform = `translateX(${position}px)`;
			checkBtns();
		}
	});

};

export default servicesSlider;
