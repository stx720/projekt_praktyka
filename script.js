const togglebutton = document.getElementsByClassName('toggle-button')[0]
const linkscontainer = document.getElementsByClassName('links-container')[0]

togglebutton.addEventListener('click', () => {
    linkscontainer.classList.toggle('active')
})