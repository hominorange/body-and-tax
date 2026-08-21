(function ($) {
    'use strict';
    $(window).on('load',function(){
      $('body').addClass('appear');
     });
  })(jQuery);

//   const image1 = document.querySelector('.ImgAnime1');
//   const image2 = document.querySelector('.ImgAnime2');
//   const image3 = document.querySelector('.ImgAnime3');
//   const image4 = document.querySelector('.ImgAnime4');
//   const image5 = document.querySelector('.ImgAnime5');
//   window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;
//     image1.style.transform = `translate(50%, calc(-40% + ${scrollPosition * 0.1}px))`;
//     image2.style.transform = `translate(50%, calc(-110% + ${scrollPosition * 0.2}px))`;
//     image3.style.transform = `translate(50%, calc(-120% + ${scrollPosition * 0.2}px))`;
//     image4.style.transform = `translate(50%, calc(-150% + ${scrollPosition * 0.2}px))`;
//     image5.style.transform = `translate(50%, calc(-200% + ${scrollPosition * 0.2}px))`;
//   });

// const image1 = document.querySelector('.ImgAnime1');
// const image2 = document.querySelector('.ImgAnime2');
// const image3 = document.querySelector('.ImgAnime3');
// const image4 = document.querySelector('.ImgAnime4');
// const image5 = document.querySelector('.ImgAnime5');

// const limitScroll = () => {
//     const maxScroll = document.body.scrollHeight - window.innerHeight;
//     return window.scrollY >= maxScroll;
// };

// window.addEventListener('scroll', () => {
//     const scrollPosition = window.scrollY;

//     // スクロールがはみ出るところまで来たら止める
//     if (limitScroll()) {
//         return;
//     }

//     image1.style.transform = `translate(50%, calc(-40% + ${scrollPosition * 0.1}px))`;
//     image2.style.transform = `translate(50%, calc(-110% + ${scrollPosition * 0.2}px))`;
//     image3.style.transform = `translate(50%, calc(-120% + ${scrollPosition * 0.2}px))`;
//     image4.style.transform = `translate(50%, calc(-150% + ${scrollPosition * 0.2}px))`;
//     image5.style.transform = `translate(50%, calc(-200% + ${scrollPosition * 0.2}px))`;
// });

/* マーカーアニメーション */ 
window.addEventListener('scroll',function() {
    const height = window.innerHeight;                    //画面の高さを取得
    const scroll = this.pageYOffset;                      //スクロール量
    const marker = document.querySelectorAll('.marker-orange');  //マーカーを引く要素を取得
    const value = scroll - height + 300                   //後ろの数字を弄ることで、イベント位置をずらす
  
    // markerクラスを持っている要素全てに処理を行う
    marker.forEach(function(element){
        //要素が画面内の指定の位置に来たら「on」クラスをつける
        if (scroll > element.getBoundingClientRect().top + value) {
            element.classList.add('on')
        }
    });
  })

  //メニューsp
  $(function() {
    $('.Toggle').click(function() {
        $(this).toggleClass('active');
  
        if ($(this).hasClass('active')) {
            $('.menu').addClass('active');
        } else {
            $('.menu').removeClass('active');
        }
    });
  });
  $('.menu a').on('click', function(event) {
    $('.Toggle').trigger('click');
  });

// JavaScript for triggering animation on scroll
document.addEventListener("DOMContentLoaded", function () {
    const targets = document.querySelectorAll('.js-scroll-matrix');
  
    // Intersection Observerを設定
    const observer = new IntersectionObserver(entries => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          // 遅延を追加してアニメーションを開始
          setTimeout(() => {
            entry.target.classList.add('is-animated');
          }, index * 300);  // indexに基づいて300msごとに遅延
        }
      });
    }, {
      threshold: 0.9  // 90%ビューポートに表示された時に発動
    });
  
    // 各ターゲット要素を監視する
    targets.forEach(target => {
      observer.observe(target);
    });
});

//スライドして表示するアニメーション
$(function () {
    // aimation呼び出し
    if ($('.slidein-right').length) {
        scrollAnimation();
    }

    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".slidein-right").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('is-animated');
                }
            });
        });
    }
    $(window).trigger('scroll');
});

//スライドして表示するアニメーション
$(function () {
    // aimation呼び出し
    if ($('.slidein-left').length) {
        scrollAnimation();
    }

    // aimation関数
    function scrollAnimation() {
        $(window).scroll(function () {
            $(".slidein-left").each(function () {
                let position = $(this).offset().top,
                    scroll = $(window).scrollTop(),
                    windowHeight = $(window).height();

                if (scroll > position - windowHeight + 200) {
                    $(this).addClass('is-animated');
                }
            });
        });
    }
    $(window).trigger('scroll');
});