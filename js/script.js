let navList = document.querySelector("nav>ul");
let navLinks = document.querySelectorAll("nav>ul>li>a");
let panels = document.querySelectorAll("main>div");
document.querySelector(".scroll-top").style.display = "none";
function showMessage() {
  setTimeout(() => {
    document.querySelector(".t-message").style.display = "none";
  }, 5000);
  document.querySelector(".t-message").style.display = "block";
}

window.addEventListener("scroll", (e) => {
  var current = "";
  if (window.scrollY < window.innerHeight) {
    document.querySelector(".scroll-top").style.display = "none";
  } else {
    document.querySelector(".scroll-top").style.display = "flex";
  }

  panels.forEach((item) => {
    if (item.offsetTop <= scrollY) {
      current = item.getAttribute("id");
    }
  });
  // console.log(current);
  // window.location.hash = `#${current}`;
  location.hash.replace(`#${current}`);

  setActiveOnClick(`#${current}`);
});

function setActiveOnClick(hash = location.hash) {
  navLinks.forEach((element) => {
    if (element.hash == hash) {
      element.classList.add("active");
    } else {
      element.classList.remove("active");
    }
  });
}
setActiveOnClick();

navList.addEventListener("click", (e) => {
  console.log(e.target.hash);
  setActiveOnClick(e.target.hash);
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
