let txtEmail = document.querySelector('#txtEmail');
let dangerIcon = document.querySelector('#dangerIcon');
let dangerText = document.querySelector('#dangerText');
let form = document.querySelector('#form');

console.log(txtEmail, dangerIcon, dangerText, form);

form.addEventListener('submit', (e) => {
  if(txtEmail.validity.typeMismatch){
    e.preventDefault();
    dangerIcon.style.opacity = 1;
    dangerText.style.opacity = 1;
  } else {
    dangerIcon.style.opacity = 0;
    dangerText.style.opacity = 0;
  }
});