document.addEventListener("DOMContentLoaded", function () {
    const projectLinks = document.querySelectorAll(".project-link");
    const siteImg = document.querySelector(".site-img");
  
    projectLinks.forEach((link) => {
      link.addEventListener("mouseover", function () {
        const imageUrl = this.getAttribute("data-image");
        siteImg.src = imageUrl;
      });
  
      link.addEventListener("mouseout", function () {
        // You can add logic here if you want to revert the image on mouseout
        // For example, you might want to keep the original image on mouseout.
      });
    });
  });