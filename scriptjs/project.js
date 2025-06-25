 
document.addEventListener('DOMContentLoaded', function() {
     
    const leafItems = document.querySelectorAll('.leaf-item');
    const leafContainer = document.querySelector('.leaf-slider-container');
    
 
    const imageSlides = document.querySelectorAll('.image-slide');
    const imageTrack = document.querySelector('.image-slider-track');
    
    
    leafContainer.addEventListener('animationiteration', function() {
        this.style.animation = 'none';
        this.offsetHeight;  
        this.style.animation = 'leafScroll 20s linear infinite';
    });
    
    imageTrack.addEventListener('animationiteration', function() {
        this.style.animation = 'none';
        this.offsetHeight;  
        this.style.animation = 'scroll 30s linear infinite';
    });
});