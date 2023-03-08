function NavOpen() {
    var x = document.querySelector(".top-nav1");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  document.querySelector('#burger').addEventListener('click',()=> NavOpen())
  
  function SubmitCheck(){
    const first = document.querySelector('#Fname').value
    const last = document.querySelector('#Lname').value
    const Email = document.querySelector('#Email').value
    // const Ftext = document.querySelector('#FreeText').value
    const confirm = document.querySelector('.confirmation')
    if((first !=="" && first!== null )&& (last !==""&& last !== null)&&
     Email.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) 
     ) confirm.innerHTML = 'Thank You for submitting!'
     else confirm.innerHTML ='the fields must be filled correctly';

  }
  document.querySelector('#Submit').addEventListener('click', ()=> SubmitCheck())//(Ftext!=='' && Ftext!== null)