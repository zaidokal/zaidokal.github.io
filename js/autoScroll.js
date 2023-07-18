// Get the container element
var container = document.querySelector(".skillsList");

// Clone the container contents and append them after the originals
container.innerHTML += container.innerHTML;
container.innerHTML += container.innerHTML;

// Calculate the total width of the content
var contentWidth = container.scrollWidth;

// Define the scroll speed (adjust as needed)
var scrollSpeed = 2; // Measured in pixels per frame

// Define the scroll direction
var scrollDirection = "left";

console.log(contentWidth);

// Function to scroll the container
function scrollContainer() {
  if (scrollDirection === "left") {
    container.scrollLeft -= scrollSpeed;

    // If scrolled to the beginning, change the direction to 'right'
    if (container.scrollLeft <= 0) {
      // container.scrollLeft = 0; // Reset to the beginning
      scrollDirection = "right";
    }
  } else {
    container.scrollLeft += scrollSpeed;

    // If scrolled to the end, change the direction to 'left'
    if (container.scrollLeft >= 2385) {
      // container.scrollLeft = contentWidth; // Reset to the beginning to keep scrolling content visible
      scrollDirection = "left";
    }
  }
}

// Call the scrollContainer function periodically
setInterval(scrollContainer, 15); // Adjust the interval as needed
