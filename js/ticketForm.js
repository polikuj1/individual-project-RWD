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

// 載入完成，渲染票券資料
window.onload = function() {
  // 先將字串轉成物件
  let allCount = JSON.parse(localStorage.getItem('allCount'));
  let ticketType = JSON.parse(localStorage.getItem('ticketType'));
  console.log(allCount, ticketType);
  let total = 0;
  // 判斷這個票券是否有購買
  let type = [];
  // 將有購買的票券名稱存入陣列
  let tkName = [];
  // 將票券的購買數量，跑迴圈分別存入陣列
  let count = [];
  // 按照順序建立票券金額陣列
  let price = [2800, 2200, 1800];
  // 計算票券總金額
  let sum = 0;
  for (const key in ticketType) {
    // console.log(ticketType[key]);
    switch (ticketType[key]) {
      case '預售票':
        type.push(true);
        tkName.push('預售票');
        break;
      case '早鳥票':
        type.push(true);
        tkName.push('早鳥票');
        break;
      case '愛心票':
        type.push(true);
        tkName.push('愛心票');
        break;
      default :
        type.push(false);
        tkName.push('');
    }
  }
  for (const key in allCount) {
    count.push(allCount[key]);
  }
  console.log(count);
  console.log(type);
  // 組HTML渲染用的結構
  let str = '';
  for (let index = 0; index < 3; index++) {
    // 先確定這個票券是否有購買，再去串接字串
    if(tkName[index] !== '') {
      str += `<li>
        <span>${tkName[index]}</span>
        <span>${count[index]}</span>
        <span>TWD$${price[index]}</span>
        </li>
      `;
    }
  }

  console.log(str);
  // 計算票券數量與金額的迴圈
  type.forEach((item,index) => {
    if(index === 0 && item === true) {
      sum += 2800 * count[0];
    }
    if(index === 1 && item === true) {
      sum += 2200 * count[1];
    }
    if(index === 2 && item === true) {
      sum += 1800 * count[2];
    }
  })
  // 創立空元素
  let newElement = document.createElement('div');
  // 改寫結構
  newElement.innerHTML = str;
  // 取得父節點
  let ul = document.querySelector('.totalPrice').parentNode.parentNode;
  // 將創立的元素插入到父節點
  ul.insertBefore(newElement, document.querySelector('.totalPrice').parentNode);
  document.querySelector('.totalPrice').textContent = `TWD$${sum}`;

  localStorage.setItem('price', sum.toString());
}

