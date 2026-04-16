document.addEventListener("DOMContentLoaded", function() {

  (function(){
    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this);
  })();

  document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("TU_SERVICE_ID", "TU_TEMPLATE_ID", this)
      .then(() => {
        alert("¡Revisa tu correo!");
        this.reset();
      }, (error) => {
        alert("Error al enviar");
        console.log(error);
      });
  });

});