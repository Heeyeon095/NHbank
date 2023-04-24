// 로고 클릭

$('.logo').click(function () {
  location.href = 'index.html';
});

// 큰글 사이트

$('.go-big').click(function() {
  location.href = 'main_big.html';
})

// 스크롤탑 버튼

$('.top-button').click(function () {
  $('body,html').animate({
    scrollTop: 0
  }, 500);  // 탑 이동 스크롤 속도
    return false;
});

// 랭귀지 버튼

let L = 0;

$('.language').click(function(){
  
  if(L == 0) {
    $('.language > i').css({
      transform: 'rotateZ(0deg)'
    });
    $('.language').css({
      height: '70px'
    });
    L++;
  } else if (L == 1) {
    $('.language > i').css({
      transform: 'rotateZ(180deg)'
    });
    $('.language').css({
      height: '35px'
    });
    L = 0;
  }
  
});

// 메뉴 호버 이벤트

$('.sub1').hover(function(){
  $('.submenu-wrap > .sub1').css({
    display: 'block'
  });
  $('.menu > .sub1 > a').css({
    position: 'relative',
    top: '10px',
    left: '30px',
    backgroundColor: '#265ed4',
    width: '60px',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  });
},function(){
  $('.submenu-wrap > .sub1').css({
    display: 'none'
  });
  $('.menu > .sub1 > a').css({
    position: 'relative',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '120px',
    lineHeight: '50px',
    color: '#333',
    fontWeight: 'bold',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
  });
});

$('.sub2').hover(function(){
  $('.submenu-wrap > .sub2').css({
    display: 'block'
  });
  $('.menu > .sub2 > a').css({
    position: 'relative',
    top: '10px',
    left: '30px',
    backgroundColor: '#265ed4',
    width: '60px',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  });
},function(){
  $('.submenu-wrap > .sub2').css({
    display: 'none'
  });
  $('.menu > .sub2 > a').css({
    position: 'relative',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '120px',
    lineHeight: '50px',
    color: '#333',
    fontWeight: 'bold',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
  });
});

$('.sub3').hover(function(){
  $('.submenu-wrap > .sub3').css({
    display: 'block'
  });
  $('.menu > .sub3 > a').css({
    position: 'relative',
    top: '10px',
    left: '25px',
    backgroundColor: '#265ed4',
    width: '70px',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  });
},function(){
  $('.submenu-wrap > .sub3').css({
    display: 'none'
  });
  $('.menu > .sub3 > a').css({
    position: 'relative',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '120px',
    lineHeight: '50px',
    color: '#333',
    fontWeight: 'bold',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
  });
});

$('.sub4').hover(function(){
  $('.submenu-wrap > .sub4').css({
    display: 'block'
  });
  $('.menu > .sub4 > a').css({
    position: 'relative',
    top: '10px',
    left: '20px',
    backgroundColor: '#265ed4',
    width: '85px',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  });
},function(){
  $('.submenu-wrap > .sub4').css({
    display: 'none'
  });
  $('.menu > .sub4 > a').css({
    position: 'relative',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '120px',
    lineHeight: '50px',
    color: '#333',
    fontWeight: 'bold',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
  });
});

$('.sub5').hover(function(){
  $('.submenu-wrap > .sub5').css({
    display: 'block'
  });
  $('.menu > .sub5 > a').css({
    position: 'relative',
    top: '10px',
    left: '25px',
    backgroundColor: '#265ed4',
    width: '70px',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  });
},function(){
  $('.submenu-wrap > .sub5').css({
    display: 'none'
  });
  $('.menu > .sub5 > a').css({
    position: 'relative',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '120px',
    lineHeight: '50px',
    color: '#333',
    fontWeight: 'bold',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
  });
});

$('.sub6').hover(function(){
  $('.submenu-wrap > .sub6').css({
    display: 'block'
  });
  $('.menu > .sub6 > a').css({
    position: 'relative',
    top: '10px',
    left: '15px',
    backgroundColor: '#265ed4',
    width: '90px',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  });
},function(){
  $('.submenu-wrap > .sub6').css({
    display: 'none'
  });
  $('.menu > .sub6 > a').css({
    position: 'relative',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '120px',
    lineHeight: '50px',
    color: '#333',
    fontWeight: 'bold',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
  });
});

$('.sub7').hover(function(){
  $('.submenu-wrap > .sub7').css({
    display: 'block'
  });
  $('.menu > .sub7 > a').css({
    position: 'relative',
    top: '10px',
    left: '20px',
    backgroundColor: '#245ed4',
    width: '80px',
    lineHeight: '50px',
    color: '#fff',
    fontWeight: 'bold',
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '10px'
  });
},function(){
  $('.submenu-wrap > .sub7').css({
    display: 'none'
  });
  $('.menu > .sub7 > a').css({
    position: 'relative',
    top: '0',
    left: '0',
    backgroundColor: '#fff',
    width: '120px',
    lineHeight: '50px',
    color: '#333',
    fontWeight: 'bold',
    borderTopRightRadius: '0',
    borderBottomLeftRadius: '0'
  });
});

// 스크롤 이벤트

$(window).scroll(function () {
  if ($(this).scrollTop() == 0) {
    $('.top-button').css({
      display: 'none'
    })
  } else if ($(this).scrollTop() > 10) {
    $('.top-button').css({
      display: 'block'
    })
  }
});

let B = 0;

$('.menu-bar').click(function(){
  
  if(B == 0) {
    $('.menu-bar-top').css({
      transform: 'rotateZ(42deg)',
      width: '33px'
    });
  
    $('.menu-bar-mid').css({
      opacity: 0
    });
  
    $('.menu-bar-bottom').css({
      transform: 'rotateZ(-43deg)',
      width: '33px'
    });
    $('.all-menu-wrap').stop().slideDown();
    B++;
  } else if (B == 1) {
    $('.menu-bar-top').css({
      transform: 'rotateZ(0)',
      width: '25px'
    });

    $('.menu-bar-mid').css({
      opacity: 1
    });

    $('.menu-bar-bottom').css({
      transform: 'rotateZ(0)',
      width: '25px'
    });
    $('.all-menu-wrap').stop().slideUp();
    B = 0;
  };
});

// 메인 자동 슬라이드 이미지

let E = 0;

function mainScroll () {

  if (E == 0) {
    $('.main-slide').css({
      left: '-100%'
    });
    $('.scroll2').addClass('on');
    $('.scroll1').removeClass('on');
    $('.scroll3').removeClass('on');
    E = 1;
  } else if (E == 1) {
    $('.main-slide').css({
      left: '-200%'
    });
    $('.scroll3').addClass('on');
    $('.scroll2').removeClass('on');
    $('.scroll1').removeClass('on');
    E = 2;
  } else if (E == 2) {
    $('.main-slide').css({
      left: '0'
    });
    $('.scroll1').addClass('on');
    $('.scroll2').removeClass('on');
    $('.scroll3').removeClass('on');
    E = 0;
  }

};

let mainSlide = setInterval(mainScroll, 5000);

$('.scroll1').click(function(){
  $('.main-slide').css({
    left: '0'
  });
  $('.scroll1').addClass('on');
  $('.scroll2').removeClass('on');
  $('.scroll3').removeClass('on');
  E = 0;
  clearInterval(mainSlide);
  mainSlide = setInterval(mainScroll, 5000);
});

$('.scroll2').click(function(){
  $('.main-slide').css({
    left: '-100%'
  });
  $('.scroll2').addClass('on');
  $('.scroll1').removeClass('on');
  $('.scroll3').removeClass('on');
  E = 1;
  clearInterval(mainSlide);
  mainSlide = setInterval(mainScroll, 5000);
});

$('.scroll3').click(function(){
  $('.main-slide').css({
    left: '-200%'
  });
  $('.scroll3').addClass('on');
  $('.scroll2').removeClass('on');
  $('.scroll1').removeClass('on');
  E = 2;
  clearInterval(mainSlide);
  mainSlide = setInterval(mainScroll, 5000);
});

// 메인 영역 캐릭터 인터렉션

function mainChar () {
  $('.m1').css({
    animation: 'm1 8s infinite 0.2s'
  });
  $('.m2').css({
    animation: 'm2 8s infinite 0.4s'
  });
  $('.m3').css({
    animation: 'm3 8s infinite 0.3s'
  });
  $('.m4').css({
    animation: 'm4 8s infinite'
  });
  $('.m5').css({
    animation: 'm5 8s infinite 0.1s'
  });
};

window.onload = function () {
  $('.main-char > img').css({
    top: '70px'
  });
  $('.main-char-text > p').css({
    top: '0'
  });
  $('.main-char-text > span').css({
    marginTop: '0'
  });

  setTimeout(mainChar, 2000);
};

// 이벤트 클릭

$('.e1').click(function(){
  $(this).addClass('on');
  $('.event-title > span').not(this).removeClass('on');
  $('.event-con-wrap > div > div').css({
    display: 'block'
  });
  $('.c2').css({
    top: '50px'
  });
  $('.sc1,.sc3').css({
    top: '50px'
  });
});

$('.e2').click(function(){
  $(this).addClass('on');
  $('.event-title > span').not(this).removeClass('on');
  $('.sc1,.sc2,.sc3').css({
    display: 'none'
  });
  $('.c1,.c2,.c3').css({
    display: 'block'
  });
  $('.c2').css({
    top: 0
  });
});

$('.e3').click(function(){
  $(this).addClass('on');
  $('.event-title > span').not(this).removeClass('on');
  $('.sc1,.sc2,.sc3').css({
    display: 'block'
  });
  $('.c1,.c2,.c3').css({
    display: 'none'
  });
  $('.sc1,.sc3').css({
    top: 0
  });
});

// 서브메뉴 로그인

$('.login-tab > div').click(function () {
  let lt = $(this).index();

  $('.login-con > div.on').removeClass('on');

  $('.login-con > div').eq(lt).addClass('on');

  if(lt == 0) {
    $('.login-tab > div').eq(0).css({
      borderColor: '#245ed4',
      borderRight: '1px solid #245ed4',
      borderBottom: 'none'
    });
    $('.login-tab > div').eq(1).css({
      border: '1px solid #ddd',
      borderLeft: 'none',
      borderBottom: '1px solid #245ed4'
    });
    $('.login-tab > div').eq(2).css({
      border: '1px solid #ddd',
      borderLeft: 'none',
      borderBottom: '1px solid #245ed4'
    });
  } else if (lt == 1) {
    $('.login-tab > div').eq(0).css({
      border: '1px solid #ddd',
      borderRight: 'none',
      borderBottom: '1px solid #245ed4'
    });
    $('.login-tab > div').eq(1).css({
      borderColor: '#245ed4',
      borderLeft: '1px solid #245ed4',
      borderRight: '1px solid #245ed4',
      borderBottom: 'none'
    });
    $('.login-tab > div').eq(2).css({
      border: '1px solid #ddd',
      borderLeft: 'none',
      borderBottom: '1px solid #245ed4'
    });
  } else if (lt == 2) {
    $('.login-tab > div').eq(0).css({
      border: '1px solid #ddd',
      borderRight: 'none',
      borderBottom: '1px solid #245ed4'
    });
    $('.login-tab > div').eq(1).css({
      border: '1px solid #ddd',
      borderRight: 'none',
      borderBottom: '1px solid #245ed4'
    });
    $('.login-tab > div').eq(2).css({
      borderColor: '#245ed4',
      borderLeft: '1px solid #245ed4',
      borderRight: '1px solid #245ed4',
      borderBottom: 'none'
    });
  }

});

$('#sub').click( function(){

  let id = $('#id').val();
  let pwd = $('#pwd').val();



  if(id == ''){

    alert('아이디를 입력해주세요!');

  } else if (pwd == '') {

    alert('비밀번호를 입력해주세요!');

  } else {

    alert('환영합니다 ' + id + '님!');

    $('#id').val('');
    $('#pwd').val('');

    location.href = 'index.html';

  }

});

// sub

$('.wd-menu > li').click(function () {

  let th = $(this).index();

  if($(this).hasClass('on')) {
    $(this).removeClass('on');
    $('.wd-con-wrap > div').eq(th).addClass('on');
  } else {
    $(this).addClass('on');
    $('.wd-menu > li').not(this).removeClass('on');
  }
});

$('.con1').click(function() {
  if($('.wd-menu').eq(0).find('a').hasClass('on')) {

  } else {
    $('.wd-menu > li > a').removeClass('on');
    $('.con1-wrap').addClass('on');
    $('.con2-wrap').removeClass('on');
  }
});

$('.con2').click(function() {
  if($('.wd-menu').eq(1).find('a').hasClass('on')) {

  } else {
    $('.wd-menu > li > a').removeClass('on');
    $('.con2-wrap').addClass('on');
    $('.con1-wrap').removeClass('on');
  }
});