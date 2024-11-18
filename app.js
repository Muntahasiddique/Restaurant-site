// JavaScript to make the navbar sticky on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {  // Adjust the scroll threshold as needed
        navbar.classList.add('sticky');
        console.log("Sticky class added");  // Debugging line
    } else {
        navbar.classList.remove('sticky');
        console.log("Sticky class removed");  // Debugging line
    }
});
