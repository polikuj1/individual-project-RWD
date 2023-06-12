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
const sign_btn = document.querySelector('.sign_wrap form button');
const txt = document.querySelector('.login_success .txt');

let span = document.createElement('span');
span.style.padding = '0px';
span.style.color = 'red';
userName.parentNode.insertBefore(span, login_btn);
function checkForm() {
  if(userName.value === '' || userPsw.value === '') {
    span.textContent = '請填寫信箱和密碼';
  } else {
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
sign_btn.addEventListener('click', () => {
  txt.textContent = '註冊成功';
  modal.style.left = '0%';
})