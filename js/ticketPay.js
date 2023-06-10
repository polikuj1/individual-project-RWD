// 顯示活動詳細資料
const detail = document.querySelector('.detail_info > span');
const detail_arrow = document.querySelector('.detail_info > span i')
const detail_ul = document.querySelector('.detail_info ul');
detail.onclick = function(e) {
  detail_ul.classList.toggle('show');
  detail_arrow.classList.toggle('rotate');
}