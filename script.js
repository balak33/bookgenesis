var modal = document.getElementById("myModal");

function showModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function verifyCode() {
  var code = document.getElementById('code').value;

  if (code === '15915926') { // Change this to your desired verification code
    window.location.href = 'main-page.html'; // Change 'main-page.html' to the URL of your main page
  } else {
    var errorMessage = document.getElementById('error-message');
    errorMessage.textContent = 'Incorrect verification code. Please try again.';
  }
}
