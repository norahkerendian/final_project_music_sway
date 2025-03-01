// Add animation for rotation around the medial-lateral axis (tilting forward and backward)
const person = document.querySelector('.front');
let rotation = 0;

function rotatePerson() {
  rotation += 1; // Increment rotation angle
  person.style.transform = `rotateX(${rotation}deg)`; // Rotate the person around the X-axis (tilting forward and backward)

  requestAnimationFrame(rotatePerson); // Keep rotating smoothly
}
rotatePerson()







