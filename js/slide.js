let slidebtn1 = document.querySelector('.btn1');
let slidebtn2 = document.querySelector('.btn2');
let slidebtn3 = document.querySelector('.btn3');

console.log(slidebtn1, slidebtn2, slidebtn3);

slidebtn1.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(0)';
});

slidebtn2.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-100vw)';
});

slidebtn3.addEventListener('click', function() {
  document.querySelector('.slide-list').style.transform = 'translateX(-200vw)';
})