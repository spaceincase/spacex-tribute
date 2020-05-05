function toggleMenu() {
  let navitems = document.getElementsByClassName('navitem');
  Array.from(navitems).forEach(item => {
    item.classList.toggle('show');
  })
}
