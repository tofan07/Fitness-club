const togglePopups = () => {
	const clubsList = document.querySelector('.clubs-list>ul'),
		freeVisitForm = document.getElementById('free_visit_form'),
		callbackForm = document.getElementById('callback_form'),
		giftForm = document.getElementById('gift'),
		fixedGift = document.querySelector('.fixed-gift'),
		mobileMenu = document.querySelector('.popup-menu');

	document.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.open-popup')) {
			freeVisitForm.style.display = 'block';
		}

		if (target.matches('.callback-btn') &&
		!target.closest('#footer_form')) {
			callbackForm.style.display = 'block';
		}

		if (target.closest('.fixed-gift')) {
			giftForm.style.display = 'block';
			fixedGift.remove();
		}

		if (target.matches('.overlay') ||
			target.matches('button.close-btn') ||
			target.closest('.close-form')) {

			target.closest('.popup').style.display = 'none';
		}

		if (target.closest('.club-select')) {
			clubsList.style.display === 'block' ? clubsList.style.display = 'none' :
				clubsList.style.display = 'block';
		} else {
			clubsList.style.display = 'none';
		}

		if (target.matches('.menu-button>img')) {
			mobileMenu.style.display = 'flex';
		} else if (target.matches('a')) {
			mobileMenu.style.display = 'none';
		}
		if (target.closest('.close-menu-btn')) {
			mobileMenu.style.display = 'none';
		}
	});
};

export default togglePopups;
