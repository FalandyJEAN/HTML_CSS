var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sideMenu = document.getElementById("sidemenu");
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link")
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab")
    }
    event.currentTarget.classList.add("active-link")
    document.getElementById(tabname).classList.add("active-tab")
}

function openmenu() {
    sideMenu.style.right = "0";
  }
  
  function closemenu() {
    sideMenu.style.right = "-250px";
  }


const scriptURL ="https://script.google.com/macros/s/AKfycbzx9I7ZTvcytyQj62-mdyRasVqw5biT3kOJDEGWNeAWpUM74r7yLSnhHzWEiZy2T45fCw/exec"
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementsByClassName(".msg")

form.addEventListener('submit', e => {
e.preventDefault()
fetch(scriptURL, { method: 'POST', body: new FormData(form)})
form.reset()
setTimeout(function() {
    msg.textContent = "";
    msg.style.display = 'none'; })
    .then(response =>{
        (function(){
            msg.innerHTML = ""
        },5000)
    })
})


// Ajouter cette fonction pour faire défiler vers le haut de la page
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  
  // Ajouter cet événement pour afficher ou masquer le bouton en fonction du défilement
  window.addEventListener("scroll", function() {
    var scrollToTopButton = document.getElementById("scrollToTopButton");
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "block";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });
  