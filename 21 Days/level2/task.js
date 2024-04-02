const allParagraph = document.querySelectorAll(`p`)
allParagraph.forEach((p,i) => {
    p.style.fontSize = `24px`
    p.style.fontWeight = `bold`
    p.style.padding = `6px`
    p.style.margin = `1rem auto`
    p.style.fontFamily = `sans-serif`
    if (i % 2 === 0) {
        p.style.backgroundColor = `green`
        p.style.color = `black`
    }
    else {
        p.style.backgroundColor = `red`
        p.style.color = `white`
    }
})