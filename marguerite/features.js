// Add animation for rotation around the medial-lateral axis (tilting forward and backward)
const personMx = document.querySelector(".MxPersonImage");
    let rotationMx = 0;
    let directionMx = 1;

    function rotatePersonMx() {
        rotationMx += directionMx * 1; // Increment rotation angle back and forth
        if (rotationMx > 40 || rotationMx < -40) {
            directionMx *= -1; // Reverse direction when reaching limits
        }
        personMx.style.transform = `rotateX(${rotationMx}deg)`; // Tilt forward and backward

        requestAnimationFrame(rotatePersonMx); // Keep oscillating smoothly
    }
    rotatePersonMx();

// Add animation for rotation around the anterior-posterior axis (cartwheel motion without full rotation)
const personMy = document.querySelector(".MyPersonImage");
let rotationMy = 0;
let direction = 1;

function rotatePersonMy() {
    rotationMy += direction * 1; // Increment rotation angle back and forth
    if (rotationMy > 21 || rotationMy < -21) {
        direction *= -1; // Reverse direction when reaching limits
    }
    personMy.style.transform = `rotateZ(${rotationMy}deg)`; // Rotate the person around Z-axis (cartwheel motion)

    requestAnimationFrame(rotatePersonMy); // Keep oscillating smoothly
}
rotatePersonMy();








