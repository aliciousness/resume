const messages = [
    "Looks like our metal warrior is at the spa, getting a tune-up and a polish!",
    "Just doing a bit of cleaning. Hang tight!",
    "Updating my website to serve you better. Stay tuned!"
];
const messageElement = document.querySelector('#maintenance-message p');

let messageIndex = 0;

function changeMessage() {
    messageElement.textContent = messages[messageIndex++];
    if (messageIndex >= messages.length) messageIndex = 0;
}

// Change message every 5 seconds
setInterval(changeMessage, 5000);

// Smooth scroll back to top if needed
function smoothScroll() {
    if (window.scrollY > 0) {
        window.requestAnimationFrame(smoothScroll);
        window.scrollTo(0, window.scrollY - window.scrollY / 30);
    }
}

window.onload = () => {
    setTimeout(smoothScroll, 100);
};
