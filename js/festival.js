const tab = document.querySelector('.tab_list');
const btn_group = document.querySelectorAll('.tab_list button');
const festival = document.querySelectorAll('.festival_group');
// const center_festival = document.querySelector('.center');
// const south_festival = document.querySelector('.south');

tab.addEventListener('click', (e) => {
  if(e.target.nodeName !== 'BUTTON') return;
  const txt = e.target.textContent;
  btn_group.forEach((btn) => {
    if(btn.textContent === txt) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  })
  festival.forEach((festival) => {
    const festival_area = festival.dataset.id;
    if(festival_area === txt) {
      festival.style.display = 'block';
    } else {
      festival.style.display = 'none';
    }
  })
});

const tab_select = document.querySelector('.select_title');
const now_area = document.querySelector('.select_title > span');
const tab_option = document.querySelector('.option');
const arrow = document.querySelector('.select_title .arrow');
tab_select.onclick = function() {
  if(tab_option.style.display === 'block') {
    tab_option.style.display = 'none';
    arrow.style.transform = `rotate(0deg)`;
  } else {
    tab_option.style.display = 'block';
    arrow.style.transform = `rotate(90deg)`;
  }
}

tab_option.addEventListener('click', (e) => {
  let txt = e.target.textContent;
  // now_area.textContent = txt;
  festival.forEach((item) => {
    if(item.dataset.id === txt) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  })
})