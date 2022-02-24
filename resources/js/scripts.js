function changeImage()
{
    var image = document.getElementById("portraitImg");
    var choice = Math.trunc(Math.random() * 3);
    console.log(image.src);

    if (choice == 0 && !(image.classList.contains('pic4')))
    {
        console.log(choice);
        image.src = "../resources/img/pic4.JPG";
        image.classList.add('pic4');
        image.classList.remove('pic3');
        image.classList.remove('pic2');
    }
    else if (choice == 1 && !(image.classList.contains('pic3')))
    {
        console.log(choice);
        image.src = "../resources/img/pic3.JPG";
        image.classList.add('pic3');
        image.classList.remove('pic2');
        image.classList.remove('pic4');
    }
    else
    {
        console.log(choice);
        image.src = "../resources/img/pic2.JPG";
        image.classList.add('pic2');
        image.classList.remove('pic3');
        image.classList.remove('pic4');
    }
}

/*
let follow = document.getElementById('follow');

const mouseMovement = (mouse) =>
{
    follow.style.left = mouse.pageX + 'px';
    follow.style.top = mouse.pageY + 'px';
}

document.addEventListener('mousemove', mouseMovement);
*/
