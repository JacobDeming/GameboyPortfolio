$(document).ready(function(){

  var styleNumber = 0;
  var gameboyStyles = ["old-school.css","pocket.css"];

  $('.myheader').hide();

  $('.Select').on('mousedown',function(){
    styleNumber++;
    $('.Select').css("background-color","gray");
    $('.Select').css("box-shadow","none");
    if(styleNumber>=gameboyStyles.length){
      styleNumber = 0;
    }
    $('.Styles').attr("href","/stylesheets/"+gameboyStyles[styleNumber]);
    if(styleNumber==0){
      $('.BButton').css("background-color","darkred");
      $('.BButton').css("box-shadow","2px 2px 1px darkred");
      $('.AButton').css("background-color","darkred");
      $('.AButton').css("box-shadow","2px 2px 1px darkred");
    }
    if(styleNumber==1){
      $('.BButton').css("background-color","black");
      $('.BButton').css("box-shadow","2px 2px 1px black");
      $('.AButton').css("background-color","black");
      $('.AButton').css("box-shadow","2px 2px 1px black");
    }
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
    if(styleNumber==0){
      $('.BButton').css("background-color","maroon");
      $('.BButton').css("box-shadow","none");
    }
    if(styleNumber==1){
      $('.BButton').css("background-color","gray");
      $('.BButton').css("box-shadow","none");
    }
  })

  $('.BButton').on('mouseup',function(){
    if(styleNumber==0){
      $('.BButton').css("background-color","darkred");
      $('.BButton').css("box-shadow","2px 2px 1px darkred");
    }
    if(styleNumber==1){
      $('.BButton').css("background-color","black");
      $('.BButton').css("box-shadow","2px 2px 1px black");
    }
  })

  $('.AButton').on('mousedown',function(){
    if(styleNumber==0){
      $('.AButton').css("background-color","maroon");
      $('.AButton').css("box-shadow","none");
    }
    if(styleNumber==1){
      $('.AButton').css("background-color","gray");
      $('.AButton').css("box-shadow","none");
    }
  })

  $('.AButton').on('mouseup',function(){
    if(styleNumber==0){
      $('.AButton').css("background-color","darkred");
      $('.AButton').css("box-shadow","2px 2px 1px darkred");
    }
    if(styleNumber==1){
      $('.AButton').css("background-color","black");
      $('.AButton').css("box-shadow","2px 2px 1px black");
    }
  })

  setTimeout(function(){
    $('Loading').fadeOut(1000);
  },4000)

  setTimeout(function(){
    $('My-Header').fadeIn(2000);
  },5500)

})