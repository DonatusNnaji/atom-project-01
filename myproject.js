//hamburger dropdown
var hamburgerBar = document.getElementById("hamburgerBar");
hamburgerBar.addEventListener("click", function () {

document.getElementById("navList").classList.toggle("active");
})
//hamburger open and close
const hamburgerIcon = document.getElementById("hamburgerBar");
 let booleanIcon = false;
 hamburgerIcon.addEventListener('click', function() {
   if(!booleanIcon){
     hamburgerIcon.classList.add("closeIcon");
     booleanIcon = true;
   }
   else {
     hamburgerIcon.classList.remove("closeIcon");
     booleanIcon = false;
   }
 }
)

//page display

/* const pageToggle = function () {
  const navbtn  =  document.querySelectorAll('#nav');
  for(let i = 0 ; i< navbtn.lenght ; i++) {
     navbtn[i].addEventListener( "click", function () {
       console.log("say hello");
       document.getElementsByClassName('active').classList.remove('active');
       this.classList.add('active');
       console.log("yess");
     })
  }
}
pageToggle();*/
