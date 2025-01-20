/* TextWriter */

const text = [
    "DEV",
    "BACKEND"
];

let speed = 200;

const textElements = document.querySelector(".typewriter-text");

let textIndex = 0;
let characterIndex = 0;

function typewriter() {
    if (characterIndex < text[textIndex].length) {
        textElements.innerHTML += text[textIndex][characterIndex];
        characterIndex++;
        setTimeout(typewriter, speed);
    } else {
        setTimeout(eraseText, 1000); 
    }
}

function eraseText() {
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1);
        setTimeout(eraseText, 150);
    } else {
        textIndex = (textIndex + 1) % text.length;
        characterIndex = 0;
        setTimeout(typewriter, 500);
    }
}

window.onload = typewriter;

/*modo mobile nav bar*/

const hamburgButton = document.querySelector('.fa-bars.hamburg');
const cancelButton = document.querySelector('.fa-xmark.cancel');
const dropdown = document.querySelector('.dropdown');

// Evento para abrir o menu
hamburgButton.addEventListener('click', () => {
  dropdown.classList.add('show'); 
  hamburgButton.style.display = 'none'; 
  cancelButton.style.display = 'block';
});

// Evento para fechar o menu
cancelButton.addEventListener('click', () => {
  dropdown.classList.remove('show'); 
  hamburgButton.style.display = 'block'; 
  cancelButton.style.display = 'none'; 
});

// Responsividade
window.addEventListener('resize', () => {
  if (window.innerWidth > 968) {
    dropdown.classList.remove('show'); 
    hamburgButton.style.display = 'none'; 
    cancelButton.style.display = 'none'; 
  } else {
    hamburgButton.style.display = 'block'; 
  }
});

/*Download PDF*/ 
  function baixarPDF() {
    const link = document.createElement('a'); 
    link.href = 'pdf/Curriculo Samuel Bueno da Silva.pdf';
    link.download = 'Curriculo Samuel Bueno da Silva.pdf';
    link.click(); 
  };
 

