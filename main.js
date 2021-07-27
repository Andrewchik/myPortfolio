const t = [
    "Front End Developer"
]



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