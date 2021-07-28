const t = [
    "Front End Developer"
]

const t2 = [
    "A small gallery of recent projects chosen by me. ",
    " It's only a drop in the ocean compared to the entire list.",
    "Interested to see some more? Visit my work page."
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