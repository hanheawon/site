
 $(function(){
  var img_num = 0;      // 이미지 번호 
  var duration = 3000;  // 재생시간(ms)
  var img_length = $('#slider > img').length;
  console.log($('#slider > img').length);

  setInterval(function(){

    // 이미지 뷰 초기화(안보이게)
    $('#slider > img').css('opacity', 0);

    // 현재 재생될 이미지
    $('#slider > img')
      .eq(img_num)
      .css('opacity', 1);

      // 마지막 이미지이면 처음으로
      if(img_num == img_length - 1) {
        img_num = 0;
      } else{
        img_num++;
      }
  }, duration)

});

$(function(){
  // 1.마우스가 1depth에 올라가면(hover) 2depth보임
  // 2.마우스가 1depth에서 나가면 2depth 사라짐
  $('#main-menu > li').hover(
    function(){
      // mouseover
      $(this)
        .find('.depth2')
        .addClass('show');
    },
    function(){
      // mouseout
      $(this)
        .find('.depth2')
        .removeClass('show');
    }
  )
});  



