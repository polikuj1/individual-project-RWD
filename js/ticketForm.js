// 顯示活動詳細資料
const detail = document.querySelector('.detail_info > span');
const detail_arrow = document.querySelector('.detail_info > span i')
const detail_ul = document.querySelector('.detail_info ul');
detail.onclick = function(e) {
  detail_ul.classList.toggle('show');
  detail_arrow.classList.toggle('rotate');
}

// 表單驗證
const formInput = document.querySelectorAll('form input');
const form = document.querySelector('form');
const submit = document.querySelector('.submit_btn');
// console.log(form);

submit.onclick = function(e) {
  form.children[1].value = '';
  form.children[4].value = '';
  form.children[7].value = '';
  submit.textContent = '頁面跳轉中...';
    setTimeout(function() {
      location.href= "ticketPay.html";
    },500)
}
let userName = '';
let email = '';
let tel = '';
form.children[1].addEventListener('blur', (e) => {
  if(e.target.value !== '') {
    userName = e.target.value;
    formFinish();
  } else {
    document.querySelector('.name').textContent = '此為必填欄位';
    form.children[1].focus();
  }
})
form.children[1].addEventListener('input', (e) => {
  if(e.target.value !== '') {
    userName = e.target.value;
    document.querySelector('.name').textContent = '';
    formFinish();
  } else {
    document.querySelector('.name').textContent = '此為必填欄位';
    form.children[1].focus();
    submit.disabled = true;
    submit.style.cursor = 'not-allowed';
  }
})
form.children[4].addEventListener('blur', (e) => {
  if(e.target.value !== '') {
    let regex = /^\w+@\w+\.\w+/i;
    if(regex.test(e.target.value)) {
      console.log('驗證成功');
      document.querySelector('.email').textContent = '';
      email = e.target.value;
      formFinish();
    } else {
      console.log('驗證失敗');
      document.querySelector('.email').textContent = '信箱格式錯誤';
      e.target.focus();
    }
  } else {
    document.querySelector('.email').textContent = '此為必填欄位';
    form.children[4].focus();
  }
})
form.children[4].addEventListener('input', (e) => {
  if(e.target.value !== '') {
    let regex = /^\w+@\w+\.\w+/i;
    if(regex.test(e.target.value)) {
      console.log('驗證成功');
      document.querySelector('.email').textContent = '';
      email = e.target.value;
      formFinish();
    } else {
      console.log('驗證失敗');
      document.querySelector('.email').textContent = '信箱格式錯誤';
      e.target.focus();
      submit.disabled = true;
      submit.style.cursor = 'not-allowed';
    }
  } else {
    document.querySelector('.email').textContent = '此為必填欄位';
    form.children[4].focus();
  }
})
form.children[7].addEventListener('blur', (e) => {
  if(e.target.value !== '') {
    let regex = /^09\d{8}$/;
    if(regex.test(e.target.value)) {
      console.log('驗證成功');
      document.querySelector('.tel').textContent = '';
      tel = e.target.value;
      formFinish();
    } else {
      console.log('驗證失敗');
      document.querySelector('.tel').textContent = '手機格式錯誤';
      e.target.focus();
    }
  } else {
    document.querySelector('.tel').textContent = '此為必填欄位';
    form.children[7].focus();
  }
})
form.children[7].addEventListener('input', (e) => {
  if(e.target.value !== '') {
    let regex = /^09\d{8}$/;
    if(regex.test(e.target.value)) {
      console.log('驗證成功');
      document.querySelector('.tel').textContent = '';
      tel = e.target.value;
      formFinish();
    } else {
      console.log('驗證失敗');
      document.querySelector('.tel').textContent = '手機格式錯誤';
      e.target.focus();
      submit.disabled = true;
      submit.style.cursor = 'not-allowed';
    }
  } else {
    document.querySelector('.tel').textContent = '此為必填欄位';
    form.children[7].focus();
  }
})
function formFinish() {
  if(userName && email && tel) {
    submit.disabled = false;
    submit.style.cursor = 'pointer';
  } else {
    submit.disabled = true;
    submit.style.cursor = 'not-allowed';
  }
}