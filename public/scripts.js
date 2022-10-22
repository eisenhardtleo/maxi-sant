$(document).ready(function () {
    $(".hamburger").on("click", () => {
      $(".menu").toggleClass("menu--open");
    });
    $("a").on("click", ()=>{
      $(".menu").removeClass("menu--open");
    })
  });

  let PB = {};
  document.addEventListener("DOMContentLoaded", ()=>{
    PB.barra = document.getElementById("progress");
    PB.html = document.documentElement;
    PB.barra.style.width = "0%";
  })

  window.addEventListener("scroll", progressFn);

  function progressFn(){
    const scrollTotale = PB.html.scrollHeight - PB.html.clientHeight;
    PB.barra.style.width = (PB.html.scrollTop * 100) / scrollTotale + "%";   
  }

ScrollReveal().reveal(".reveal", { 
                                    distance: "100px",
                                    duration : 1000,
                                    easing: "cubic-bezier(0.215, 0.610, 0.355, 1)",
                                    interval : 300
                                  });
ScrollReveal().reveal(".zoom", { 
                                    duration : 500,
                                    easing: "cubic-bezier(0.215, 0.610, 0.355, 1)",
                                    interval : 250,
                                    scale : 0.65
                                  });


  // let fullname = document.getElementById("fullname");
  // let email = document.getElementById("email");
  // let subject = document.getElementById("subject");
  // let message = document.getElementById("message");

// document.forms[0].addEventListener("submit", (e)=>{
//   e.preventDefault();

//   let formData = {
//     fullname : fullname.value,
//     email : email.value,
//     subject : subject.value,
//     message : message.value
//   };

//   let xhr = new XMLHttpRequest();
//   xhr.open("POST", "/");
//   xhr.setRequestHeader("content-type", "application/json");
//   xhr.onload = ()=>{
//     if (xhr.status == 200){
//       alert("Messaggio inviato correttamente");
//       document.forms[0].reset();
//     } else {
//       alert("Something went wrong")
//     }
//   }
//   xhr.send(JSON.stringify(formData))
// })
