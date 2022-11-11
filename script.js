
var imageSources = [
    "./images/crybaby.jpeg",
    "./images/what.jpeg",
    "./images/cute.jpeg",
    "./images/harley.jpeg",
    "./images/hi.png",
    "./images/oi.jpeg",
];

console.log("I AM HERE O!!!");


var carouselSlide = document.querySelector('.carousel-slide');
var carouselImages = document.querySelectorAll('.carousel-slide img');


var carouselImage= document.querySelector('#caurosel-image');
var currentImageIndex=0;

carouselImage.setAttribute('src', imageSources[currentImageIndex]);


    function prev(){
        if(currentImageIndex <= 0) currentImageIndex = imageSources.length;
        currentImageIndex--;
        return setImg();
    }


    function next(){
        if(currentImageIndex>= imageSources.length -1) currentImageIndex=-1;
        currentImageIndex++;
        return setImg();
    }

    function setImg(){
        carouselImage.setAttribute('src', imageSources[currentImageIndex]);
    }


// var prev= document.querySelector('#prev');

// prev.onclick(e,function(){
//     prev();
// });

// var next= document.querySelector('#next');

// next.onclick(e,function(){
//     next();
// });

