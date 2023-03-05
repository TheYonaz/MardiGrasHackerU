function NavOpen() {
    var x = document.querySelector(".top-nav1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}
document.querySelector('#burger').addEventListener('click',()=> NavOpen())