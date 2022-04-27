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
    hideLink.classList.toggle("active_toggle");
}); 

document.addEventListener("click", async function(event) {
    if (!hideLink.contains(event.target))
    {
        //console.log("UNHIDDEN")
        hidden1.classList.remove("hidden");
        hidden2.classList.remove("hidden");
    }
});

document.addEventListener('keydown', function(event) {
    //console.log("dog");
    event.preventDefault();
    if (event.metaKey && event.key === 'h')
    {
        //console.log("Dog Cursor Activated!");
        //document.getElementById("cursor").style.cursor = "url('../resources/img/corg.png'), auto;";
        document.getElementById("cursor").classList.add('dog_cursor');
        document.getElementById("instruct_d").classList.remove('is_visible');
        document.getElementById("instruct_d").classList.add('not_visible');
    }
});