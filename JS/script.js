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
    var navbarToggler = document.querySelector('.navbar-toggler')
    var closeToggler = document.querySelector('.close-toggler')
    var navbarNav = document.querySelector('#navbarNav')

    navbarToggler.addEventListener('mousedown', function () {
        navbarNav.classList.toggle('show')
    })

    closeToggler.addEventListener('mousedown', function (event) {
        event.stopPropagation()
        navbarNav.classList.remove('show')
    })

    var navLinks = document.querySelectorAll('.navbar-nav .nav-link')
    navLinks.forEach(function (link) {
        link.addEventListener('mousedown', function (event) {

            event.stopPropagation()

            navbarNav.classList.remove('show')

            var targetId = link.getAttribute('href').substring(1)

            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })

    document.addEventListener('mousedown', function (event) {
        if (event.target !== closeToggler && event.target !== navbarToggler) {
            navbarNav.classList.remove('show')
        }
    })
})

