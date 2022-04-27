const gallery = document.querySelector("#carousel");
let currentImg = 1;
let imgCount = document.querySelectorAll('#carousel .c_image').length;
//console.log(imgCount);
const dotDiv = document.querySelector("#counter");

for (let i = 0; i < imgCount; i++)
{
    let dot = document.createElement("span");
    dot.classList.add("dot");
    if (i === 0) {dot.classList.add("filled");}
    dot.id = (i + 1) + 'dot';
    dotDiv.appendChild(dot);
}

gallery.addEventListener("click", async function(event) {
    document.getElementById("text").classList.add("not_visible");
    document.getElementById("text").classList.remove("center_text");
    console.log("carousel clicked");
    document.getElementById(currentImg).classList.remove("active");
    document.getElementById(currentImg + 'dot').classList.remove("filled");
    document.getElementById(currentImg).classList.add("inactive");
    document.body.classList.remove("gallery" + currentImg);
    if (currentImg === (imgCount)) {
        currentImg = 1;
    }
    else {
        currentImg++;
    }
    void currentImg.offsetWidth;
    document.getElementById(currentImg).classList.remove("inactive");
    document.getElementById(currentImg).classList.add("active");
    document.getElementById(currentImg + 'dot').classList.add("filled");
    document.body.classList.add("gallery" + currentImg);
    
}); 