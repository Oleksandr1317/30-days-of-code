window.addEventListener('load', () => {
    const textContainers = document.querySelectorAll('.text');

    textContainers.forEach(container => {
        const letters = container.textContent.split('');
        container.innerHTML = '';
        
        letters.forEach((letter, index) => {
            const span = document.createElement('span');
            span.textContent = letter;
            span.style.animationDelay = `${index * 0.1}s`;
            container.appendChild(span);
        });
    });
});
