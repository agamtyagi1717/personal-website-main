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
        Username : "agamtyagi1717@gmail.com",
        Password : "1ED861BADC8DD0DCF6CC2D953918E64981F9",
        To : 'agamtyagi1717@gmail.com',
        From : 'agamtyagi1717@gmail.com',
        Subject : "New Contact Form Enquiry",
        Body : "Name: "+ document.getElementById("name").value + "<br>Email: "+ document.getElementById("email").value + "<br>Phone Number: " + document.getElementById("phone").value + "<br>Enquiry: " + document.getElementById("message").value
    }).then(
    //   message => alert("Thank You! I'll get back to you ASAP")
        document.getElementById("send").innerHTML="Email Sent, thank you!",
        document.getElementById("send").setAttribute("class", "send-button-clicked")
    );
}