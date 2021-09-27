



const t = [
    "Front End Developer"
]

const t2 = [
    "A small gallery of recent projects chosen by me. ",
    " It's only a drop in the ocean compared to the entire list.",
    " Interested to see some more? Visit my work page."
]


/**
   * Easy selector helper function
   */
 const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy on scroll event listener 
   */
   const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }


function typeText() {
    let line = 0
    let count = 0
    let out = ''
    let htmlOut = document.querySelector('.text-writer')

    function typeLine() {
        // Малюэмо строку
        let interval = setTimeout(()=>{
            out += t[line][count]
            htmlOut.innerHTML = out + '|'
            count++

            // Перевірки
            if (count >= t[line].length) {
                count = 0
                line++
                if (line==t.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out // Убираем палку |
                    return true
                }
            }
            typeLine()
        } , 200)
    }
    typeLine()

}

typeText()

function typeText2() {
    let line = 0
    let count = 0
    let out = ''
    let htmlOut = document.querySelector('.text-writer2')

    function typeLine2() {
        // Малюэмо строку
        let interval = setTimeout(()=>{
            out += t2[line][count]
            htmlOut.innerHTML = out + '|'
            count++

            // Перевірки
            if (count >= t2[line].length) {
                count = 0
                line++
                if (line==t2.length) {
                    clearTimeout(interval);
                    htmlOut.innerHTML = out // Убираем палку |
                    return true
                }
            }
            typeLine2()
        } , 50)
    }
    typeLine2()

}

typeText2()

let backtotop = select('.scroll-down')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

   // Parallax
   
   document.addEventListener('mousemove', parallax)
   function parallax(e){
    
    let layer = document.querySelector('.layer')
    let speed = layer.getAttribute('data-speed')
     layer.style.transform = `translateX(${e.clientX*speed/500}px)`
   }

   // Menu

   let btn = document.querySelector('#btn_menu')
   let sidebar = document.querySelector('.sidebar')
   btn.addEventListener('click', () => {
    sidebar.classList.toggle('active')
   })
   
 