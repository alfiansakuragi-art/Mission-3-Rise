const linkContainer = document.querySelectorAll(".link-container");
const linkIcon = document.querySelectorAll(".link-icon");

linkIcon[0].addEventListener("click", () => {
    if(linkContainer[0].style.display == "none") {
        linkContainer[0].style.display = "block";
    } else {
        linkContainer[0].style.display = "none";
    }
})
linkIcon[1].addEventListener("click", () => {
    if(linkContainer[1].style.display == "none") {
        linkContainer[1].style.display = "block";
    } else {
        linkContainer[1].style.display = "none";
    }
})
linkIcon[2].addEventListener("click", () => {
    if(linkContainer[2].style.display == "none") {
        linkContainer[2].style.display = "block";
    } else {
        linkContainer[2].style.display = "none";
    }
})