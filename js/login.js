// 登入、註冊區塊切換
const tab = document.querySelector('.tab');
const login_wrap = document.querySelector('.login_wrap');
const sign_wrap = document.querySelector('.sign_wrap');
tab.onclick = function (e) {
  // console.log(123);
  if(e.target.textContent === '登入') {
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
