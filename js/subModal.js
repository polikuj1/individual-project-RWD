// 訂閱成功彈窗
const subBtn = document.querySelector('.close_btn');
const subModal = document.querySelector('.subscribe_modal');
// console.log(subModal);
const subSubmit = document.querySelector('.submit');
const subscribe = document.querySelector('.footer_nav input');
const subscribe_txt = document.querySelector('.footer_nav .subscribe');

subSubmit.addEventListener('click', () => {
  if(subscribe.value === '') {
    subscribe.placeholder = '信箱未填寫';
    return;
  }
  subModal.style.display = 'block';
})
subBtn.addEventListener('click', () => {
  subModal.style.display = 'none';
  subscribe.value = '';
  subscribe.placeholder = '填寫信箱';
})


subscribe_txt.addEventListener('click', (e) => {
  e.preventDefault();
  subscribe.focus();
})
