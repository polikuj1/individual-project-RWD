const cd = document.querySelectorAll('.cd .pic img');
const cdTitle = document.querySelectorAll('.cd .title');
const progress_container = document.querySelector('.progress_container');
const progress_current = document.querySelector('.current_time');
cd.forEach(item => {
  item.addEventListener('click', cdRotate);
})
let angle = [0,0,0,0,0];
let isRotate = 0;
let interval;
let isPlay = 0;
let cdOrder;
function cdRotate(e) {
  const id = e.target.dataset.cd;
  cd.forEach((item,index) => {
    if(item.dataset.cd === id) {
      if (cdOrder !== index) {
        stopMusic(cdOrder); // 停止當前正在播放的 CD
        clearInterval(interval);
        isRotate = 0;
      }
      cdOrder = index;
      // console.log(cdOrder);
      isPlay = 1;
      txtHover(index);
      progress_container.style.display = 'block';
      if(isRotate === 0) {
        playMusic(index);
        // console.log('判斷是否正在旋轉');
        isRotate = 1;
        interval = setInterval(function() {
          angle[index] += 0.5;
          if(angle[index] > 360) {angle[index] = 0};
          item.style.transform = `rotate(${angle[index]}deg)`;
        },10);
      } else {
        // console.log(angle);
        clearInterval(interval);
        isRotate = 0;
        // console.log('解除定時');
        isPlay = 0;
        playMusic(index);
      }
    } else {
      
    }
  })
}


// const src = ['Vaundy', '愛', 'Ado', 'milet', 'YOASOBI'];
const audio = [
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
  {
    audio: document.createElement('audio'),
  },
];
let perProgress;
let playLength = [0,0,0,0,0];
let totalDuration;
audio.forEach((item,index) => {
  item.audio.src = `playlist/${index + 1}.mp3`;
  item.audio.addEventListener('ended', () => {
    clearInterval(interval);
    playLength[cdOrder] = 0;
    isRotate = 0;
    // console.log('解除定時');
    isPlay = 0;
  })
  item.audio.addEventListener('playing', () => {
    if(cdOrder === index) {
      // console.log(item.audio.duration,'總秒數');
      totalDuration = item.audio.duration;
      perProgress = (100 / totalDuration);
      // console.log(perProgress,'每秒要跑得趴數');
    }
  })
  item.audio.addEventListener('pause', () => {
    console.log(item.audio.currentTime);
  })
  item.audio.addEventListener('timeupdate', () => {
    if (cdOrder === index) {
      playLength[cdOrder] = (item.audio.currentTime / totalDuration) * 100;
      progress_current.style.width = `${playLength[cdOrder]}%`;
    }
  })
})

function playMusic(index) {
  // console.log(index);
  audio.forEach((item, order) => {
    // console.log(item,order);
    if(index === order) {
      if(isPlay) {
        console.log("開始撥放");
        item.audio.play();
      } else {
        console.log("終止播放");
        item.audio.pause();
      }
    } else {
      item.audio.pause();
    }
  }) 
}

function txtHover(index) {
  cdTitle.forEach((item, order) => {
    if(index === order) {
      item.classList.add('title_hover');
    } else {
      item.classList.remove('title_hover');
    }
  })
}

progress_container.addEventListener('click', setProgress);
function setProgress(e) {
  const width = this.clientWidth; 
  // console.log(width);
  const clickX = e.pageX;
  // console.log(clickX);
  audio[cdOrder].audio.currentTime = clickX / width * totalDuration;
  playLength[cdOrder] = `${clickX / width * 100}`;
  progress_current.style.width = `${playLength[cdOrder]}%`;
  // console.log(playLength[cdOrder]);
}


function stopMusic(index) {
  if (index !== undefined && index >= 0 && index < audio.length) {
    console.log('停止播放');
    audio[index].audio.pause();
    // audio[index].audio.currentTime = 0;
  }
}