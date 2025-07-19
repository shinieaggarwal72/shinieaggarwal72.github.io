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
function showPopup(text) {
  const el = document.getElementById('popup-text');
  let i = 0;
  el.textContent = '';
  document.getElementById('retro-dialogue').classList.remove('hidden');

  function typeWriter() {
    if (i < text.length) {
      el.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 30);
    }
  }
  typeWriter();
}

function closePopup() {
  document.getElementById('retro-dialogue').classList.add('hidden');
}

document.addEventListener('DOMContentLoaded', () => {
  showPopup(`> Welcome to my portfolio. 
        I am a final year CS student at Thapar Institute of Engineering and Technology, Patiala. 
        I have a strong interest in Machine Learning and Computer Vision. 
        Looking forward to joining a dynamic team where I can grow, innovate, and make an impact.`);
});

