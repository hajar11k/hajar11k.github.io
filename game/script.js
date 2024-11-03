const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

// Function to move buttons randomly
const moveButton = (btn) => {
  const wrapper = document.querySelector(".wrapper");
  const wrapperRect = wrapper.getBoundingClientRect();
  const btnRect = btn.getBoundingClientRect();

  // Calculate max positions to ensure the button stays within the wrapper
  const maxX = wrapperRect.width - btnRect.width;
  const maxY = wrapperRect.height - btnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  // Set the button's new position
  btn.style.left = randomX + "px";
  btn.style.top = randomY + "px";
};

// Event listeners to move both buttons on mouseover
yesBtn.addEventListener("mouseover", () => moveButton(yesBtn));
noBtn.addEventListener("mouseover", () => moveButton(noBtn));

// Fireworks function when the "Yes" button is clicked
const showFireworks = () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
};

// Add event listener for the "Yes" button click to show fireworks
yesBtn.addEventListener("click", showFireworks);
