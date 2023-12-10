// himitsu:)
const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA', 'Enter'];
let konamiCodeIndex = 0;

function handleKeyDown(event) {
  if (event.code === konamiCode[konamiCodeIndex]) {
    konamiCodeIndex++;
  
    if (konamiCodeIndex === konamiCode.length) {
      const konamimain = document.getElementById('konamimain');
      konamimain.classList.add('konamivisible');
      konamiCodeIndex = 0;
    }
  } else {
    konamiCodeIndex = 0;
  }
}

document.addEventListener('keydown', handleKeyDown);

function konamiclose() {
    var konamimain = document.getElementById('konamimain');
    if (konamimain) {
        konamimain.classList.remove('konamivisible');
        konamimain.classList.add('konamihidden');
    }
}