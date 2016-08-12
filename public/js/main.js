$(document).ready(function(){

  $('.Select').on('mousedown',function(){
    $('.Select').css("background-color","gray");
    $('.Select').css("box-shadow","none");
  })

  $('.Select').on('mouseup',function(){
    $('.Select').css("background-color","black");
    $('.Select').css("box-shadow","2px 2px 1px black");
  })

  $('.Start').on('mousedown',function(){
    $('.Start').css("background-color","gray");
    $('.Start').css("box-shadow","none");
  })

  $('.Start').on('mouseup',function(){
    $('.Start').css("background-color","black");
    $('.Start').css("box-shadow","2px 2px 1px black");
  })
})