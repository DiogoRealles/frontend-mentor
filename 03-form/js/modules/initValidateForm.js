export default function initValidateForm() {
	const form = document.querySelector('#form');
	const inputs = form.querySelectorAll('.input');
	const msgError = form.querySelectorAll('.msgError');
	const btn = form.querySelector('#btn');
	const modal = document.querySelector('#modalContainer');
	const ps = modal.querySelectorAll('p');
	const btnClose = modal.querySelector('#btnClose');

	form.addEventListener('submit', submitForm);

	function submitForm(e) {
		e.preventDefault();

		for (let i = 0; i < inputs.length; i++) {
			if (inputs[i].value == '') {
				msgError[i].classList.add('active');
				inputs[i].addEventListener('keydown', () => {

					if (msgError[i].classList.contains('active')) {
						msgError[i].classList.remove('active');
					}
				});
			}
			if (inputs[0].value != '' && inputs[1].value != '' && inputs[2].value != '' && inputs[3].value != '') {
				ps[0].innerHTML += inputs[0].value;
				ps[1].innerHTML += inputs[1].value;
				ps[2].innerHTML += inputs[2].value;
				ps[3].innerHTML += '***hidden***';
				modal.classList.add('active');
			}
			inputs[i].value = '';
		}
		modal.addEventListener('click', (e) => {
			return modal.classList.remove('active');
		});
	}
}