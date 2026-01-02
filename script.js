emailjs.init("rqgLgOCLUdqI2Z3CP");

const form = document.getElementById("formulario");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const params = {
    nombre: document.getElementById("nombre").value,
    correo: document.getElementById("correo").value,
    mensaje: document.getElementById("mensaje").value
  };

  emailjs
    .send("service_fdx4sz8", "template_n0m164v", params)
    .then(function () {
      alert("Mensaje enviado correctamente 📩");
      form.reset();
    })
    .catch(function (error) {
      console.error("ERROR:", error);
      alert("Error al enviar el mensaje ❌");
    });
});
