// Move to Page 2 when Move button is clicked
document.getElementById("move-btn").addEventListener("click", function() {
    window.location.href = "tv.html";
  });

  document.getElementById("move-btn1").addEventListener("click", function() {
    window.location.href = "FRIDGE.html";
  });

  document.getElementById("move-btn2").addEventListener("click", function() {
    window.location.href = "monitor.html";
  });

  document.getElementById("move-btn3").addEventListener("click", function() {
    window.location.href = "ac.html";
  });
  
  // Go back to previous page when Back button is clicked
  document.getElementById("back-btn").addEventListener("click", function() {
    window.history.back();
  });
  