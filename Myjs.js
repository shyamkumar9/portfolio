var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var sidemenu = document.getElementById("sidemenu");

// scrolling
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    // console.log(entry);
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
// observe all hidden elements
hiddenElements.forEach((el) => observer.observe(el));

// for auto typing
var typed = new Typed(".auto-input", {
  strings: ["Shyam.", " A Data Scientist.", " A Software Engineer."],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});

// about section
let aboutText = "Data Science Grad Student from IU Bloomington.";
document.getElementById("about-text").textContent = aboutText;

// for linking google sheets(contact section)
const scriptURL =
  "https://script.google.com/macros/s/AKfycbzr2yz5Az2ZXdMt8tv7tXB9-bZGFZwDQ0b6VtSwDBkrhkJ_gisYnKIXgVjSsUceX2GQIA/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent Successfully!";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});

document.addEventListener("click", function onclicking(event) {
  // Check if the clicked element is a tab link
  if (event.target.classList.contains("tab-links")) {
    for (tablink of tablinks) {
      tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
      tabcontent.classList.remove("active-tab");
    }
    event.target.classList.add("active-link");
    // Get the index of the clicked tab link in the "tablinks" array
    var tablinkIndex = Array.prototype.indexOf.call(tablinks, event.target);
    // Add the "active-tab" class to the corresponding tab content
    tabcontents[tablinkIndex].classList.add("active-tab");
  }
  // Check if the clicked element is the open menu icon
  if (event.target.classList.contains("fa-bars")) {
    sidemenu.style.right = "0";
  }
  // Check if the clicked element is the close menu icon
  if (event.target.classList.contains("fa-xmark")) {
    sidemenu.style.right = "-200px";
  }
});
