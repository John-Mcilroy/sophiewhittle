
let isMenu = false;

function openModal() {
  // Get the modal
  const modal = document.getElementById('img-modal');
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  const modalImg = document.getElementById("modal-img");
  
  modal.style.display = "block";
  captionText.innerHTML = event.target.alt;
  
  // When the user clicks on <span> (x), close the modal
  modal.onclick = function() { 
    modal.style.display = "none";
  }
}

function openMenu() {
  // Get the categories
  const categories = document.getElementById('categories');

  if(isMenu) {
    categories.classList.remove('menu-open');
    isMenu = !isMenu;
  } else {
    categories.classList.add('menu-open');
    isMenu = !isMenu;
  }
  
}
