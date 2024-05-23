const puzzle = {
  prompt: "Number found in the message?",
  answer: ["twenty-three", "23", "twenty three"],
};

let incorrectAttempts = 0;

function submitAnswer() {
  const answerBox = document.getElementById('answer-box');
  const responseSection = document.getElementById('response-section');
  const hintSection = document.getElementById('hint-section');
  const messageSection = document.getElementById('message-section');
  const rightArrow = document.getElementById('right-arrow');
  const correctSound = document.getElementById("correct-sound");
  const incorrectSound = document.getElementById("incorrect-sound");

  const userAnswer = answerBox.value.trim().toLowerCase();
  if (puzzle.answer.map(a => a.toLowerCase()).includes(userAnswer)) {
    messageSection.innerText = "Correct!";
    messageSection.style.color = "green"; // Make the text green for correct answer
    hintSection.style.display = 'none';
    rightArrow.style.display = 'inline-block'; // Show the right arrow
    correctSound.play(); // Play correct sound

    // Navigate to the next riddle after a short delay
    setTimeout(() => {
      window.location.href = '/riddle-3/riddle-3.html'; // Update with the actual path to the next riddle
    }, 2000);
  } else {
    messageSection.innerText = "Incorrect. Try again!";
    messageSection.style.color = "red"; // Make the text red for incorrect answer
    incorrectSound.play(); // Play incorrect sound
    incorrectAttempts++;
    if (incorrectAttempts >= 3) {
      hintSection.style.display = 'block';
      hintSection.innerText = puzzle.hint;
    }
  }
}

function navigate(direction) {
  if (direction === 'left') {
    // Logic to navigate to the previous page
    window.location.href = '../intro/index.html'; // Update with the actual path
  } else if (direction === 'right') {
    // Logic to navigate to the next page
    window.location.href = '/riddle-3/riddle-3.html'; // Update with the actual path
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const audioElement = document.getElementById("background-music");
  const volumeSlider = document.getElementById("volume-slider");

  // Update volume for all audio elements
  function updateVolume(volume) {
    audioElement.volume = volume;
    document.getElementById("correct-sound").volume = volume;
    document.getElementById("incorrect-sound").volume = volume;
  }

  // Volume control
  volumeSlider.addEventListener("input", function() {
    updateVolume(volumeSlider.value);
  });

  // Function to play background music
  function playAudio() {
    audioElement.muted = false;
    audioElement.play().catch(error => {
      console.log("Autoplay was prevented:", error);
    });
  }

  // Play background music on page load
  playAudio();
});
