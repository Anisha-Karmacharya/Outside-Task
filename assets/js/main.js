// HEADER
const actionDrop = document.getElementById('scholarship');
const navbar = document.getElementById('navBar');
const overlay = document.getElementById('overlay');
console.log(overlay.style.display)
if(actionDrop){
    actionDrop.addEventListener('click', () => {
        navbar.classList.toggle('header__nav-bar--active');
        actionDrop.classList.toggle('nav-items__single-item--active');
        overlay.style.display = ((overlay.style.display = '') ? 'block' : 'none');
    })
}