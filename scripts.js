document.addEventListener("DOMContentLoaded", function() {
    const menuItems = document.querySelectorAll('#menu a');

    menuItems.forEach(item => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            document.querySelector(item.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
