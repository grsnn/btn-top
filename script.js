const buttonTop = document.querySelector('#buttonTop');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
        buttonTop.classList.add('shows')
    } else {
        buttonTop.classList.remove('shows')
    }
    buttonTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    })
}