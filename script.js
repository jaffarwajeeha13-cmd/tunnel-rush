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

$(document).ready(function() {
    $('.item').click(function() {
        const imgSrc = $(this).find('img').attr('src');
        $('.overlay-img').attr('src', imgSrc);
        $('.overlay').css('display', 'flex').hide().fadeIn(400);
    });
    
    $('.close').click(function() {
        $('.overlay').fadeOut(300);
    });
    
    $('.overlay').click(function(e) {
        if (!$(e.target).is('.overlay-img')) {
            $(this).fadeOut(300);
        }
    });
});

$(document).ready(function(){
            $('.slider').slick({
                autoplay: true,
                autoplaySpeed: 1500,
                dots: true,
                arrows: true,
                infinite: true,
                speed: 800,
                fade: false,
                cssEase: 'ease-in-out'
            });
});

const button = document.getElementById('contact-us');
button.addEventListener('click', function() {
    window.location.href = 'contact.html';
});
