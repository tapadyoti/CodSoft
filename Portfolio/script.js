const navitems = document.getElementById("navitems");
const open = document.querySelector("#open");
const close = document.querySelector("#close");

const openMenu = ()=>{
     navitems.style.right = "0";
}
const closeMenu = ()=>{
    navitems.style.right = "-200px";
}

open.addEventListener("click", ()=>{
    open.style.display = "none";
    openMenu();
})

close.addEventListener("click", ()=>{
    open.style.display = "block";
    closeMenu();
})

const scriptURL = 'https://script.google.com/macros/s/AKfycbyfRzT3j1sOKLGaUbVHqqfxTMuMSlDuM3YprpmJG67BLSkyEQW-O3DBK_RG8CvycKf-8Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.querySelector(".msg")

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerText = "Message sent successfully!"
        setTimeout(function(){
            msg.innerText = "";
        },5000)
        form.reset();
    })
    .catch(error => console.error('Error!', error.message))
})
if (!window.location.href.endsWith("/index.html")) {
    window.location.href = "index.html";
}
document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll('.section');
  
    const options = {
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, options);
  
    sections.forEach(section => {
      observer.observe(section);
    });
  });
  