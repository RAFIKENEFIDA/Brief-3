
function myfunction(){

var nom = document.querySelector("#contact-nom").value
var sujet=document.querySelector("#contact-sujet").value
var message=document.querySelector("#contact-message").value
var email=document.querySelector("#contact-email").value
  


document.querySelector("#addition").innerHTML = "<p style='margin-top:10px'>Name : "+ nom+ "</p>"+"<p style='margin-top:10px'>Email: "+email+"</p>"+"<p style='margin-top:10px'>Sujet : "+ sujet + "</p>"+"<p style='margin-top:10px'>Message: "+message+"<br></p>"+"<p style='color:white;text-align:center;margin-top:10px;font-size:20px' >votre message a bien été envoyé</p>";}

let modal = document.querySelector(".modal");
let show = document.querySelector(".show");
let closeButton = document.querySelector(".close-button");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

show.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
