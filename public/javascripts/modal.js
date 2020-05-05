// Get the modal
var modal = document.getElementById("myModal");

// Get the image and insert it inside the modal - use its "alt" text as a caption
var imgs = document.getElementsByClassName("photo");
var modalImg = document.getElementById("modalImg");

Array.from(imgs).forEach(img => {
  img.onclick = function(){
    modal.style.display = "flex";
    modalImg.src = this.src;
  }
})

// Get the <span> element that closes the modal
let span = document.getElementById("close");

span.addEventListener('click', () => {
  modal.style.display = "none";
})
