// $('.gnb-open-btn').click(function() {
//   $('.btn-sidebar').addClass('click');
// });

let openButton = document.querySelector('.gnb-open-btn');
let closeButton = document.querySelector('.x-button');

console.log(openButton, closeButton);

openButton.addEventListener('click', function() {
  document.querySelector('.btn-sidebar').style.transform = 'translateX(300px)';
  document.querySelector('.overlay').classList.add('on');
});

closeButton.addEventListener('click', function() {
  document.querySelector('.btn-sidebar').style.transform = 'translateX(-300px)';
  document.querySelector('.overlay').classList.remove('on');
});

//사이드바 나오고 , x버튼을 눌렀을 때 사이드바 들어가라
//사이드바 나왔을 때 오버레이에 클래스 on이 추가되어라
//x버튼을 눌렀을 때 오버레이에 클래스 on이 제거되어라


//제이쿼리는 style. 이 아니라 css로 작성해야 된다.


