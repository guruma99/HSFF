$('.gnb-main-item').hover(function() {
  $(this).find('.sub').stop().slideDown(500);
  $(this).children('a').addClass('hover');
  //.gnb-main-item에 호버했을때 일어날 일
  //sub 클래스가 슬라이드 다운이 되라
  //그 자식요소 a 에게 클래스가 추가되라 '호버'라는 클래스
}, function() {
  $(this).find('.sub').stop().slideUp(500);
  $(this).children('a').removeClass('hover');
});



// .gnb-main-item 메뉴에 마우스 호버했을 때 일어나라- 
// .gnb-main-item 메뉴가 시킨다 서브메뉴를 슬라이드 다운으로 보이게 


// $('.sub').hover(function() {
//   $(this).find('.gnb-main-item').style.color='red';
// });

// let sub = document.querySelector('.sub');

// sub.addEventListener('hover', function() {
//   document.querySelector('.gnb-main-item').style.color = 'red';
// });


//바닐라 자바스크립트? 제이쿼리 ? 자바 스크립트? 같은 파일안에서 동시 사용불가한가??