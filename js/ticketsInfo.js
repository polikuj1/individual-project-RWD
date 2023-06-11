// 服務條款、下一步的關聯禁用與否
const policy = document.querySelector('.policy input');
const next_btn = document.querySelector('.next_btn');
policy.onclick = function(e) {
  console.log(e.target.checked);
  let txt = [];
  ticketsInput.forEach(item => {
    console.log(typeof item.value);
    if(item.value !== '0') {
      txt.push(true);
    } else {
      txt.push(false);
    }
  })
  if(e.target.checked) {
    next_btn.disabled = false;
    next_btn.style.cursor = 'pointer';
  } else {
    next_btn.disabled = true;
    next_btn.style.cursor = 'not-allowed';
  }
}

// 購票數量
const buttons = document.querySelectorAll('.content span:nth-of-type(3)');
// console.log(buttons);
const ticketsInput = document.querySelectorAll('.content input');
// console.log(ticketsInput);
let allCount = {
  one: '',
  two: '',
  three: '',
};
let tkType = {
  one: '',
  two: '',
  three: '',
}
buttons.forEach((item,index) => {
  let count = 0;
  item.addEventListener('click', (e) => {
    let ticketType = e.target.parentNode.parentNode.firstElementChild.textContent;
    // 將點到的票券名稱放到物件中
    switch (ticketType) {
      case '預售票':
        tkType.one = ticketType;
        break;
      case '早鳥票':
        tkType.two = ticketType;
        break;
      case '愛心票':
        tkType.three = ticketType;
        break;
    }
    if(e.target.className === 'plus') {
      ticketsInput.forEach((item, id) => {
        if(id === index) {
          count++
          item.value = count;
          // 點票券數量時，將數量放到物件
          switch (ticketType) {
            case '預售票':
              allCount.one = count;
              break;
            case '早鳥票':
              allCount.two = count;
              break;
            case '愛心票':
              allCount.three = count;
              break;
          }
        }
      })
    }
    if(e.target.className === 'minus') {
      ticketsInput.forEach((item, id) => {
        if(id === index) {
          if( count === 0) return;
          count--
          item.value = count;
          switch (ticketType) {
            case '預售票':
              allCount.one = count;
              break;
            case '早鳥票':
              allCount.two = count;
              break;
            case '愛心票':
              allCount.three = count;
              break;
          }
        }
      })
    }
    if(count !== 0) {
      document.querySelector('.warn_txt').textContent = '';
    }
    console.log(allCount);
    // 將票券、數量物件存放到本地端的暫存，但是要全部轉字串
    localStorage.setItem('allCount', JSON.stringify(allCount));
    localStorage.setItem('ticketType', JSON.stringify(tkType));
  })
})


// 下一步的判定

next_btn.onclick = function() {
  console.log(123);
  let txt = [];
  ticketsInput.forEach(item => {
    console.log(typeof item.value);
    if(item.value !== '0') {
      txt.push(true);
    } else {
      txt.push(false);
    }
  })
  if(!txt[0] && !txt[1] && !txt[2]) {
    document.querySelector('.warn_txt').textContent = '請選擇票券數量';
  } else {
    ticketsInput.forEach(item => {
      item.value = '0';
    })
    document.querySelector('.warn_txt').textContent = '';
    policy.checked = false;
    next_btn.textContent = '查詢空位中...';
    setTimeout(function() {
      location.href= "ticketsForm.html";
    },1000)
  }
}