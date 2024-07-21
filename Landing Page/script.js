const openMenu = document.querySelector(".openMenu");
const closeMenu = document.querySelector(".closeMenu");

const navItems = document.querySelector(".navItems");

function open(){
    navItems.style.right = "0" 
}
function close(){
    navItems.style.right = "-400px" 
}


openMenu.addEventListener("click", ()=>{ 
    openMenu.classList.add("hide");
    open();
})
closeMenu.addEventListener("click",()=>{
    openMenu.classList.remove("hide");
    close();
})