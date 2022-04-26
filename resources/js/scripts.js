const hamburger = document.querySelector("#hamburger");

hamburger.addEventListener("click", async function(event) {
    // console.log("HAMBURGER!!!");
    const navbar = document.querySelector(".navbar-nav");
    navbar.classList.toggle("mobile");
    navbar.classList.toggle("slide");
});

const hideLink = document.querySelector("#navbarDropdown");

hideLink.addEventListener("click", async function(event) {
    // console.log("HIDE!!!");
    const hidden1 = document.querySelector("#hideLink");
    const hidden2 = document.querySelector("#hideLink2");
    // console.log(hidden1, hidden2);
    hidden1.classList.toggle("hidden");
    hidden2.classList.toggle("hidden");
}); 