let navbtns = document.getElementsByClassName('navbtn');
let menuBtn = document.getElementById('menuBtn');

menuBtn.addEventListener('click', toggleMenu);


function toggleMenu() {
  console.log('clicked');
  Array.from(navbtns).forEach(navbtn => {
    navbtn.classList.toggle("display");
  })
}
