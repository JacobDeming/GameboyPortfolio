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

  $('.BButton').on('mousedown',function(){
    $('.BButton').css("background-color","maroon");
    $('.BButton').css("box-shadow","none");
  })

  $('.BButton').on('mouseup',function(){
    $('.BButton').css("background-color","darkred");
    $('.BButton').css("box-shadow","2px 2px 1px darkred");
  })

  $('.AButton').on('mousedown',function(){
    $('.AButton').css("background-color","maroon");
    $('.AButton').css("box-shadow","none");
  })

  $('.AButton').on('mouseup',function(){
    $('.AButton').css("background-color","darkred");
    $('.AButton').css("box-shadow","2px 2px 1px darkred");
  })
})