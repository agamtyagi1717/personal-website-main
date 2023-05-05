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

// const contactCollapsible = document.querySelector(".contact-form");
// const contactToggle = document.querySelector(".contact-btn");

// contactToggle.addEventListener("click", ()=>{
//     const visibility = contactCollapsible.getAttribute('data-visible');

//     console.log(visibility);

//     if(visibility==="false"){
//         contactCollapsible.setAttribute("data-visible", true);
//         contactToggle.setAttribute("aria-expanded", true);
//     }
//     else{
//         contactCollapsible.setAttribute("data-visible", false);
//         contactToggle.setAttribute("aria-expanded", false);
//     }

// })

$("#contact-form-button").click(function () {
    $("#contact-form-id").slideToggle(300);
});