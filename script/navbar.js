const profile = document.querySelector('.profile')

profile.addEventListener('click', () =>{
    const dropdown = document.querySelector('.dropdown')
    const iconProfile = document.querySelector('.icon-profile')
    dropdown.classList.toggle('dropdown-visible')
    iconProfile.classList.toggle('rotate')
})

const section = document.querySelector('.section-music')

section.addEventListener('scroll', () =>{
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('navbar-fixed', section.scrollTop > 0)
})