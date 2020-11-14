
// side nav ----------------index.html
var slideNav = document.querySelector('.slideNavigation');
var sideNav = document.querySelector('.sidenav');
var open = document.querySelector('.openbtn');
var close = document.querySelector('.closebtn');

function openNav(){
  sideNav.style.width = '250px';
  //with push content
  //slideNav.querySelector('.main').style.marginLeft = '250px';
  //with down opacity
  //document.body.style.background = "rgba(0,0,0,0.4)";
  //with 100% width
  //sideNav.style.width = '100%';
}

function closeNav(){
  sideNav.style.width = '0';
  //with push content
  //slideNav.querySelector('.main').style.marginLeft = '0';
  //with down opacity
  //document.body.style.background = "#fff";
  //with 100% width
  //sideNav.style.width = '0';
}

open.addEventListener('click', openNav);
close.addEventListener('click', closeNav);


//for manu icon line two

var manu = document.querySelector('.manu');

manu.addEventListener('click', () => {
    manu.classList.toggle('change');
    console.log('toggle click');
});


//accordion-----------------------------------------------------

var acc = document.getElementsByClassName("accbtn");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active2");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// tabs---------------------------------------------------------

const tabs = document.querySelectorAll('[data-tab-target]');
const tabContents = document.querySelectorAll('[data-tab-content]');
//forEach func divide tabs to tab
tabs.forEach(tab => {
    //add a event single tab and loop through 
    //you can use any events like mouseover
    tab.addEventListener('click', () => {
        //find the targating tab and content
        const target = document.querySelector(tab.dataset.tabTarget)
        //and remove the class form tab and tabcontent 
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active3')
        })
        tabs.forEach(tab => {
            tab.classList.remove('active3')
        })
        //add class 
        tab.classList.add('active3')
        target.classList.add('active3')
    })
})

//search menu ------------------------------------------------

var srcInput = document.querySelector('#mySearch');

function srcFun(){
  input = document.querySelector('#mySearch');
  filter = input.value.toUpperCase();
  ul = document.querySelector('.mymenu');
  li = ul.querySelectorAll('li');
  for(i = 0; i < li.length; i++){
    a = li[i].querySelectorAll('a')[0];
    if(a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = '';
    } else{
      li[i].style.display = 'none';
    }
  }
  console.log('keyup');
}
srcInput.addEventListener('keyup', srcFun)

//--------------------------image modal ----------------------
var myModal = document.querySelector('.imgMod');
var img = document.querySelector('.myimg');
var modalImg = document.querySelector('.modal-content');
var captionText = document.querySelector('.caption');

img.addEventListener('click', () => {
  myModal.style.display = 'block';
  captionText.innerHTML = `<h1>This Is Full Image</h1>`
});

var modalClose = document.querySelector('.mdColse');

modalClose.addEventListener('click', () => {
  myModal.style.display = 'none';
})


//--------------------------------tab gallery -----------------------


var tabImgs = document.querySelectorAll('.tabimg');

tabImgs.forEach(tabImg => {
  tabImg.addEventListener('click', () => {
    console.log('clicked');
    var src = tabImg.src;
    var alt = tabImg.alt;
    var imgText = document.querySelector('#imgText');
    var img = document.querySelector('#expandedImg');
    img.src = src;
    imgText.innerHTML = alt;
    document.querySelector('.tab-container').style.display = 'block';
  })
});

var tabClose = document.querySelector('.tab-close');

tabClose.addEventListener('click', () => {
  document.querySelector('.tab-container').style.display = 'none';
})



/* --------------------------------------------- filter portfolio----------------


filterSelection('all')

function filterSelection(c) {
  var column = document.querySelector('.port-col');
  if (c = 'all') c = '';
  //add show class to the filter elements;
  for (i = 0; i < column.length; i++){
    hideFun(column[i], "show");
    if (column[i].className.indexOf(c) > -1) showFun(column[i], "show");
  }
}

//show filter elements 

function showFun(element, name) {
  var arr1 = element.className.split(' ');
  var arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++){
    if(arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[2];
    }
  }
}

//hide filter element 

function hideFun(element, name) {
  var arr1 = element.className.split(' ');
  var arr2 = name.split(' ');
  for (i = 0;  i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

var btnCont = document.querySelector('.portfolio-btn');

var btns = btnCont.querySelector('.btn');

for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', () => {
    var current = document.querySelector('.active');
    current[0].className = current[0].className.replace('active', '');
    this.className += ' active';
  });
  
}
*/


//-----------------------------------zoom image 

imageZoom('mainimg', 'resultimg')
function imageZoom(mainimg, resultimg){
  var img = document.querySelector('#mainimg');
  var result = document.querySelector('#resultimg');
  //create lens 
  lens = document.createElement('DIV');
  lens.setAttribute('class', 'img-zoom-lens');
  //insert lens 
  img.parentElement.insertBefore(lens, img);
  /*calculate the ratio between result DIV and lens:*/
  cx = result.offsetWidth / lens.offsetWidth;
  cy = result.offsetHeight / lens.offsetHeight;
  /*set background properties for the result DIV:*/
  result.style.backgroundImage = "url('" + img.src + "')";
  result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
  //execute a func when someone move the cursonr over the img 
  lens.addEventListener("mousemove", movelens);
  img.addEventListener("mousemove", movelens);
  /*and also for touch screens:*/
  lens.addEventListener("touchmove", movelens);
  img.addEventListener("touchmove", movelens);

  function movelens(e){
    e.preventDefault();
    var pos = getCursorpos(e);
    x = pos.x - (lens.offsetWidth / 2);
    y = pos.y - (lens.offsetHeight / 2);
    /*prevent the lens from being positioned outside the image:*/
    if (x > img.width - lens.offsetWidth) {x = img.width - lens.offsetWidth;}
    if (x < 0) {x = 0;}
    if (y > img.height - lens.offsetHeight) {y = img.height - lens.offsetHeight;}
    if (y < 0) {y = 0;}
    /*set the position of the lens:*/
    lens.style.left = x + "px";
    lens.style.top = y + "px";
    /*display what the lens "sees":*/
    result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
  }

  function getCursorpos(e){
    var a, x = 0, y = 0;
    e = e || window.event;
    /*get the x and y positions of the image:*/
    a = img.getBoundingClientRect();
    /*calculate the cursor's x and y coordinates, relative to the image:*/
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    /*consider any page scrolling:*/
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return {x : x, y : y};
  }
}




//------------------------------------------------- magnifier glass 

magnify('magImg', 3)

function magnify (magImg, zoom){
  var img = document.querySelector('#magImg');
  glass = document.createElement("DIV");
  glass.setAttribute("class", "mag-glass");
  /*insert magnifier glass:*/
  img.parentElement.insertBefore(glass, img);
  /*set background properties for the magnifier glass:*/
  glass.style.backgroundImage = "url('" + img.src + "')";
  glass.style.backgroundRepeat = "no-repeat";
  glass.style.backgroundSize = (img.width * zoom) + "px " + (img.height * zoom) + "px";
  bw = 3;
  w = glass.offsetWidth / 2;
  h = glass.offsetHeight / 2;
  /*execute a function when someone moves the magnifier glass over the image:*/
  glass.addEventListener("mousemove", moveMagnifier);
  img.addEventListener("mousemove", moveMagnifier);
  /*and also for touch screens:*/
  glass.addEventListener("touchmove", moveMagnifier);
  img.addEventListener("touchmove", moveMagnifier);

  function moveMagnifier(e){
    var pos, x, y;
    /*prevent any other actions that may occur when moving over the image*/
    e.preventDefault();
    /*get the cursor's x and y positions:*/
    pos = getCursorpos(e);
    x = pos.x;
    y = pos.y;
    /*prevent the magnifier glass from being positioned outside the image:*/
    if (x > img.width - (w / zoom)) {x = img.width - (w / zoom);}
    if (x < w / zoom) {x = w / zoom;}
    if (y > img.height - (h / zoom)) {y = img.height - (h / zoom);}
    if (y < h / zoom) {y = h / zoom;}
    /*set the position of the magnifier glass:*/
    glass.style.left = (x - w) + "px";
    glass.style.top = (y - h) + "px";
    /*display what the magnifier glass "sees":*/
    glass.style.backgroundPosition = "-" + ((x * zoom) - w + bw) + "px -" + ((y * zoom) - h + bw) + "px";
  }
  function getCursorpos(e){
    var a, x = 0, y = 0;
    e = e || window.event;
    a = img.getBoundingClientRect();
    x = e.pageX - a.left;
    y = e.pageY - a.top;
    x = x - window.pageXOffset;
    y = y - window.pageYOffset;
    return{x : x, y : y};
  }
}


//-------------------------------------copy text 



copyText = document.querySelector('.copytext');
copyBtn = copyText.querySelector('button');
copyVal = copyText.querySelector('input');

function CopyMe(){
  copyVal.select();
  copyVal.setSelectionRange(0, 99999)
  document.execCommand('copy');
  alert('Copied the text: ' + copyVal.value);
}

copyBtn.addEventListener('click', CopyMe);



//------------------------------------------password validation



var passval = document.querySelector('.passval');
var passInp = passval.querySelector('#psw');
var letter = passval.querySelector('#letter');
var capital = passval.querySelector('#capital');
var number = passval.querySelector('#number');
var length = passval.querySelector('#length');

//when user click on the password field, show the message box

passInp.addEventListener('focus', () => {
  passval.querySelector('.message').style.display = 'block';
});

passInp.addEventListener('blur', () => {
  passval.querySelector('.message').style.display = 'none';
});

//when the user starts to type something indide the password fiel


passInp.addEventListener('keyup', () => {
  console.log('keyup');
  // validate lowercase letter 
  var lowerCaseLetters = /[a-z]/g;
  if (passInp.value.match(lowerCaseLetters)) {
    letter.classList.remove('invalid');
    letter.classList.add('valid');
  } else {
    letter.classList.remove('valid');
    letter.classList.add('invalid');
  }
  //validate capital letters 
  var upperCaseLetter = /[A-Z]/g;
  if (passInp.value.match(upperCaseLetter)) {
    capital.classList.remove('invalid');
    capital.classList.add('valid');
  } else{
    capital.classList.remove('valid');
    capital.classList.add('invalid');
  }
  //validate numbers 
  var numbers = /[0-9]/g;
  if (passInp.value.match(numbers)) {
    number.classList.remove('invalid');
    number.classList.add('valid');
  } else {
    number.classList.remove('valid');
    number.classList.add('invalid');
  }
  //validate length
  if (passInp.value.length >= 8) {
    length.classList.remove('invalid');
    length.classList.add('valid');
  } else {
    length.classList.remove('valid');
    length.classList.add('invalid');
  }
});



// --------------------------------------sort table
var sortBtn = document.querySelector('.sortbtn');

sortBtn.addEventListener('click', () => {
  var table = document.querySelector('.sort table');
  swithcing = true;
  while (swithcing) {
    //start by saying: no swithcing is done:
    swithcing = false;
    rows = table.rows;
    //loop through all table rows 
    for (i = 1; i < (rows.length -1); i++){
      shouldSwitch = false;
      // get two elements you want to compare, one from current row and one from the next
      x = rows[i].querySelectorAll('TD')[0];
      y = rows[i + 1].querySelectorAll('TD')[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()){
        shouldSwitch = true;
        break;
      }
    }
    if(shouldSwitch){
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      swithcing = true;
    }
  }
})




//--------------------------------progress bar 


var proBtn = document.querySelector('.progressbtn');
var i = 0;
proBtn.addEventListener('click', () => {
  if (i == 0){
    i = 1;
    var elem = document.querySelector('.progress-bar');
    var width = 1;
    var id = setInterval(frame, 10);
    function frame(){
      if(width >= 100){
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + '%';
      }
    }
  }
})



//--------------------------------Custom Range slider 

var slider = document.querySelector('.slider');
var output = document.querySelector('.slideValue');
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}

