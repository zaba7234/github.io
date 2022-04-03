document.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.metaKey && event.key === 'd')
    {
        console.log("Dog Cursor Activated!");
        //document.getElementById("cursor").style.cursor = "url('../resources/img/corg.png'), auto;";
        document.getElementById("cursor").classList.add('dog_cursor');
        document.getElementById("instruct_d").classList.remove('is_visible');
        document.getElementById("instruct_d").classList.add('not_visible');
        document.getElementById("instruct_s").classList.remove('not_visible');
        document.getElementById("instruct_s").classList.add('is_visible');
        document.getElementById("instruct_b").classList.remove('not_visible');
        document.getElementById("instruct_b").classList.add('is_visible');
        document.getElementById("bowl").classList.remove('not_visible');
        document.getElementById("cursor").style.backgroundColor = "#3D322C";
    }
});

document.addEventListener('keydown', function(event) {
    event.preventDefault();
    if (event.metaKey && event.key === 's')
    {
        console.log("Dog Cursor Deactivated");
        //document.getElementById("cursor").style.cursor = "url('../resources/img/corg.png'), auto;";
        document.getElementById("cursor").classList.remove('dog_cursor');
        document.getElementById("cursor").classList.remove('dog_cursor_big');
        document.getElementById("instruct_d").classList.add('is_visible');
        document.getElementById("instruct_d").classList.remove('not_visible');
        document.getElementById("instruct_s").classList.add('not_visible');
        document.getElementById("instruct_s").classList.remove('is_visible');
        document.getElementById("instruct_b").classList.add('not_visible');
        document.getElementById("instruct_b").classList.remove('is_visible');
        document.getElementById("cursor").style.backgroundColor = "white";
    }
});

function bowlClick()
{
    console.log("Dog Grows!");
    document.getElementById("bowl").classList.add('not_visible');
    document.getElementById("cursor").classList.remove('dog_cursor');
    document.getElementById("cursor").classList.add('dog_cursor_big');
}