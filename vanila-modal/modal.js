const modals = document.querySelectorAll('[data-modal]');

modals.forEach(function (trigger) {
	trigger.addEventListener('click', function (event) {
		event.preventDefault();
		const modal = document.getElementById(trigger.dataset.modal);
		modal.classList.add('open');
		const exits = modal.querySelectorAll('.modal-exit');
		exits.forEach(function (exit) {
			exit.addEventListener('click', function (event) {
				event.preventDefault();
				modal.classList.remove('open');
			});
		});
	});
});

const modal = document.getElementById('modal');
document.addEventListener('keydown', function (event) {
	let isOpen = modal.classList.contains('open');
	let keyCode = event.keyCode;
	if (keyCode === 27 && isOpen) {
		modal.classList.remove('open');
	}
});
