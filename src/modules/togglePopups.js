const togglePopups = () => {
	const clubsList = document.querySelector('.clubs-list>ul'),
		freeVisitForm = document.getElementById('free_visit_form'),
		callbackForm = document.getElementById('callback_form'),
		giftForm = document.getElementById('gift'),
		fixedGift = document.querySelector('.fixed-gift');


	document.addEventListener('click', event => {
		const target = event.target;

		if (target.matches('.open-popup')) {
			freeVisitForm.style.display = 'block';
		}

		if (target.matches('.callback-btn')) {
			callbackForm.style.display = 'block';
		}

		if (target.closest('.fixed-gift')) {
			giftForm.style.display = 'block';
			fixedGift.remove();
		}

		if (target.matches('.overlay')) {
			target.closest('.popup').style.display = 'none';
		}

		if (target.closest('.close-form')) {
			target.closest('.popup').style.display = 'none';
		}

		if (target.closest('.club-select')) {
			clubsList.style.display === 'block' ? clubsList.style.display = 'none' :
				clubsList.style.display = 'block';
		} else {
			clubsList.style.display = 'none';
		}
	});
};

export default togglePopups;
