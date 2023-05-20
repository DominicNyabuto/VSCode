const navToggle = documet.querySelector('.nav-toggle')
const links = document.querySelector('.links ')

navToggle.addEventListener('click', function(){ 
    links.classList.toggle('show-links')
})