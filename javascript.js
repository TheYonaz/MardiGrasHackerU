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
let pic ="/images/slider/pexels-mali-maeder-335692.jpg"
let pic1  ="/images/slider/norbu-gyachung-wGMVs4y24x4-unsplash.jpg"
let pic2 ="/images/slider/samuel-dixon-eatb7lScbCc-unsplash.jpg"
let pic3 ="/images/slider/sonika-agarwal-QWf84ihd1og-unsplash.jpg" 
let pic4 ="/images/slider/johanna-paula-perez-vinluan-p72_Bgx0Dbg-unsplash.jpg"
let images = [pic,pic1,pic2,pic3,pic4]
let start = 0
function slide(){
    const slider = document.getElementById('photo-slide')
    if(start < images.length){
       start = start+1; 
     }else{
         start = 1;
    }
    
    slider.innerHTML ="<img src="+images[start-1]+">"
}
//color change interval
setInterval(() => slide(), 2000);
//background move interval


