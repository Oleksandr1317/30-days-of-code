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

document.addEventListener('DOMContentLoaded', function() {
    const main_text = document.querySelector('.main-text');
    if (main_text) {
        main_text.innerHTML = `This is a place for <span id='span-text-content'>text content</span>.`;
    } else {
        console.error("Element with class '.main-text' not found.");
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const jsProjects = document.getElementById('java-script-projects');
    const otherProjects = document.getElementById('other-project');

    jsProjects.addEventListener('click', function() {
        window.location.href = 'https://github.com/Oleksandr1317/30-days-of-code';
    });

    otherProjects.addEventListener('click', function() {
        window.location.href = 'https://github.com/Oleksandr1317?tab=repositories';
    });
});

