document.addEventListener("DOMContentLoaded", function() {

  emailjs.init("cSIK8ibo3UZSVqsbF");

  const form = document.getElementById("form");

  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_cqrtvm3", "template_qv8q3gr", this)
      .then(() => {
        alert("¡Revisa tu correo!");

        window.open("https://chani1119.github.io/Feria_Vocacional/Plan-de-estudios-Informatica-y-Tecnologia-Multimedia.pdf", "_blank");

        form.reset();
      })
      .catch((error) => {
        alert("Error al enviar");
        console.log(error);
      });

  });

});