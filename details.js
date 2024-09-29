const form = document.querySelector("form"),
  nextBtn = form.querySelector(".nextBtn"),
  backBtn = form.querySelector(".backBtn"),
  allInput = form.querySelectorAll(".first input");

// Function to show thank you message
function showThankYouMessage() {
  // Create a pop-up div element
  const popup = document.createElement("div");
  popup.textContent =
    "Thank You! Your details have been saved successfully, and you will shortly receive an email confirmation";
  popup.style.position = "fixed";
  popup.style.top = "50%";
  popup.style.left = "50%";
  popup.style.transform = "translate(-50%, -50%)";
  popup.style.padding = "20px";
  popup.style.backgroundColor = "#e44c65";
  popup.style.color = "#fff";
  popup.style.borderRadius = "10px";
  popup.style.fontSize = "18px";
  popup.style.zIndex = "1000";

  // Add the popup to the body
  document.body.appendChild(popup);

  // Remove the popup after 3 seconds
  setTimeout(() => {
    popup.remove();
  }, 3000);
}

nextBtn.addEventListener("click", () => {
  allInput.forEach((input) => {
    if (input.value != "") {
      form.classList.add("secActive");
    } else {
      form.classList.remove("secActive");
    }
  });
});

backBtn.addEventListener("click", () => form.classList.remove("secActive"));

// Add submit event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // Prevent the form from actually submitting
  showThankYouMessage(); // Show thank you pop-up
});
