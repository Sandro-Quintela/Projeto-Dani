var btn = document.querySelector(".seta_subir");

btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});



var form = document.querySelector(".cadastro");

form.addEventListener("click", function() {
    window.scrollTo(3900, 3900);
});



const videos = document.getElementById("video");
const video = document.querySelectorAll("#video video");

let idx = 0;

function scrollar(){
    idx++;

    if (idx > video.length - 1){
        idx = 0;
    } 

    videos.style.transform = 'translateX(${-idx * 380}px)';
}

setInterval(scrollar, 1800);



