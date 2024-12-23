const confettiContainer = document.getElementById('confetti');

// Generate a random color for confetti pieces
const randomColor = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffcc00', '#ff00ff', '#00ffff'];
    return colors[Math.floor(Math.random() * colors.length)];
};

// Create confetti pieces and animate them
const createConfetti = () => {
    const confettiPiece = document.createElement('div');
    confettiPiece.classList.add('confetti-piece');
    confettiPiece.style.backgroundColor = randomColor();
    confettiPiece.style.left = `${Math.random() * 100}vw`;
    confettiPiece.style.animationDuration = `${Math.random() * 2 + 3}s`; // Random falling time
    confettiPiece.style.animationDelay = `${Math.random() * 2}s`; // Random start delay
    confettiContainer.appendChild(confettiPiece);

    // Remove the confetti piece after animation completes
    setTimeout(() => {
        confettiPiece.remove();
    }, 5000); // Cleanup after animation ends
};

// Continuously create confetti
setInterval(createConfetti, 90); // Create new confetti every 100ms

