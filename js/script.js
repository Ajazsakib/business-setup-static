let openVideoPopup = document.getElementById("open-video-popup")
let videoPopup = document.getElementById("video-popup")
let closeVideoIcon = document.getElementById("close-video-popup")
let showMenu = document.getElementById("show-menu")
let hideMenu = document.getElementById("hide-menu")
closeVideoIcon.style.display = "none";

openVideoPopup.addEventListener("click", function ()
{
    videoPopup.style.display = "flex";
    closeVideoIcon.style.display = "block"
})

closeVideoIcon.addEventListener("click", function ()
{
    videoPopup.style.display = "none";
    this.style.display = "none"
})

showMenu.addEventListener("click", function ()
{
    document.getElementById("navLinks").style.display = "block";
    this.style.display = "none"
    hideMenu.style.display = "block"
});

hideMenu.addEventListener("click", function ()
{
    document.getElementById("navLinks").style.display = "none"
    this.style.display = "none"
    showMenu.style.display = "block"
})


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function ()
    {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
}