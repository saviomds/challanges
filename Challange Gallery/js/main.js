// JavaScript for zoom effect
const images = document.querySelectorAll(".image-wrapper img");

images.forEach((image) => {
  // Add event listener for mouseover event
  image.addEventListener("mouseover", () => {
    image.style.transform = "scale(1.1)";
  });
 // Add event listener for mouseout event
  image.addEventListener("mouseout", () => {
    image.style.transform = "scale(1)";
  });
});
