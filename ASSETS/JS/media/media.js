  const picLibrary = document.querySelector(".picLibrary")
  const main = document.querySelector("main");
  const images = picLibrary.querySelectorAll("img");
 const bigPic = document.querySelector(".bigPic");
 const closebtn = document.querySelector(".closebtn");
 const leftBtn = document.querySelector(".leftBtn");
 const rightBtn = document.querySelector(".rightBtn");
const imagesSrc = [
  //"./ASSETS/images/slider/cayetano-gil-T0tb5Olqkis-unsplash.jpg",
  // "./ASSETS/images/slider/chalo-garcia-WD3MV8Mmr7U-unsplash.jpg",
  "./ASSETS/images/slider/fili-santillan-nE_GZfPPhpQ-unsplash.jpg",
  "./ASSETS/images/slider/johanna-paula-perez-vinluan-p72_Bgx0Dbg-unsplash.jpg",
  "./ASSETS/images/slider/kankon-biswas-p4r46cTclno-unsplash.jpg",
  "./ASSETS/images/slider/norbu-gyachung-wGMVs4y24x4-unsplash.jpg",
  "./ASSETS/images/slider/pexels-mali-maeder-335692.jpg",
  "./ASSETS/images/slider/pexels-mikhail-nilov-9391500.jpg",
  "./ASSETS/images/slider/pexels-polina-kovaleva-8404700.jpg",
  "./ASSETS/images/slider/samuel-dixon-eatb7lScbCc-unsplash.jpg",
  "./ASSETS/images/slider/sander-dalhuisen-C1WGQahqHOw-unsplash.jpg",
  "./ASSETS/images/slider/sonika-agarwal-QWf84ihd1og-unsplash.jpg",
  "./ASSETS/images/slider/ugur-arpaci-U18V0ToioFU-unsplash.jpg",
];
// show images on load
showImg();
//add src to big pic on change, show closebtn
images.forEach((image) =>
  image.addEventListener("click", () => {
    const src = image["src"];
    bigPic.querySelector("img").src= `${src}`;
    closebtn.style.opacity = "1";
  })
);
//close button
closebtn.addEventListener("click", () => {
  bigPic.querySelector("img").src= ``;
  closebtn.style.opacity = "0";
});

// on click change order of array and show the new order
leftBtn.addEventListener("click", () => {
  endToStart();
  showImg();
});
rightBtn.addEventListener("click", () => {
  startToEnd();
  showImg();
});
//change the array order
function endToStart(images) {
  let toFirst = imagesSrc.pop();
  imagesSrc.unshift(toFirst);
}
function startToEnd(images) {
  let toLast = imagesSrc.shift();
  imagesSrc.push(toLast);
}

function showImg() {
  let i = 0;
  for (img of images) {
    if (i > imagesSrc.length) i = 0;
    img["src"] = imagesSrc[i];
    i++;
  }
}


function NavOpen() {
  var x = document.querySelector(".top-nav1");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
console.log(document.querySelector('#burger').addEventListener('click',()=> NavOpen()))
// for phone
document.querySelector('#phoneSlide').src = imagesSrc[0]

const leftBtn1 = document.querySelector(".leftBtn1");
const rightBtn1 = document.querySelector(".rightBtn1");
leftBtn1.addEventListener('click',()=>{ startToEnd()
document.querySelector('#phoneSlide').src = imagesSrc[0]});
rightBtn1.addEventListener('click',()=>{ endToStart()
document.querySelector('#phoneSlide').src = imagesSrc[0]});

