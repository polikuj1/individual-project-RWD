const formInput = document.querySelectorAll('form input');
const form = document.querySelector('form');
const submit = document.querySelector('.submit_btn');
// console.log(form);

submit.onclick = function() {

}
let userName = '';
let email = '';
let tel = '';
// formInput.forEach(item => {
//   item.addEventListener('input', (e) => {
//     if(e.target.id === 'name' && e.target.value !== '') {
//       userName = e.target.value;
//     } else {
//       alert('信箱為必填欄位');
//       return;
//     }
//     if(e.target.id === 'email') {
//       email = e.target.value;
//     }
//     if(e.target.id === 'tel') {
//       tel = e.target.value;
//     }
//   })
// })

form.children[1].addEventListener('blur', (e) => {
  if(e.target.value !== '') {
    userName = e.target.value;
  } else {
    document.querySelector('.name').textContent = '此為必填欄位';
    form.children[1].focus();
  }
})