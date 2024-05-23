// Array to keep track of the page order
const pageOrder = ['wizard-intro', 'name-accepted', 'lore', 'lore-part2', 'lore-part3', 'accept-prompt', 'completion-page'];
let currentPageIndex = 0;

// Function to show a specific page by id
function showPage(pageId) {
  // Hide all pages
  const pages = document.querySelectorAll('.background-shrek');
  pages.forEach(page => page.style.display = 'none');

  // Show the specified page
  const page = document.getElementById(pageId);
  if (page) {
    page.style.display = 'flex';
    updateNavigationButtons(pageId); // Update navigation buttons
    currentPageIndex = pageOrder.indexOf(pageId); // Update the current page index
  } else {
    console.error(`Page with id ${pageId} not found.`);
  }
}

// Function to check the name input and show the name-accepted page
function checkName() {
  const nameInput = document.getElementById('name-input').value.trim().toLowerCase();
  if (nameInput) {
    showPage('name-accepted');
  } else {
    alert('Please enter your name.');
  }
}

// Function to show or hide navigation buttons
function updateNavigationButtons(pageId) {
  const leftArrow = document.getElementById('left-arrow');
  const rightArrow = document.getElementById('right-arrow');

  // Hide left arrow on the first page
  if (pageId === 'wizard-intro') {
    leftArrow.style.display = 'none';
  } else {
    leftArrow.style.display = 'block';
  }

  // Optionally, handle right arrow visibility
  // For example, hide right arrow on the last page
  if (pageId === 'completion-page') {
    rightArrow.style.display = 'none';
  } else {
    rightArrow.style.display = 'block';
  }
}

// Initialize event listeners for buttons
document.addEventListener('DOMContentLoaded', function() {
  // Initial Page - Submit button
  document.querySelector('#initial-chat button').addEventListener('click', function() {
    checkName();
  });

  // Initially hide navigation buttons on the first page load
  updateNavigationButtons('wizard-intro');
});

// Function to navigate left or right
function navigate(direction) {
  if (direction === 'left') {
    if (currentPageIndex > 0) {
      currentPageIndex -= 1;
      showPage(pageOrder[currentPageIndex]);
    }
  } else if (direction === 'right') {
    if (currentPageIndex < pageOrder.length - 1) {
      currentPageIndex += 1;
      showPage(pageOrder[currentPageIndex]);
    }
  }
}

// Function to start the quest
function startQuest(accept) {
  if (accept) {
    alert('Starting the quest...');
    window.location.href = '../riddle-1/riddle-1.html'; // Redirect to riddle-1.html if the user accepts
  } else {
    alert("Too bad, you're the chosen one.");
    // Add your code for quest rejection
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const audioElement = document.getElementById("background-music");
  const volumeSlider = document.getElementById("volume-slider");

  // Function to play audio
  function playAudio() {
      audioElement.muted = false;
      audioElement.play().catch(error => {
          console.log("Autoplay was prevented:", error);
      });
  }

  // Event listener to handle user interaction
  document.addEventListener("click", function() {
      playAudio();
  });

  // Volume control
  volumeSlider.addEventListener("input", function() {
      audioElement.volume = volumeSlider.value;
  });
});

// Function to claim the prize
function claimPrize() {
  alert('You can exchange this for $400!');
}
