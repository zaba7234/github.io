const hamburger = document.querySelector("#hamburger");
const navbar = document.querySelector(".navbar-nav");

hamburger.addEventListener("click", async function(event) {
    // console.log("HAMBURGER!!!");
    navbar.classList.toggle("mobile");
    navbar.classList.toggle("slide");
});

const hideLink = document.querySelector("#navbarDropdown");
const hidden1 = document.querySelector("#hideLink");
const hidden2 = document.querySelector("#hideLink2");

hideLink.addEventListener("click", async function(event) {
    // console.log("HIDE!!!");
    // console.log(hidden1, hidden2);
    hidden1.classList.toggle("hidden");
    hidden2.classList.toggle("hidden");
}); 

document.addEventListener("click", async function(event) {
    // console.log("clicked")
    if (hidden1.classList.contains("hidden") && navbar.classList.contains("mobile"))
    {
        hidden1.classList.toggle("hidden");
        hidden2.classList.toggle("hidden");
    }
});