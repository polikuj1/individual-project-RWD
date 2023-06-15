const faqTitle = document.querySelectorAll('.faq_block_group li');
// console.log(faqTitle);
const faqAnswer = document.querySelectorAll('.faq_answer_wrap');
// console.log(faqAnswer);
const innerAnswer = document.querySelectorAll('.faq_answer');
const rightArrow = document.querySelectorAll('.faq_question i');
// console.log(rightArrow);

faqTitle.forEach((item) => {
  item.addEventListener('click', slideAnswer);
});
                 
function slideAnswer(e) {
  // console.log(e.target.dataset.id);
  const id = e.target.dataset.id;
  // console.log(id);
  innerAnswer.forEach((item) => {
    if(item.dataset.id === id) {
      // console.log('進入答案');
      let height = item.clientHeight;
      // console.log(height);
      rightArrow.forEach(item => {
        if(item.dataset.id === id) {
          item.classList.toggle('rotate');
        } else {
          item.classList.remove('rotate');
        }
      })
      faqAnswer.forEach(item => {
        if(item.dataset.id === id) {
          // console.log(typeof item.clientHeight);
          switch (item.clientHeight) {
            case 0:
              item.style.paddingBottom = `${height}px`;
              break;
            default:
              item.style.paddingBottom = '0px';
          }
        } else {
          item.style.paddingBottom = '0px';
        }
      })
    }
  })
}