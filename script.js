    document.addEventListener('DOMContentLoaded', () => {
        const burger = document.querySelector('.menu-burger');
        const navLinks = document.querySelector('.navbar ul');

        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    });
