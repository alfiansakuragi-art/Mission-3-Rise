const close = document.querySelectorAll(".close");
const loginRegister = document.querySelector(".login-register");
const login = document.querySelector("#login-popup")
const registNow = document.querySelector(".register-link")
const loginNow = document.querySelector(".Login-link")
const loginBox = document.querySelector(".login-container")
const registBox = document.querySelector(".register-container")

close[0].addEventListener("click", () => {
    loginRegister.style.display = "none"
})
close[1].addEventListener("click", () => {
    loginRegister.style.display = "none"
})


login.addEventListener("click", () => {
    loginRegister.style.display = "flex"
})

registNow.addEventListener("click", () => {
    loginBox.style.display = "none";
    registBox.style.display = "block"
})
loginNow.addEventListener("click", () => {
    registBox.style.display = "none";
    loginBox.style.display = "block"
})