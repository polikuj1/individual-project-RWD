// 倒數計時

const countdown_day = document.querySelector('.countdown_day');
const countdown_hour = document.querySelector('.countdown_hour');
const countdown_minutes = document.querySelector('.countdown_minutes');
const countdown_seconds = document.querySelector('.countdown_seconds');

const now = Math.floor(Date.now()/1000);
const countdownDay = Math.floor(Date.parse(new Date(2023, 4, 5))) / 1000;
const timeGap = countdownDay - now;

function countDown() {
  const now = Math.floor(Date.now()/1000);
  const countdownDay = Math.floor(Date.parse(new Date(2023, 4, 27))) / 1000;
  const timeGap = countdownDay - now;
  const count = {
    day: Math.floor(timeGap / 24 / 3600),
    hour: Math.floor(timeGap / 3600 % 24),
    minutes: Math.floor(timeGap % 3600 / 60),
    seconds: timeGap % 60,
  };
  countdown_day.textContent = `${count.day}天`;
  countdown_hour.textContent = `${count.hour}時`;
  countdown_minutes.textContent = `${count.minutes}分`;
  countdown_seconds.textContent = `${count.seconds}秒`;
}
setInterval(countDown, 1000);



// media
const photo = document.querySelector('.photo_box');
const photo_re = document.querySelector('.photo_re');

setInterval(move,5000);
let distance = 0;
function move() {
  distance += -288;
  photo.style.left = distance + 'px';
  const num = photo.style.left;
  if (num == '-1440px') {
    distance = 1440;
    setTimeout(function() {
      photo.classList.remove('tr');
      setTimeout(function() {
        photo.style.left = `${distance}px`;
      },10)
      setTimeout(function() {
        photo.classList.add('tr');
      },100)
    },4800)
  }
}

setInterval(move1,5000);
let distance_re = 1440;
function move1() {
  distance_re += -288;
  photo_re.style.left = distance_re + 'px';
  const num = photo_re.style.left;
  if (num == '-1440px') {
    distance_re = 1440;
    setTimeout(function() {
      photo_re.classList.remove('tr');
      setTimeout(function() {
        photo_re.style.left = `${distance_re}px`;
      },10)
      setTimeout(function() {
        photo_re.classList.add('tr');
      },100)
    },4800)
  }
}

move();
move1();


const photo_ltr = document.querySelector('#photo_marquee');
const photo_ltr_re = document.querySelector('#photo_marquee1');

setInterval(ltr,5000);
let dis = 0;
function ltr() {
  dis += 288;
  photo_ltr.style.left = dis + 'px';
  const num = photo_ltr.style.left;
  if (num == '1440px') {
    dis = -1440;
    setTimeout(function() {
      photo_ltr.classList.remove('tr');
      setTimeout(function() {
        photo_ltr.style.left = `${dis}px`;
      },10)
      setTimeout(function() {
        photo_ltr.classList.add('tr');
      },100)
    },4800)
  }
}

setInterval(ltr1,5000);
let dis1 = -1440;
function ltr1() {
  dis1 += 288;
  photo_ltr_re.style.left = dis1 + 'px';
  const num = photo_ltr_re.style.left;
  if (num == '1440px') {
    dis1 = -1440;
    setTimeout(function() {
      photo_ltr_re.classList.remove('tr');
      setTimeout(function() {
        photo_ltr_re.style.left = `${dis1}px`;
      },10)
      setTimeout(function() {
        photo_ltr_re.classList.add('tr');
      },100)
    },4800)
  }
}

ltr();
ltr1();

// youtube蓋板
const video = document.querySelector('.video video');
const youtubeModal = document.querySelector('.modal');
const youtubeModal_btn = document.querySelector('.youtube button');

video.addEventListener('click', () => {
  youtubeModal.style.display = 'block';
})

youtubeModal_btn.addEventListener('click', () => {
  youtubeModal.style.display = 'none';
})

// 跑馬燈圖片

const hashtag = document.querySelectorAll('.one_hashtag span');
const random = document.querySelector('.random_pic');
const random_img = document.querySelector('.random_pic img');
// console.log(hashtag);
// console.log(random_img);


let num = 5;
window.addEventListener('mousemove', (e) => {
  let x = e.pageX;
  let y = e.pageY;
  hashtag.forEach((item) => {
    // item.addEventListener('mouseenter', mouseMove);
    item.addEventListener('mousemove', mouseMove);
    item.addEventListener('mouseleave', mouseLeave);
  })
  function mouseMove(e) {
    // const id = parseInt(e.target.dataset.id);
    // console.log(id);
    // hashtag.forEach((item, index) => {
    //   console.log(index);
    //   if(id === index+1) {
    //     item.style.color = 'red';
        
    //   }
    // })
    random_img.src = `./image/${num}.jpg`;
    random.style.display = 'block';
    random.style.top = y + 'px';
    random.style.left = x + 'px';
    // hashtag.style.backGround = 'black';
    // random.style.color = '#fff';
  }
  function mouseLeave() {
    random.style.display = 'none';
  }
})

// goTop按鈕

const topBtn = document.querySelector('.go_top');
const subscribe = document.querySelector('.footer_nav input');
const subscribe_txt = document.querySelector('.footer_nav .subscribe');
// console.log(subscribe_txt);
window.addEventListener("scroll", function(){
 let scrollY = this.scrollY;
 if(scrollY > 1200) {
  topBtn.style.display = 'block';
 } else {
  topBtn.style.display = 'none';
 }
});

subscribe.addEventListener('focus', () => {
  topBtn.style.display = 'none';
})

// subscribe.addEventListener('blur', () => {
//   topBtn.style.display = 'block';
// })

subscribe_txt.addEventListener('click', (e) => {
  e.preventDefault();
  subscribe.focus();
})


// 訂閱成功彈窗

const subBtn = document.querySelector('.close_btn');
const subModal = document.querySelector('.subscribe_modal');
const subSubmit = document.querySelector('.submit');

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
