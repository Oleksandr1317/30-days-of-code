// ViaTagName
console.warn(`ByTagName: `)
const allH1Elements = document.getElementsByTagName('h1')
console.log(allH1Elements.length)

for (let i = 0;i < allH1Elements.length;i++){
    console.log(allH1Elements[i])
}

// ViaClassName
console.warn('ByClassName: ')
const allClassNameElements = document.getElementsByClassName('title')
console.log(allClassNameElements.length)

for(let i = 0;i< allClassNameElements.length;i++){
    console.log(allClassNameElements[i]);
}

// ViaID
console.warn(`ByID: `)
const elementWithHasId = document.getElementById('first-title')
console.log(elementWithHasId)

// ViaQuerySelector (only first element)
console.warn(`ByQuerySelector: `)
let firstTitle = document.querySelector('h1') // select the first available h1 element
let firstTitle1 = document.querySelector('#first-title') // select id with first-title
let firstTitle2 = document.querySelector('.title') // select the first available element with class title

console.log(firstTitle)
console.log(firstTitle1)
console.log(firstTitle2)

// ViaQuerySelectorAll (selected all elements)
console.warn(`ByQuerySelectorAll: `)
const allTitles = document.querySelectorAll('h1')
console.log(`use for : `)
for(let i = 0;i< allTitles.length;i++){
    console.log(allTitles[i])
}
console.log(`use forEach:`)
allTitles.forEach(title => console.log(title))

// AddIdClass and other for 4 titles :

const titles = document.querySelectorAll(`h1`)
titles[3].className = `title`
titles[3].id = `fourth-title`
// Or :
// titles[3].setAttribute('class', 'title')
// titles[3].setAttribute('id', 'fourth-title')

// ClassList - не изменяет класс а добавляет ещё один к елементу :
//another way to setting an attribute: append the class, doesn't over ride
titles[3].classList.add('title', 'header-title')

titles[3].classList.remove('title', 'header-title')

// Добавляем текст к елементам: 
titles[3].textContent = `Fourth title`

// Добавляем стиль к тексту :

titles.forEach((title,i) => {
    title.style.fontSize = `24px`
    if(i % 2 === 0) {
        title.style.color = `white`
    }
    else {
        title.style.color = `black`
    }
})

titles.forEach((title, i) => {
  title.style.fontSize = '24px'
  if (i % 2 === 0) {
    title.style.backgroundColor = 'green'
  } else {
    title.style.backgroundColor = 'red'
  }
})

titles.forEach((title, i) => {
  title.style.fontSize = '24px' 
  if (i % 2 === 0) {
    title.style.fontSize = '20px'
  } else {
    title.style.fontSize = '30px'
  }
})