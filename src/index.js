import "./style.scss"
import navbar from './modules/navbar.html' 
import main from './modules/main.html'
import footer from './modules/footer.html'

const anchor = document.getElementById("content")

function loadHtml(component, className){
  const elem = document.createElement('div');
  elem.id = className;
  elem.innerHTML = component
  anchor.appendChild(elem)  
}

function loadWebsite(){
  loadHtml(navbar,"navbar-content")
  loadHtml(main, "main-content")
  loadHtml(footer,"footer-content")    
}

loadWebsite()

var homeBtn = document.getElementById("home-lnk")
var menuBtn = document.getElementById("menu-lnk")
var contactBtn = document.getElementById("contact-lnk")

function selectHome(){
  homeBtn.classList.add("active-custom") 

  menuBtn.classList.remove("active-custom")
  contactBtn.classList.remove("active-custom")    
}

homeBtn.addEventListener("click",()=>{
  console.log("home")
  selectHome()
})

menuBtn.addEventListener("click",()=>{
  console.log("menu")
  menuBtn.classList.add("active-custom")  

  homeBtn.classList.remove("active-custom")  
  contactBtn.classList.remove("active-custom")
})

contactBtn.addEventListener("click",()=>{
  console.log("contact")
  contactBtn.classList.add("active-custom")

  homeBtn.classList.remove("active-custom")
  menuBtn.classList.remove("active-custom")
})

selectHome();