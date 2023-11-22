// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", () => {
  // Your existing code...

  document.addEventListener("click", function (event) {
    if (event.target.classList.contains("like-glyph")) {
      mimicServerCall()
        .then(() => {
          // Toggle between empty and full hearts
          toggleHeart(event.target);
        })
        .catch((error) => {
          // Handle server error
          displayErrorModal(error);
        });
    }
  });

  function toggleHeart(heart) {
    if (heart.classList.contains("activated-heart")) {
      // If the heart is activated (full), change it back to empty
      heart.innerHTML = EMPTY_HEART; // Assuming you have a variable or HTML for an empty heart
      heart.classList.remove("activated-heart");
    } else {
      // If the heart is not activated (empty), change it to full
      heart.innerHTML = FULL_HEART; // Assuming you have a variable or HTML for a full heart
      heart.classList.add("activated-heart");
    }
  }
});

function mimicServerCall() {
  // Simulate a server call
  return new Promise((resolve, reject) => {
    // Simulate a failure status (for demonstration purposes)
    setTimeout(() => {
      reject("Server Error: Unable to like post.");
    }, 1000);
  });
}

function displayErrorModal(errorMessage) {
  const modal = document.getElementById("modal");
  const modalMessage = document.getElementById("modal-message");

  modalMessage.textContent = errorMessage;

  // Remove the hidden class to display the modal
  modal.classList.remove("hidden");

  // Hide the modal after 3 seconds using setTimeout
  setTimeout(() => {
    // Add the hidden class to hide the modal
    modal.classList.add("hidden");
  }, 3000);
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
