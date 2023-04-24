
// 서브메뉴

$('.menu > li, .bg-white').hover(function(){
  $('.submenu').css({
    display: 'block'
  });
  $('.submenu-bg').css({
    display: 'block'
  });
},function(){
  $('.submenu').css({
    display: 'none'
  });
  $('.submenu-bg').css({
    display: 'none'
  });
});

// 모달

$('.modal').click(function () {
  $('.modal-wrap').css({
    display: 'block'
  });
});

$('.modal-close').click(function() {
  $('.modal-wrap').css({
    display: 'none'
  });
});