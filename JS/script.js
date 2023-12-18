var tablinks = document.getElementsByClassName("tab-links")
var tabcontents = document.getElementsByClassName("tab-contents")
var sideMenu = document.getElementById("sidemenu")
function opentab(e, tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    e.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}


const scriptURL ="https://script.google.com/macros/s/AKfycbzx9I7ZTvcytyQj62-mdyRasVqw5biT3kOJDEGWNeAWpUM74r7yLSnhHzWEiZy2T45fCw/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector(".msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
form.reset()
setTimeout(function() {
    msg.textContent = ""
    msg.style.display = 'none'; })
    .then(response =>{
        (function(){
            msg.innerHTML = ""
        },5000)
    })
})


function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    })
}
  
window.addEventListener("scroll", function() {
  var scrollToTopButton = document.getElementById("scrollToTopButton")
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = "block"
  } else {
    scrollToTopButton.style.display = "none"
  }
})
  
document.addEventListener('DOMContentLoaded', function () {
  var navbarToggler = document.querySelector('.navbar-toggler');
  var closeToggler = document.querySelector('.close-toggler');
  var navbarNav = document.querySelector('#navbarNav');

  navbarToggler.addEventListener('mousedown', function () {
      navbarNav.classList.toggle('show');
  });

  closeToggler.addEventListener('mousedown', function (event) {
      event.stopPropagation();
      navbarNav.classList.remove('show');
  });

  var navLinks = document.querySelectorAll('.navbar-nav .nav-link');
  navLinks.forEach(function (link) {
      link.addEventListener('mousedown', function () {
          navbarNav.classList.remove('show');
      });
  });

  document.addEventListener('mousedown', function (event) {
      if (event.target !== closeToggler && event.target !== navbarToggler) {
          navbarNav.classList.remove('show');
      }
  });
});

