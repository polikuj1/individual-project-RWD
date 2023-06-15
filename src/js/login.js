// 登入、註冊區塊切換
const tab = document.querySelector('.tab');
const login_wrap = document.querySelector('.login_wrap');
const sign_wrap = document.querySelector('.sign_wrap');
tab.onclick = function (e) {
  // console.log(123);
  if(e.target.textContent === '登入') {
    console.log('切換到登入');
    login_wrap.classList.add('show');
    sign_wrap.classList.remove('show');
    tab.children[0].classList.add('active');
    tab.children[1].classList.remove('active');
  } else {
    login_wrap.classList.remove('show');
    sign_wrap.classList.add('show');
    tab.children[0].classList.remove('active');
    tab.children[1].classList.add('active');
  }
}

// 登入表單驗證
const userName = document.querySelector('input[type="text"]');
const userPsw = document.querySelector('input[type="password"]');
const rememberPsw = userPsw.nextElementSibling.firstElementChild;
const login_btn = userPsw.nextElementSibling.nextElementSibling;
const modal = document.querySelector('.login_success');
const social_btns = document.querySelectorAll('.social_login button');
const close_btn = modal.firstElementChild.firstElementChild.nextElementSibling;
const txt = document.querySelector('.login_success .txt');

let span = document.createElement('span');
span.style.padding = '0px';
span.style.color = 'red';
userName.parentNode.insertBefore(span, login_btn);
function checkForm() {
  if(userName.value === '' || userPsw.value === '') {
    span.textContent = '請填寫信箱和密碼';
  } else {
    userName.value = '';
    userPsw.value = '';
    span.textContent = '';
    modal.style.left = '0%';
  }
}
login_btn.addEventListener('click',checkForm);

social_btns.forEach(item => {
  item.addEventListener('click', (e) => {
    modal.style.left = '0%';
  })
})

close_btn.addEventListener('click', (e) => {
  txt.textContent = '登入成功';
  modal.style.left = '-100%';
  if(login_wrap.classList.contains('show') && e.target.parentNode.firstElementChild.textContent === '登入成功') {
    location.href = 'tickets.html';
  } else {
    login_wrap.classList.add('show');
    sign_wrap.classList.remove('show');
    tab.children[0].classList.add('active');
    tab.children[1].classList.remove('active');
  }
})

// 註冊表單驗證
const signName = document.querySelector('.sign_wrap input[type="text"]');
const signEmail = document.querySelector('.sign_wrap input[type="email"]');
const signPsw = document.querySelector('.sign_wrap input[type="password"]');
const signDoublePsw = signPsw.parentNode.children[4];
const sign_btn = document.querySelector('.sign_wrap form button');
let hint_txt = document.createElement('span');
hint_txt.style.color = 'red';
hint_txt.style.padding = '0px';
sign_btn.parentNode.insertBefore(hint_txt, sign_btn);

sign_btn.addEventListener('click', () => {
  if(signName.value === '' && signEmail.value === '' && signPsw.value === '' && signDoublePsw.value === '') {
    hint_txt.textContent = '有欄位未填寫';
    return;
  }
  if(signPsw.value !== signDoublePsw.value) {
    hint_txt.textContent = '兩次密碼不一致';
  } else {
    hint_txt.textContent = '';
    txt.textContent = '註冊成功';
    modal.style.left = '0%';
    signName.value = '';
    signEmail.value = '';
    signPsw.value = '';
    signDoublePsw.value = '';
  }
})