const imageWrappers = document.querySelectorAll(".image-wrapper");

imageWrappers.forEach((wrapper) => {
  const image = wrapper.querySelector("img");
  // Add event listener for mouseover event
  wrapper.addEventListener("mouseover", () => {
    wrapper.style.filter = "brightness(0.4) blur(5px)"; // Darken and blur the wrapper
  });
  // Add event listener for mouseout event
  wrapper.addEventListener("mouseout", () => {
    wrapper.style.filter = "none"; // Reset filter
  });
});
