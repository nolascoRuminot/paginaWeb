const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})

$(document).ready(function(){
    $('#btn2').click(function(){
        $('#modal-login').modal('show');
    });

});

// Agrega un listener para el evento 'input' en el campo de texto
document.getElementById('textoInput').addEventListener('input', function() {
// Obtiene el valor del campo de texto
var texto = this.value;
// Define una expresión regular que solo permita letras y espacios
var regex = /^[a-zA-Z\s]*$/;
// Verifica si el valor del campo coincide con la expresión regular
if (!regex.test(texto)) {
// Si no coincide, muestra un mensaje de error
this.setCustomValidity('Informacion incorrecta.');
} else {
// Si coincide, elimina cualquier mensaje de error
this.setCustomValidity('');
}
});