document.addEventListener('DOMContentLoaded', () => {
  
  // Increase and Decrease Button Functionality
  let actionBtns = document.querySelectorAll('.action');
  let countDisplay = document.querySelector('.counter');

  actionBtns.forEach(button => {
    button.addEventListener('click', () => {
      let currentVal = Number(countDisplay.value);
      if(button.classList.contains('up')) {
        countDisplay.value = ++currentVal;
      } else if(button.classList.contains('down') && currentVal > 0) {
        countDisplay.value = --currentVal;
      }
    });
  });

  // Slider Functionality
  let rangeInput = document.querySelector('.range-slider');
  let rangeDisplay = document.querySelector('.range-output span');

  rangeInput.addEventListener('input', () => {
    rangeDisplay.textContent = rangeInput.value;
  });

  // Image Hover Functionality
let imageBox = document.querySelector('.image-container');
let frontImage = imageBox.querySelector('.front-img');
let backImage = imageBox.querySelector('.back-img');

function switchImg() {
    frontImage.classList.toggle('visible');
    frontImage.classList.toggle('hidden');
    backImage.classList.toggle('hidden');
    backImage.classList.toggle('visible');
}

imageBox.addEventListener('mouseenter', switchImg);
imageBox.addEventListener('mouseleave', switchImg);})
