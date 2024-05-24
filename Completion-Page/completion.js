$(document).ready(function() {
  // Initial fade-in for the whole page
  $('body').hide().fadeIn(2000);

  // Function to show popups with fade-in effect
  function showPopup(message) {
    const popup = $('<div class="popup"></div>').text(message);
    $('body').append(popup);
    popup.hide().fadeIn(1000);

    // Auto-hide the popup after 3 seconds
    setTimeout(function() {
      popup.fadeOut(1000, function() {
        $(this).remove();
      });
    }, 3000);
  }

  // Example usage of showPopup
  showPopup('Congratulations on completing the quest!');

  // Additional interactive elements
  $('#completion-button').click(function() {
    $('#completion-message').fadeIn(1000);
    showPopup('You have claimed your prize!');
  });

  // Function to handle prize claiming
  function claimPrize() {
    showPopup('You can exchange this for $400!');
    $('#claim-prize-button').fadeOut(500, function() {
      $(this).text('Prize Claimed').fadeIn(500);
    });
  }

  // Event listener for claim prize button
  $('#claim-prize-button').click(claimPrize);

  // Animate the wizard and clouds
  function animateElements() {
    $('.wizard').animate({ bottom: '0' }, 2000).animate({ bottom: '-10%' }, 2000);
    $('.clouds').animate({ left: '0' }, 2000).animate({ left: '-4%' }, 2000);
  }

  // Call animateElements on page load
  animateElements();
});

// CSS for popups
const styles = `
  .popup {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    z-index: 1000;
    font-size: 18px;
    text-align: center;
  }
  #completion-message {
    display: none;
    font-size: 24px;
    color: green;
  }
  #claim-prize-button {
    display: inline-block;
    padding: 10px 20px;
    font-size: 18px;
    cursor: pointer;
    background-color: gold;
    color: black;
    border: 2px solid black;
    border-radius: 5px;
  }
`;

// Inject styles into the document
$('<style>').text(styles).appendTo('head');
