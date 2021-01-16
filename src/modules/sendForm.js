/* eslint-disable no-use-before-define */
const sendForm = () => {
	const allForms = document.querySelectorAll('form'),
		personalData = document.querySelectorAll('p.personal-data'),
		thanksPopup = document.getElementById('thanks'),
		loader = `
        <div>
            <div class='sk-fading-circle'>
                <div class='sk-circle sk-circle-1'></div>
                <div class='sk-circle sk-circle-2'></div>
                <div class='sk-circle sk-circle-3'></div>
                <div class='sk-circle sk-circle-4'></div>
                <div class='sk-circle sk-circle-5'></div>
                <div class='sk-circle sk-circle-6'></div>
                <div class='sk-circle sk-circle-7'></div>
                <div class='sk-circle sk-circle-8'></div>
                <div class='sk-circle sk-circle-9'></div>
                <div class='sk-circle sk-circle-10'></div>
                <div class='sk-circle sk-circle-11'></div>
                <div class='sk-circle sk-circle-12'></div>
            </div>
		</div>
		`,
		statusMessage = document.createElement('div'),
		style = document.createElement('style');

	const applyStyle = () => {
		style.id = 'forms-style';
		style.textContent = `
			.invalid::placeholder {
				color: tomato;
			}
		`;
		document.head.append(style);
	};

	applyStyle();

	document.addEventListener('input', event => {
		let target = event.target;
		target = target.closest('input');
		if (target.name === 'name') {
			target.value = target.value.replace(/[^а-я]/i, '');
		}
	});

	const createError = () => {

		personalData.forEach(item => {
			const err = document.createElement('div');

			err.classList.add('required-error');
			err.style.color = 'tomato';

			item.append(err);
		});

		// inputName.forEach(item => {
		// 	const err = document.createElement('label');

		// 	err.classList.add('name-error');
		// 	err.style.color = 'tomato';
		// 	item.insertAdjacentElement('afterend', err);
		// });

	};

	createError();

	allForms.forEach(form => {
		form.querySelector('button[type=submit]').addEventListener('click', event => {
			const inputName = form.querySelector('input[name=name]'),
				inputCheckbox = form.querySelector('input[type=checkbox]'),
				inputPhone = form.querySelector('input[name=phone]');

			if (form.id === 'footer_form') {
				return;
			}

			if (inputCheckbox &&
			!inputCheckbox.checked) {
				event.preventDefault();
				form.querySelector('.required-error').textContent = 'Согласие обязательно';
			} else {
				form.querySelector('.required-error').textContent = '';
			}

			if (inputName.value.trim() === '') {
				inputName.placeholder = 'Имя обязательно';
				inputName.classList.add('invalid');
			} else {
				inputName.placeholder = 'Ваше имя...';
				inputName.classList.remove('invalid');
			}

			if (inputPhone.value.trim() === '') {
				inputPhone.placeholder = 'Телефон обязателен';
				inputPhone.classList.add('invalid');
			} else {
				inputPhone.placeholder = 'Ваше номер телефона...';
				inputPhone.classList.remove('invalid');
			}
		});
	});

	document.addEventListener('submit', event => {
		event.preventDefault();

		let target = event.target;
		target = target.closest('form');

		target.appendChild(statusMessage);
		statusMessage.innerHTML = loader;

		const formData = new FormData(target);
		const body = {};

		formData.forEach((val, key) => {
			body[key] = val;
		});

		postData(body)
			.then(showSuccess)
			.then(target.reset())
			.catch(showError)
			.finally(() => {
				target.closest('.popup').style.display = 'none';
			});

	});

	const showSuccess = response => {
		if (response.status !== 200) {
			throw new Error('network status not 200!');
		}

		statusMessage.remove();
		thanksPopup.style.display = 'block';

	};

	const showError = () => {
		statusMessage.remove();

		const thanksContent = thanksPopup.querySelector('.form-content'),
			thanksTitle = thanksContent.querySelector('h4'),
			thanksText = thanksContent.querySelector('p');

		thanksPopup.style.display = 'block';
		thanksTitle.textContent = 'ошибка!';
		thanksText.textContent = 'При отправке произошла ошибка. Попробуйте повторить позднее.';
	};

	const postData = body => fetch('./server.php', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	});


};

export default sendForm;
