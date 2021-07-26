const menuBtn = document.getElementById('menu')
const elements = document.getElementsByClassName('elements')[0]


menuBtn.addEventListener('click', menuOn)

function menuOn() {
    menuBtn.classList.toggle('active')

    if (menuBtn.classList.contains('active')) {
        elements.style.display = 'flex'
    }else{
        elements.style.display = 'none'
    }
}