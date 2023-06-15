
const pointer = document.querySelector('.pointer');
const philosophy = document.querySelectorAll('.philosophy .txt');
console.log(philosophy);
document.addEventListener('mousemove', function(e) {
  const x = e.pageX;
  const y = e.pageY;
  // console.log(x,y);
  pointer.style.top = y + 'px';
  pointer.style.left = x + 'px';
})
philosophy.forEach(item => {
  item.addEventListener('mouseover', () => {
    console.log(123);
    pointer.style.transform = `scale(20)`;
    pointer.style.background = `#fff`;
    // pointer.style.boxShadow = `0 0 0 100vh #fff`;
  })
  item.addEventListener('mouseleave', () => {
    console.log(123);
    pointer.style.transform = `scale(1)`;
    pointer.style.background = `transparent`;
  })
})