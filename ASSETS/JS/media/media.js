const picLibrary = document.querySelector(".picLibrary");
const images = picLibrary.querySelectorAll("img");
const bigPic = document.querySelector('.bigPic');
const closebtn = document.querySelector('.closebtn');
const leftBtn = document.querySelector('.leftBtn')
const rightBtn = document.querySelector('.rightBtn')
console.log(images);
images.forEach((image) =>
  image.addEventListener("click", () =>{ 
    let src = image['src']
    let toAdd = bigPic.querySelector('img')
  toAdd['src'] = `${src}`
  closebtn.style.opacity = '1'
  }
  )
);
closebtn.addEventListener('click', () =>{
  let toAdd = bigPic.querySelector('#showPic')
  toAdd['src'] = ``
  closebtn.style.opacity = '0'
}
)
rightBtn.addEventListener('click',()=>{
  picLibrary.style.transform = 'translateX(-30%)';
})






// function endToStart(images){
//   let array = Array.from(images)
//   let toFirst = array.pop()
//   console.log(array)
//   array.unshift(`${toFirst}`)
//   console.log(array)
// }
// function startToEnd(images){
//   let array = Array.from(images)
//   let toLast = array.shift()
//   array.push(`${toLast}`)
// }
// console.log(endToStart(images))

