// 顯示活動詳細資料
const detail = document.querySelector('.detail_info > span');
const detail_arrow = document.querySelector('.detail_info > span i')
const detail_ul = document.querySelector('.detail_info ul');
detail.onclick = function(e) {
  detail_ul.classList.toggle('show');
  detail_arrow.classList.toggle('rotate');
}

// 付款資料驗證
const user_data = document.querySelector('.user_data');
const credit_icon = document.querySelector('.credit_icon');
const credit_number = document.querySelector('.user_data input');
const credit_month = document.querySelector('#expired_month');
const credit_year = document.querySelector('#expired_year');
const credit_lastNum = document.querySelector('#last_num');
const confirm_btn = document.querySelector('.confirm_pay');
const card_radio = document.querySelector('#credit_card');
const atm_radio = document.querySelector('#atm_account');

let creditNum = '';
let lastNum = '';
let span = document.createElement('span');
user_data.insertBefore(span, credit_icon);
span.style.color = 'red';
let span1 = document.createElement('span');
span1.style.color = 'red';
function checkCreditNum(e) {
  let val = e.target.value;
  let regex = /\d{16}/;
  if(val === '') {
    span.textContent = '此欄位不得為空且為數字';
    e.target.focus();
    return
  }
  if(val.length !== 16 || !regex.test(parseInt(val))) {
    span.textContent = '信用卡長度需為16碼數字';
    e.target.focus();
    confirm_btn.disabled = true;
    confirm_btn.style.cursor = 'not-allowed';
    return;
  } else {
    span.textContent = '';
    creditNum = val;
    confirm_btn.disabled = false;
    confirm_btn.style.cursor = 'pointer';
  }
}
credit_number.addEventListener('blur', checkCreditNum);
credit_number.addEventListener('input', checkCreditNum);
function checkLastNum(e) {
  let regex = /\d{3}/;
  if(e.target.value === '') {
    span1.textContent = '此欄位不得為空且為數字';
    credit_lastNum.parentNode.insertBefore(span1, credit_lastNum.nextElementSibling);
    e.target.focus();
    confirm_btn.disabled = true;
    return;
  }
  let val = e.target.value;
  console.log(val.length);
  if(val.length !== 3 || !regex.test(parseInt(val))) {
    span1.textContent = '數字長度只能三碼';
    credit_lastNum.parentNode.insertBefore(span1, credit_lastNum.nextElementSibling);
    e.target.focus();
    confirm_btn.disabled = true;
    confirm_btn.style.cursor = 'not-allowed';
    return;
  } else {
    span1.textContent = '';
    lastNum = val;
  }
  if(lastNum && creditNum) {
    confirm_btn.disabled = false;
    confirm_btn.style.cursor = 'pointer';
  }
}
credit_lastNum.addEventListener('blur', checkLastNum)
credit_lastNum.addEventListener('input', checkLastNum)

atm_radio.addEventListener('click', () => {
  confirm_btn.disabled = false;
  console.log(123);
  confirm_btn.style.cursor = 'pointer';
})
card_radio.addEventListener('click', () => {
  confirm_btn.disabled = true;
  confirm_btn.style.cursor = 'not-allowed';
})


const modal = document.querySelector('.success_modal');
const close_btn = document.querySelector('.success_info .close_btn');
const btn = document.querySelector('.success_info > button');
// 確認繳費按鈕
confirm_btn.addEventListener('click', (e) => {
  credit_lastNum.value = '';
  credit_number.value = '';
  modal.style.display = 'block';
  // location.href = 'tickets.html';
})

close_btn.onclick = function() {
  modal.style.display = 'none';
  location.href = 'tickets.html';
}
btn.onclick = function() {
  modal.style.display = 'none';
  location.href = 'tickets.html';
}


// 將票種、總數量、金額渲染在畫面
window.onload = function() {
  let price = localStorage.getItem('price');
  let allCount = JSON.parse(localStorage.getItem('allCount'));
  let ticketType = JSON.parse(localStorage.getItem('ticketType'));
  document.querySelector('.price').textContent = `TWD$${price}`;
  document.querySelector('.total').textContent = `TWD$${price}`;
  console.log(allCount, ticketType);
  // 取得購買的票券名稱，將它全部組成字串
  let str = '';
  for (const key in ticketType) {
    if(ticketType[key] !== '') {
      str += `${ticketType[key]}、`
    }
  }
  let newStr = str.substr(0, str.length-1);
  console.log(newStr);
  document.querySelector('.type').textContent = newStr;
  // 算出總購票的張數
  let num = 0;
  for (const key in allCount) {
    console.log(typeof allCount[key]);
    if(allCount[key] !== '') {
      num += allCount[key];
    }
  }
  console.log(num);
  document.querySelector('.num').textContent = `X ${num}`;
}