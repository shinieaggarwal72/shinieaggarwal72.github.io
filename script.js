const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

const text = "Shinie Aggarwal.";
let index = 0;
const typedSpan = document.querySelector('.typed-text');

function type() {
    if (index < text.length) {
        typedSpan.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100);
    }
}

document.addEventListener('DOMContentLoaded', type);

