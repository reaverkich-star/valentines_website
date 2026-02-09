function showMessage() {
  const message = document.getElementById('message');
  const currentDisplay = window.getComputedStyle(message).display;

  if (currentDisplay === 'block') {
    message.style.display = 'none';
  } else {
    message.style.display = 'block';
  }
}