document.addEventListener("DOMContentLoaded", function() {
  const audioElement = document.getElementById("background-music");
  const volumeSlider = document.getElementById("volume-slider");
  const correctSound = document.getElementById("correct-sound");
  const incorrectSound = document.getElementById("incorrect-sound");

  // Set initial volume based on slider value
  function setInitialVolume() {
    const initialVolume = volumeSlider.value;
    audioElement.volume = initialVolume;
    correctSound.volume = initialVolume;
    incorrectSound.volume = initialVolume;
  }

  // Update volume for all audio elements
  function updateVolume(volume) {
    audioElement.volume = volume;
    correctSound.volume = volume;
    incorrectSound.volume = volume;
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

  // Set initial volume and play background music on page load
  setInitialVolume();
  playAudio();
});