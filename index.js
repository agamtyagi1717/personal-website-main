const primaryNav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", ()=>{
    const visibility = primaryNav.getAttribute('data-visible');

    if(visibility==="false"){
        primaryNav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    }
    else{
        primaryNav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})


$("#contact-form-button").click(function () {
    $("#contact-form-id").slideToggle(400);
});

function sendMail(){
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "agamtyagi17@gmail.com",
        Password : "8854FA9A52D7F4B59F288634EE954FA84420",
        To : 'agamtyagi1717@gmail.com',
        From : 'agamtyagi17@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : "Name: "+ document.getElementById("name").value + "<br>Email: "+ document.getElementById("email").value + "<br>Phone Number: " + document.getElementById("phone").value + "<br>Enquiry: " + document.getElementById("message").value
    }).then(
    //   message => alert("Thank You! I'll get back to you ASAP")
        document.getElementById("send").innerHTML="Email Sent, thank you!",
        document.getElementById("send").setAttribute("class", "send-button-clicked")
    );
}

let kanyeQuote = document.getElementById('kanyeQuote');
      function fetchData() {
         fetch('https://api.kanye.rest/')
         .then(response => response.json())
         .then(data => {
            kanyeQuote.innerHTML = "<strong> <q>" + data.quote + "</q></strong>" + "<br/>";
         })
      }