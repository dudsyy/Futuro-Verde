function toggleMenu() {
    var navMenu = document.getElementById('navMenu');
    if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
    } else {
        navMenu.classList.add('show');
    }
}
