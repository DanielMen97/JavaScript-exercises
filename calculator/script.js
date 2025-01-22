const darkModeBtn = document.querySelector('.dark')
const ligthModeBtn = document.querySelector('.ligth')
const galaxyModeBtn = document.querySelector('.galaxy')

darkModeBtn.addEventListener('click', () => setUserTheme('dark'))
ligthModeBtn.addEventListener('click', () => setUserTheme('ligth'))
galaxyModeBtn.addEventListener('click', () => setUserTheme('galaxy'))

function setUserTheme(theme) {
   document.documentElement.setAttribute("data-theme", theme)
}


