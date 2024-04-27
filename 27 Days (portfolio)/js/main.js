const changingText = document.querySelector('.text-animation');
const iconElement = document.querySelector('.icon-content-language');
const texts = ['C# basic', 'Python basic', 'SQL basic', 'HTML and CSS', 'JavaScript'];
const icon = [ '🔥','☀️','🖥','💻','⚡️']
let currentIndex = 0;

changingText.addEventListener('animationiteration', () => {
    currentIndex++;
    if (currentIndex >= texts.length) {
        currentIndex = 0;
    }
    changingText.textContent = texts[currentIndex];

    if(currentIndex >= icon.length){
        currentIndex = 0;
    }
    iconElement.textContent = icon[currentIndex]
});