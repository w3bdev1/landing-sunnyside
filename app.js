const topNav = document.querySelector('.nav-header')
const hamburger = document.querySelector('.hamburger')

hamburger.addEventListener('click', () => {
	if (!topNav.style.display || topNav.style.display == 'none') {
		topNav.style.display = 'block'
	} else {
		topNav.style.display = 'none'
	}
})
