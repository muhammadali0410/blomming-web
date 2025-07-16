 
document.addEventListener('DOMContentLoaded', function() {
     
    document.querySelectorAll('[href="#birthday-section"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showCategory('birthday');
        });
    });

    document.querySelectorAll('[href="#wedding-section"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showCategory('wedding');
        });
    });

    document.querySelectorAll('[href="#anniversary-section"]').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            showCategory('anniversary');
        });
    });

    function showCategory(category) {
      
        document.querySelectorAll('#birthday-collection, #wedding-collection, #anniversary-collection').forEach(section => {
            section.style.display = 'none';
        });

         
        document.querySelector(`#${category}-collection`).style.display = 'block';
        
        
        document.querySelector(`#${category}-collection`).scrollIntoView({
            behavior: 'smooth'
        });
    }
    document.querySelectorAll('#birthday-collection, #wedding-collection, #anniversary-collection').forEach(section => {
        section.style.display = 'block';
    });
});