// const current = document.querySelector('#current');
// const imgs = document.querySelectorAll('.imgs img');
const opacity= 0.6;
const [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img') ]

imgs.forEach(img => img.addEventListener('dblclick', 
imgClick));

imgs[0].style.opacity = opacity;


function imgClick(e){
    //
    imgs.forEach(img => (img.style.opacity = 1));
    // Change your images
    current.src= e.target.src;


    // make the image lighter
    e.target.style.opacity = opacity
}