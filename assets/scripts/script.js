let menuButton = document.getElementById("menu-toggle");
menuButton.addEventListener('click', openNavigationMenu);

let closeMenuButton = document.getElementById("menu-close");
closeMenuButton.addEventListener('click', closeNavigationMenu);

function openNavigationMenu(){
    document.getElementById("responsive-menu").style.height = "100%";
    console.log("openNavigationMenu ran");
}

function closeNavigationMenu(){
    document.getElementById("responsive-menu").style.height = "0";
    console.log("closeNavigationMenu ran");
}