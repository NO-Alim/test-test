// remember window event keep frist
// for  slideDown.html
// slideDown ---------------------------seperate HTML
//for hidding ***keep your css top 0;
var prevScrollpos = window.pageYOffset;
var navScrollpos = document.querySelector('.slideDown').pageYOffset;

window.onscroll = function (){
  var currentScrollpos = window.pageYOffset;
  if(prevScrollpos > currentScrollpos){
    document.querySelector('.slideDown').style.top = '0';
  } else{
    document.querySelector('.slideDown').style.top = '-50px'
  }
  prevScrollpos = currentScrollpos;
}

/* //for slideDown
window.onscroll = function() {scrollFunction()}; 

function scrollFunction(){
  if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
    document.querySelector('.slideDown').style.top = '0';
  } else{
    document.querySelector('.slideDown').style.top = '-50px';
  }
}*/