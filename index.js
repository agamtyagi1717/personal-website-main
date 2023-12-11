const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

$("#contact-form-button").click(function () {
  $("#contact-form-id").slideToggle(400);
});

function sendMail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "agamtyagi17@gmail.com",
    Password: "8854FA9A52D7F4B59F288634EE954FA84420",
    To: "agamtyagi1717@gmail.com",
    From: "agamtyagi17@gmail.com",
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br>Email: " +
      document.getElementById("email").value +
      "<br>Phone Number: " +
      document.getElementById("phone").value +
      "<br>Enquiry: " +
      document.getElementById("message").value,
  }).then(
    //   message => alert("Thank You! I'll get back to you ASAP")
    (document.getElementById("send").innerHTML = "Email Sent, thank you!"),
    document.getElementById("send").setAttribute("class", "send-button-clicked")
  );
}

let kanyeQuote = document.getElementById("kanyeQuote");
function fetchData() {
  fetch("https://api.kanye.rest/")
    .then((response) => response.json())
    .then((data) => {
      kanyeQuote.innerHTML =
        "<strong> <q>" + data.quote + "</q></strong>" + "<br/>";
    });
}

gsap.registerPlugin(ScrollTrigger);

// gsap.to("#intro", {
//   scrollTrigger: {
//     trigger: "#intro",
//     start: "top bottom",
//     end: "500 bottom",
//     // scrub: true,
//     // markers: "true"
//   },
//   duration: 3,
//   text: "I am a passionate web developer based in India with an eye for captivating design. I love creating user-friendly websites that leave a lasting impression. Optimizing with data structures is my forte. Continuous learning drives my innovation.",
//   ease: "none",
// });



function switchTab(clickedButton) {
  var allButtons = document.querySelectorAll(".tabbutton");
  allButtons.forEach(function (button) {
    button.classList.remove("activetab-btn");
  });

  var allTabs = document.querySelectorAll(".tab");
  allTabs.forEach(function (tab) {
    tab.classList.remove("activetab");
  });

  clickedButton.classList.add("activetab-btn");

  var buttonIndex = Array.from(allButtons).indexOf(clickedButton);

  allTabs[buttonIndex].classList.add("activetab");
}

