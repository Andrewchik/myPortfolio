const preloader = document.querySelector('.preloader')

// setTimeout(()=>{ preloader.style.display = 'none' }, 1850)
window.addEventListener('load', ()=>{
    setTimeout(()=>{ preloader.classList.add('active') }, 1750)
})


