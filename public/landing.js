const navbarTab = document.getElementsByClassName('navbar-tab')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

navbarTab.addEventListener('click', () => {
  toggleNavTab()
})

const toggleNavTab = () => {
  openMenu()
  closeMenu()
}

const openMenu = () => {
  navbarLinks.classList.toggle('active')
  navbarLinks.classList.remove('roll-in')
  navbarLinks.classList.remove('display-none')
}

const closeMenu = () => {
  if(!navbarLinks.classList.contains('active')){
    navbarLinks.classList.add('roll-in')
       return setTimeout(() => {
        navbarLinks.classList.add('display-none')
      },500 )
  }
}