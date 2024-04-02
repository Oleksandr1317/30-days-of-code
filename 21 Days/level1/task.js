console.warn(`Task 1`)
const firstParagraph = document.querySelector(`p`)
console.log(firstParagraph)

console.warn(`Task 2`)
const firstParagraph1 = document.querySelector(`#Paragraph-one`)
const SecondParagraph = document.querySelector(`#Paragraph-two`)
const ThirdParagraph = document.querySelector(`#Paragraph-three`)
const FourthParagraph = document.querySelector(`#Paragraph-four`)
console.log(firstParagraph1)
console.log(SecondParagraph)
console.log(ThirdParagraph)
console.log(FourthParagraph)

console.warn(`Task 3`)
const paragraph = document.querySelectorAll(`p`)
paragraph.forEach(title => console.log(title))

console.warn(`Task 4`)
paragraph.forEach(title => console.log(title.textContent))

// OR
console.log(`OR`)

var paragraphOne = document.getElementById("Paragraph-one").textContent;
var paragraphTwo = document.getElementById("Paragraph-two").textContent;
var paragraphThree = document.getElementById("Paragraph-three").textContent;
var paragraphFour = document.getElementById("Paragraph-four").textContent;
console.log(paragraphOne);
console.log(paragraphTwo);
console.log(paragraphThree);
console.log(paragraphFour);

console.warn(`T 4`)
paragraphFour = `4 p`
console.log(paragraphFour)
console.log(`OR`)
const fourParagraphTextContedChanged = document.querySelector(`#Paragraph-four`)
fourParagraphTextContedChanged.textContent = `4 p`
console.log(fourParagraphTextContedChanged.textContent)

console.warn(`T 5`) 
const allParagraph = document.querySelectorAll(`p`)
allParagraph[4].id = `FiveParagraph`
allParagraph[4].setAttribute(`class`,'paragraph-f')
allParagraph[4].classList.add('paragraph-f','test')

