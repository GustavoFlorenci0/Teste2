const btnMobiles = document.getElementById('btn-Mobile');

function toggleMenu(event) {
    if (event.type === 'touchstart') event.preventDefult();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAttribute('aria-expanded', active);
}

btnMobiles.addEventListener('click', toggleMenu);
btnMobiles.addEventListener('touchstart', toggleMenu);
