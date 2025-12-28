function nextPage() {
    window.location.href = 'yes.html';
}

function moveButton() {
    let button = document.getElementById('noButton');
    let x = Math.random() * (window.innerWidth - button.clientWidth);
    let y = Math.random() * (window.innerHeight - button.clientHeight);
    button.style.position = 'absolute';
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
    button.classList.add('wiggle');
    setTimeout(() => button.classList.remove('wiggle'), 500);
}

document.addEventListener('DOMContentLoaded', () => {
    const heartsContainer = document.createElement('div');
    heartsContainer.classList.add('hearts-container');
    document.body.appendChild(heartsContainer);
    
    setInterval(() => {
        let heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 2 + 3 + 's';
        heartsContainer.appendChild(heart);
        
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }, 500);
});
