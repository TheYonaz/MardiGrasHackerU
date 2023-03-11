
//button, .card random color
const buttons = document.querySelectorAll('button')
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
function randomColor(x){
    let purple = '#9453A6'
    let yellow = '#f2cc0f'
    let green = '#8cbf3f'
    let num = getRandomInt(3)
    if(num == 0) x.style.background = purple
    if(num == 1) x.style.background = yellow
    if(num == 2) x.style.background = green
}
buttons.forEach(button => randomColor(button));
const cards = document.querySelectorAll('.card')
cards.forEach(card => randomColor(card))
setInterval(() => cards.forEach(card => randomColor(card)), 5000);
setInterval(() => buttons.forEach(button => randomColor(button)), 2500);
//photo slider
let pic ={ src :"./ASSETS/images/slider/pexels-mali-maeder-335692.jpg", text :'masked guy having fun'}
let pic1  ={ src :"./ASSETS/images/slider/norbu-gyachung-wGMVs4y24x4-unsplash.jpg", text :'New Orleans lion statue celebrating'}
let pic2 ={ src :"./ASSETS/images/slider/samuel-dixon-eatb7lScbCc-unsplash.jpg", text :'Two party people with no shirt'}
let pic3 ={ src :"./ASSETS/images/slider/sonika-agarwal-QWf84ihd1og-unsplash.jpg", text :'the color the symbolizes the parade'} 
let pic4 ={ src :"./ASSETS/images/slider/johanna-paula-perez-vinluan-p72_Bgx0Dbg-unsplash.jpg", text :'the masks the symbolizes the parade for sale'}
let images = [pic,pic1,pic2,pic3,pic4]
let start = 0
const picSpan = document.getElementById('picSpan')
function slide(){
    const slider = document.getElementById('photo-slide')
    if(start < images.length){
       start = start+1; 
     }else{
         start = 1;
    }
    
    slider.querySelector('img').src =images[start-1].src;
    picSpan.innerHTML= images[start-1].text
}
//color change interval
setInterval(() => slide(), 3000);
//background move interval

function NavOpen() {
  var x = document.querySelector(".top-nav1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
document.querySelector('#burger').addEventListener('click',()=> NavOpen())

