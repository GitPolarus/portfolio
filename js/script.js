document.querySelector(".scroll-top").style.display = "none";
function showMessage() {
  setTimeout(() => {
    document.querySelector(".t-message").style.display = "none";
  }, 5000);
  document.querySelector(".t-message").style.display = "block";
}

window.addEventListener("scroll", (e) => {
  if (window.scrollY < window.innerHeight) {
    document.querySelector(".scroll-top").style.display = "none";
  } else {
    document.querySelector(".scroll-top").style.display = "flex";
  }
  //   console.log(window.screenY, e);
});

window.onload = function () {
  let contactForm = document.getElementById("contact-form");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm("portfolio-service", "portfolio-contact", this).then(
      function () {
        console.log("SUCCESS!");

        contactForm.reset();
        showMessage();
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  });
};
