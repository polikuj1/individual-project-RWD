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

