document.addEventListener("DOMContentLoaded", function () {
    // Modern Animation Effects
    let menuItems = document.querySelectorAll('.menu-item');
    
    menuItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.5}s`;
    });

    // Animation for Header & Subheading
    let header = document.querySelector('header');
    header.classList.add('animate__animated', 'animate__fadeInUp');
    
    // Popup Alert on Page Load
    setTimeout(function () {
        alert("Welcome to Fast Food Hub! Enjoy your meal.");
    }, 2000);

    // Cool Hover Effect on Menu Items
    menuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = "scale(1.1)";
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = "scale(1)";
        });
    });
});
