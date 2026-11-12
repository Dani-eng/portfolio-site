// Find the element that displays the year
const yearElement = document.getElementById("year");

// Update it to the current year if it exists
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}
