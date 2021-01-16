const burgerMenu = () => {
	const header = document.querySelector('header'),
		menuWrap = header.querySelector('nav.top-menu'),
		menu = menuWrap.querySelector('.top-menu-list'),
		menuBtn = menuWrap.querySelector('.menu-button');

	const applyStyles = isMobile => {
		const displayMenu = isMobile ? 'none' : 'flex',
			displayMenuBtn = isMobile ? 'block' : 'none';

		menu.style.display = `${displayMenu}`;
		menuBtn.style.display = `${displayMenuBtn}`;

		const menuSticking = () => {
			if (document.documentElement.clientWidth >= 768) {
				header.style.paddingTop = '0px';
				menuWrap.style.cssText = `
				position: static;
			`;
				return;
			}

			if (document.documentElement.scrollTop >= 186) {
				header.style.paddingTop = '60px';
				menuWrap.style.cssText = `
					position: fixed;
					top: 0;
				`;
			} else {
				header.style.paddingTop = '0px';
				menuWrap.style.cssText = `
				position: static;
			`;
			}
		};

		if (isMobile) {
			window.addEventListener('scroll', menuSticking);
		}
	};

	const menuBtnAdaptive = mediaQuery => {
		const isMobile = !!mediaQuery.matches;

		applyStyles(isMobile);
	};

	const checkWidth = () => {
		const media768 = window.matchMedia("(max-width: 768px)");

		menuBtnAdaptive(media768);

		media768.addEventListener('change', menuBtnAdaptive);

	};

	checkWidth();

};

export default burgerMenu;
