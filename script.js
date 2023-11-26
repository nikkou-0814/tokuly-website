function resizeWindow(){
    document.getElementById("footer").style.width = window.innerWidth-20 + "px";
}
window.addEventListener('resize', resizeWindow);
resizeWindow();