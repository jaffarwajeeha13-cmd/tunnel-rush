const nextbutton = document.querySelector(".next-btn");
const video = document.querySelector(".hero-video");
const movielist=["videos/feature-1.mp4", "videos/feature-3.mp4", "videos/feature-2.mp4", "videos/hero-3.mp4"]; 

let index = 0;
nextbutton.addEventListener("click", function(){
    index++;   
    video.src = movielist[index]; 
    if(index === 3 ){
        index=-1;
    }
});