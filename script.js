


const navEL = document.querySelector('nav.main-nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 250) {
        navEL.classList.add('navbar-scrolled');
    } else if (window.scrollY <= 250) {
        navEL.classList.remove('navbar-scrolled');
    }
});